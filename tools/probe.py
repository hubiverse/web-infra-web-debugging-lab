"""probe.py - call an API directly, without a browser.

Examples:
    python tools/probe.py GET http://localhost:3000/api/users
    python tools/probe.py POST http://localhost:3000/api/users '{"name": "Ama", "email": "ama@example.com"}'
    python tools/probe.py GET http://localhost:3000/api/orders --header "Authorization: Bearer demo-token-123"
"""
import argparse
import json
import sys

import requests


def parse_headers(raw_headers):
    headers = {}
    for raw in raw_headers:
        name, sep, value = raw.partition(":")
        if not sep:
            print(f'Header must look like "Name: value", got: {raw}')
            sys.exit(2)
        headers[name.strip()] = value.strip()
    return headers


def main():
    parser = argparse.ArgumentParser(description="Send one HTTP request and show everything.")
    parser.add_argument("method", help="GET, POST, PUT, DELETE, ...")
    parser.add_argument("url", help="Full URL, for example http://localhost:3000/api/users")
    parser.add_argument("body", nargs="?", help="Optional JSON body, in quotes")
    parser.add_argument("--header", action="append", default=[], help='"Name: value" (can repeat)')
    args = parser.parse_args()

    kwargs = {"headers": parse_headers(args.header)}
    if args.body is not None:
        try:
            kwargs["json"] = json.loads(args.body)
        except json.JSONDecodeError as err:
            print(f"The body is not valid JSON: {err}")
            sys.exit(2)

    try:
        response = requests.request(args.method.upper(), args.url, timeout=10, **kwargs)
    except requests.exceptions.ConnectionError:
        print(f"Could not connect to {args.url}. Is the server running?")
        sys.exit(1)

    print("=== REQUEST ===")
    print(f"{response.request.method} {response.request.url}")
    for name, value in response.request.headers.items():
        print(f"{name}: {value}")

    print("\n=== RESPONSE ===")
    print(f"{response.status_code} {response.reason}")

    print("\n=== RESPONSE HEADERS ===")
    for name, value in response.headers.items():
        print(f"{name}: {value}")

    print("\n=== BODY ===")
    try:
        print(json.dumps(response.json(), indent=2))
    except ValueError:
        print(response.text[:2000])


if __name__ == "__main__":
    main()
