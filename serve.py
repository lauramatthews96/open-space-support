#!/usr/bin/env python3
"""Local static server with Netlify-style pretty URLs (/counsellors → counsellors.html)."""

from __future__ import annotations

import argparse
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit

ROOT = os.path.dirname(os.path.abspath(__file__))


class PrettyHTMLHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        parsed = urlsplit(path)
        rel = parsed.path.lstrip("/")
        directory = getattr(self, "directory", ROOT)
        fs_path = os.path.normpath(os.path.join(directory, rel))
        if os.path.isfile(fs_path):
            return fs_path
        html_path = fs_path + ".html"
        if os.path.isfile(html_path):
            return html_path
        if os.path.isdir(fs_path):
            index = os.path.join(fs_path, "index.html")
            if os.path.isfile(index):
                return index
        return super().translate_path(path)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    os.chdir(ROOT)
    server = ThreadingHTTPServer(("127.0.0.1", args.port), PrettyHTMLHandler)
    print(f"Serving {ROOT} at http://127.0.0.1:{args.port}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
