# Server part of application


## Mongo with DOCKER

* If you don't have mongo docker image: `docker pull mongo`
* For run image `docker run -p 27017:27017 --name app-mongo -d mongo`
* stop: `docker stop app-mongo`
* restart: `docker restart app-mongo`
* remove: `docker rm app-mongo`