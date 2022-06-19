#!/usr/bin/python3

import socket
// Creates the Socket
clientsocket = socket.socket(socket.AF_INET, SOCK_STREAM)
// Gets the host details 
host = socket.gethostbyname()

port = 488


clientsocket.bind(host, port)

//connects to the socket
clientsocket.connect((host ,port))

//limits the message recived 
message = clientsocket.recv(1024)

clientsocket.close()

//prints  the decoded message from the tcp server
print(message.decode('ascii'))

