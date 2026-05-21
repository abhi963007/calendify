import http.server
import socketserver
import webbrowser
import threading
import sys
import time

PORT = 8000
DIRECTORY = "."

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    # Allow address reuse
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Server successfully started at http://localhost:{PORT}")
        httpd.serve_forever()

if __name__ == "__main__":
    print("--------------------------------------------------")
    print("🚀 Starting local development server for Calendify...")
    print("--------------------------------------------------")
    
    # Start server in a separate thread
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    
    # Wait a moment for server to initialize
    time.sleep(1)
    
    # Open the home page in the default web browser
    url = f"http://localhost:{PORT}/project/home/home.html"
    print(f"✨ Opening your default browser to: {url}")
    webbrowser.open(url)
    
    print("\n💡 Keep this window open while browsing.")
    print("❌ Press Ctrl+C in this terminal to stop the server.")
    print("--------------------------------------------------")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n👋 Server stopped. Have a great day!")
        sys.exit(0)
