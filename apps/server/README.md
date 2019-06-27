# Server part of application

## How to run app locally:

1) Add .env file in the root directory with next variables:

FIREBASE_TYPE=  
FIREBASE_PROJECT_ID=  
FIREBASE_PRIVATE_KEY_ID=  
FIREBASE_PRIVATE_KEY=  
FIREBASE_CLIENT_EMAIL=  
FIREBASE_CLIENT_ID=  
FIREBASE_AUTH_URI=  
FIREBASE_TOKEN_URI=  
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=  
FIREBASE_CLIENT_X509_CERT_URL=
FIREBASE_DATABASE_URL=  

*Value should be in quotes*

2) Run mongo DB
3) `npm i`
4) `npm run start`

------

## Mongo with DOCKER

* If you don't have mongo docker image: `docker pull mongo`
* For run image `docker run -p 27017:27017 --name app-mongo -d mongo`
* stop: `docker stop app-mongo`
* restart: `docker restart app-mongo`
* remove: `docker rm app-mongo`

## Firebase

### Realtime database

```
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$uid": {
        ".write": false,
        ".read": "$uid === auth.uid"
      }
    }
  }
}
```