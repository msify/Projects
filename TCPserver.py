import socket

serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostbyname()
port = 444


serversocket.bind((host, port))

serversocket.listen
