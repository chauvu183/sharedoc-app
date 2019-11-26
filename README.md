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
### Steps:
*  After installing Keycloak sucessfully go to the bin Directory of Keycloak and run the following command to run Keycloak Server Locally
```bash
cd /keycloak-7.0.1
cd bin
./standalone.sh -Djboss.socket.binding.port-offset=100
```
*  After running keycloak sucessfully, go to the localhost:8180 => admin console => username = admin , pass = admin
*  Create a new Realm and import the realm-export.json file from the Project under Keycloak directory
*  To run the the sharedoc-app the keycloak server has to run parallelly alongside front-end Server
*  For more info (https://www.keycloak.org/docs)

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

