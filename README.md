# Cisco-Packet-Mastery
This repository contains projects and implementations for various network concepts and protocols. It includes a comprehensive Cisco Packet project covering a wide range of networking topics and a chatroom application using socket programming.

## Table of Contents

## 1. Projects
- #### Cisco Packet Project
  **File:** [Cisco-Project](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/tree/main/CiscoNet%20Solutions)  
    ##### This project covers the following concepts:
    - Dynamic Routing
    - NAT (Network Address Translation)
    - OSPF - RIP (Open Shortest Path First - Routing Information Protocol)
    - Telnet & SSH (Secure Shell)
    - VLAN (Virtual Local Area Network)
    - VLSM - FLSM (Variable Length Subnet Masking - Fixed Length Subnet Masking)

- #### Chatroom Application
  **File:** [Chat-Room](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/tree/main/WebSocket-ChatRoom)  
    ##### Description:
    This project implements a chatroom using socket programming and a web application running on localhost. It is created within the context of computer networks and demonstrates the practical use of sockets for real-time communication.
    ##### Chatroom Application Files
    - **chatroom_server.py:** Server-side implementation for the chatroom using socket programming. This file sets up the server to handle multiple client connections, manage messages, and ensure real-time communication.
    - **chatroom_client.py:** Client-side implementation for the chatroom. This file connects to the chatroom server, allowing users to send and receive messages in real-time.
    - **web_application:** Directory containing web application files to run the chatroom interface on localhost. This includes HTML, CSS, and JavaScript files to provide a user-friendly interface for the chatroom.

## 2. Concept Covered
- #### Cisco Packet Project Files
    - [**Tcp_udp_server_client:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/TCP-UDP.docx) Demonstrates the implementation of TCP and UDP protocols using server-client architecture. The file contains code to set up both TCP and UDP servers and clients, showcasing the fundamental differences and use cases for each protocol.
    - [**Topology_cli_configuration:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/Configure%20the%20topology%20using%20CLI%20mode.docx) Provides instructions on how to configure network topologies using Command Line Interface (CLI) mode in Cisco Packet Tracer. This includes setting up devices, connecting them, and verifying connectivity.
    - [**Dynamic_routing_config:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/Dynamic%20Routing.docx) Contains configuration steps for setting up dynamic routing protocols. This includes protocols like OSPF (Open Shortest Path First) and RIP (Routing Information Protocol), explaining how routers can dynamically learn and update routes.
    - [**Nat_config:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/NAT.docx) Describes the setup and configuration of Network Address Translation (NAT). This file explains how NAT works to allow multiple devices on a local network to be mapped to a single public IP address for internet access.
    - [**Ospf_rip_config:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/OSPF%20-%20RIP.pdf) Detailed configuration steps for both OSPF and RIP routing protocols. This file provides comparative insights and practical examples of setting up and using these protocols in a network.
    - [**Static_dynamic_routing_config:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/Static%20%26%20Dynamic%20Nat.docx) Explains the differences between static and dynamic routing, including configuration examples for both. This file helps understand when to use static routes and how dynamic routing protocols can automate route management.
    - [**Static_routing_subnetting:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/Static%20Routing.docx) Provides configuration examples for static routing and subnetting. This file includes practical exercises on creating subnets, assigning IP addresses, and setting up static routes in a network.
    - [**Telnet_ssh_config:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/Telnet%20%26%20SSH.docx) Contains instructions on configuring Telnet and SSH for remote management of network devices. This file highlights the importance of secure remote access and provides step-by-step configuration for both protocols.
    - [**Vlan_config:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/VLAN.docx) Details the configuration of Virtual Local Area Networks (VLANs). This file explains how VLANs work, their benefits in segmenting network traffic, and provides practical examples of setting up VLANs on switches.
    - [**Vlsm_flsm_config:**](https://github.com/M-Muntazer-Mehdi/Cisco-Packet-Mastery/blob/main/VLSM%20-%20FLSM.pdf) Explains Variable Length Subnet Masking (VLSM) and Fixed Length Subnet Masking (FLSM). This file includes examples and exercises to understand and configure both types of subnetting schemes.

## 3. Prerequisites
- Cisco Packet Tracer or similar network simulation tool
- Web browser

## 4. Installation
- Clone the repository: `git clone https://github.com/yourusername/network-projects-repo.git`
- Navigate to the project directory: `cd network-projects-repo`
- Chatroom Application / Run the server script: `python chatroom_server.py`
- Open a new terminal and run the client script: `python chatroom_client.py`
- Open the web application in a browser to use the chatroom interface.

## 5. Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the existing style and conventions.
