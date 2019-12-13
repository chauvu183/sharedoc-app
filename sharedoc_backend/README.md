# Steps to Setup

### Clone the repository
```bash
git clone https://gitlab.informatik.haw-hamburg.de/sharedoc-group/sharedoc-app.git
```

### Requirements for backend

[Install Keycloak Server](https://www.keycloak.org/downloads.html)
```bash
cd /keycloak-7.0.1
cd bin
./standalone.sh -Djboss.socket.binding.port-offset=100
```

### Run the backend app
```bash
cd /sharedoc_backend

# Build the project
mvn clean install

# Run the project
mvn spring-boot:run
```

Navigate to [http://localhost:8080/h2-console](http://localhost:8080/h2-console)

**JDBC URL** jdbc:h2:mem:sharedocdb

**User** sharedoc

**Password** (look into the application.properties)

# Testing the APIs

### Uploading and Downloading files

**Upload File**
```
POST http://localhost:8080/uploadDocument
```

**Download File**
```
GET http://localhost:8080/downloadDocument/<Document.pdf>
```

### Creating an entry / a comment

**Create a new entry**
```
POST http://localhost:8080/pinboard/entries/
```

**Create a new comment**
```
POST http://localhost:8080/pinboard/entries/{entryId}/comments
```

**Get all entries**
```
GET http://localhost:8080/pinboard/entries/
```

**Get comments to an entry**
```
GET http://localhost:8080/pinboard/entries/{entryId}/comments
```

**Update an entry**
```
PUT http://localhost:8080/pinboard/entries/{entryId}
```

**Update a comment**
```
PUT http://localhost:8080/pinboard/entries/{entryId}/comments/{commentId}
```

**Delete an entry**
```
DELETE http://localhost:8080/pinboard/entries/{entryId}
```

**Delete a comment**
```
DELETE http://localhost:8080/pinboard/entries/{entryId}/comments/{commentId}
```