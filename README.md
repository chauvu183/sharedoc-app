# shareDoc - a platform for students

**shareDoc** collects study materials from all students in one place where they can share and download their materials and learn for their exams with the help of these materials.

## Content
* Setup
* [Documents](https://gitlab.informatik.haw-hamburg.de/acm321/sharedoc-app/tree/master/Documents/01_Requirements/01_Analyse)
* [How to use Git](https://gitlab.informatik.haw-hamburg.de/acm321/sharedoc-app/blob/master/How_to_use_git.md)

# Setup
Description how to start the app in backend and frontend.

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

Navigate to `http://localhost:8080/`

### Requirements for frontend

* Nodejs
* Npm
* Angular CLI


### Run the frontend app
```bash
cd /sharedoc_frontend

# Install dependencies
npm install

# Run frontend with ng OR npm
ng serve
npm start
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# Simple Rules
**You should never push changes directly to the master branch**

* Create a new branch for every feature
* Use Pull Requests to merge code to master
    * Request a review from someone
* Write good commit messages


# Links
* [Präsentation 1](https://docs.google.com/presentation/d/1rslVkKotUgM8MrJTsWSXLtxtmuF1wf9uHDsZDGS-bOU/edit?usp=sharing)
* [Präsentation 2](https://docs.google.com/presentation/d/1M9IX9j2SKvjF7N8zWdFfeWnuE7Cp2Kv62WhHJm31SFU/edit?usp=sharing)
* [Owncloud](https://cloud.haw-hamburg.de/index.php/f/27438247)

