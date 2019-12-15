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

You need to create a database sharedoc_admin in MySQL.

```bash
# Start mysql server
brew services start mysql

# Log into mysql as root
mysql -u root

# Creating and Selecting a Database
CREATE DATABASE sharedoc_app;

# Create a new User
CREATE USER 'sharedoc_admin'@'localhost' IDENTIFIED BY 'admin';

# Grant privileges to the new user
GRANT ALL PRIVILEGES ON sharedoc_app . * TO 'sharedoc_admin'@'localhost';

FLUSH PRIVILEGES;

# Log into mysql as sharedoc_admin
mysql -u sharedoc_admin -p

USE sharedoc_app
```

### Run the backend app
```bash
cd /sharedoc_backend

# Build the project
mvn clean install

# Run the project
mvn spring-boot:run
```

# Testing the APIs with Postman
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
```
```
### Viewing Postman Tests in the sharedoc_app database

After you have tested the APIs in Postman, here's how to lool it up in the sharedoc_app database.

```bash
# Start mysql server
brew services start mysql

# Log into mysql as sharedoc_admin
mysql -u sharedoc_admin -p

# Change to the sharedoc_app database
USE sharedoc_app

# Display all tables in your database
show tables;

# Display table's content
SELECT * FROM <table_name>;
```
