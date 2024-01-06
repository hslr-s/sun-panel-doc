# Using Reverse Proxy + External Access

[Sun-Proxy](https://github.com/hslr-s/sun-proxy) is a simple implementation of basic reverse proxy functionality developed by the author using Go. Its purpose is to support the [Sun-Panel](https://github.com/hslr-s/sun-panel) plugin (future plans include integrating them to allow configuration within Sun-Panel, achieving true modularity). In addition to Sun-Proxy, we will also use [frp](https://github.com/fatedier/frp) for internal network penetration.

This tutorial utilizes `docker-compose` to greatly simplify the process. If you find any shortcomings or have better methods, please feel free to contact the [author](/introduce/author_groups.html).

::: danger Use with Caution
Due to the recent development of the [Sun-Proxy](https://github.com/hslr-s/sun-proxy) program, its stability is yet to be tested. Please use it with caution.
:::

## Objectives

This tutorial is specifically for users who do not have a public IP at home, allowing external access to the website hosted on NAS through a domain (subdomain or path) with SSL authentication. It also supports automatic input of `basic auth` authentication and adds an additional layer of `basic auth` authentication for public websites.

## Prerequisites

- A server with a public IP (cloud server)
- Domain name
- frp server set up on the server [installation guide](https://gofrp.org/zh-cn/docs/setup/)

Illustration:

![](/images/advanced/use_reverse_proxy/diagram.jpg)

## Domain Resolution and Security Groups

Resolve your (sub)domain to the IP you want to use. If using a cloud server, open two ports in the security group in advance: one for `http` and another for `https`. If SSL is required, apply for the certificate in advance.

## Docker Compose Execution

> Create a folder named `sun-panel-proxy`. Inside it, create three files: `sun-proxy.yml`, `fprc.toml`, and `docker-compose.yml`.

1. `sun-proxy.yml` (The following file is an example; modify it according to your needs. Refer to the [Sun-Proxy documentation](https://github.com/hslr-s/sun-proxy) for complete details.)

```yml 
name: sun-proxy
port:
  http: 8080
  https: 8081
rules:
  - domain: "sun.panel.com" # sun-panel
    path: "/" 
    target_url: "http://192.168.3.100:3002" 
    cert: # Certificate address
      key:
        ./cert/privkey.key
      pem:
        ./cert/fullchain.pem
  - domain: "example.com" # Proxy domain (should not include port)
    path: "/" # Proxy address /example/other/path
    target_url: "http://google.com/" # Target address http://example.sun.sun
    cert: # Certificate address
      key:
        ./cert/privkey.key
      pem:
        ./cert/fullchain.pem
    auth: # Authentication information
      username:
        admin
      password:
        123456
    target_basic_auth: # Target authentication information (automatically input)
      username:
        admin
      password:
        123456
```

2. Edit the configuration file in advance `fprc.toml` (The following file is an example; modify only if necessary.)

```toml {1,2,11-12,18-19}
serverAddr = "x.x.x.x" # Public IP of the server
serverPort = 8004 

# Set a password consistent with the server, remove "#" at the beginning of the line if you want to set it
# auth.token = "12345678"  

[[proxies]]
name = "http"
type = "tcp"
localIP = "sun-proxy"
localPort = 8080    # Should correspond to post.http in reverse_proxys.yml on the NAS side
remotePort = 8080   # Open port on the server 

[[proxies]]
name = "https"
type = "tcp"
localIP = "sun-proxy"
localPort = 8081    # Should correspond to post.https in reverse_proxys.yml on the NAS side
remotePort = 8081   # Open port on the server 
```

3. Edit the configuration file in advance `docker-compose.yml`

```yml
version: "3.2"

services:
    sun-panel:
        image: 'hslr/sun-panel:latest'
        container_name: sun-panel
        volumes:
            - ./conf:/app/conf
            - ./uploads:/app/uploads
            - ./database:/app/database
            # - ./runtime:/app/runtime
        ports:
            - 3002:3002
        restart: always
    sun-proxy:
        image: 'hslr/sun-proxy:latest'
        container_name: sun-proxy
        volumes:
            - ./sun-proxy.yml:/app/sun-proxy.yml
            - ./cert:/app/cert
        ports:
            - 8080:8080 # http
            - 8081:8081 # https
        restart: always
        command: ['./sun-proxy', '-c', './sun-proxy.yml']
    frpc:
        image: 'snowdreamtech/frpc:latest'
        container_name: frpc
        volumes:
            - ./frpc.toml:/etc/frp/frpc.toml
        restart: always

```

4. Start and Stop

Navigate to the directory and open the command line:

```sh
# Run (-d for running in the background)
docker-compose up -d

# Stop
docker-compose down
```