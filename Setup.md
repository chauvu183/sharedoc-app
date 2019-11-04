# Steps to Setup

## Install Keycloak Server
```bash
cd /keycloak-7.0.1
cd bin
./standalone.sh -Djboss.socket.binding.port-offset=100
```

## Clone the repository
```bash
git clone https://gitlab.informatik.haw-hamburg.de/sharedoc-group/sharedoc-app.git
```

## Run the app

```bash
cd /sharedoc_backend
mvn spring-boot:run
```

## Uploading an Downloading files with Spring Boot

Testing the APIs via Postman

### Upload File
```
POST http://localhost:8080/uploadDocument
```

### Download File

```
GET http://localhost:8080/downloadDocument/<Document.pdf>
```
