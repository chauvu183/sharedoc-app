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
```
POST /documents/uploadDocument

POST /documents/uploadMultipleDocuments

GET /documents/downloadDocument/{fileId}

DELETE /documents//uploadDocument/{fileId}

POST /pinboard/entries

POST /pinboard/entries/{entryId}/comments

GET /pinboard/entries

GET /pinboard/entries/{entryId}/comments

PUT /pinboard/entries/{entryId}

PUT /pinboard/entries/{entryId}/comments/{commentId}

DELETE /pinboard/entries/{entryId}

DELETE http://localhost:8080/pinboard/entries/{entryId}/comments/{commentId}
```

**Upload File**
![upload file](sharedoc_backend/screenshots/upload_doc.png)

**Download File**
![download file](sharedoc_backend/screenshots/download_doc.png)

**Create a new entry**
![create entry](sharedoc_backend/screenshots/create_entry.png)

**Create a new comment**
![create comment](sharedoc_backend/screenshots/create_comment.png)