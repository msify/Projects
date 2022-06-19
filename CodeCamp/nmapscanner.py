#!/bin/usr/python3
import nmap

scanner = nmap.PortScanner()

print('Welcome, this is a simple nmap automation tool')
print("<------------------------------------------------------>")


ip_addr = input('Please enter the ip address you want to scan')
print("The IP to scan is", ip_addr)
type(ip_addr)

resp = input("""" \nPlease enter type of scan you want to run
                    1) SYN ACK scan
                    2) UDP scan
                    3) Comprehensive Scan \n Enter Option: """)
print("You have selected option: ", resp)

if resp == '1':
    print("Nmap Version: ", scanner.nmap_version())
    scanner.scan(ip_addr, '1-1024' '-v -sS')
    print(scanner.scaninfo())
    print("Status of IP: ", scanner[ip_addr].state())
    print(scanner[ip_addr].all_protocols())
    print("Open Ports: ", scanner[ip_addr]['tcp'].keys())
elif resp == '2':
    print("Nmap Version: ", scanner.nmap_version())
    scanner.scan(ip_addr, '1-1024' '-v -sU')
    print(scanner.scaninfo())
    print("Status of IP: ", scanner[ip_addr].state())
    print(scanner[ip_addr].all_protocols())
    print("Open Ports: ", scanner[ip_addr]['udp'].keys())
elif resp == '3':
    print("Nmap Version: ", scanner.nmap_version())
    scanner.scan(ip_addr, '1-1024' '-v -sS -sV -sC -A -O')
    print(scanner.scaninfo())
    print("Status of IP: ", scanner[ip_addr].state())
    print(scanner[ip_addr].all_protocols())
    print("Open Ports: ", scanner[ip_addr]['tcp'].keys())

else:
     print("Please enter valid option")
