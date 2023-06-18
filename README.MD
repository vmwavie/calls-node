<br>
<p align="left">
  <h3 align="center">Twilio Tests</h3>
  This is a example how to call and sens messages with <b>Twilio</b>.  
  </p>

## Introduction

 Twilio have much services and within one of these services us have a SMS and CALL system,  this repo teach you to use this.

## How to use:

- Clone Repo and open cloned folder:
```sh
git clone https://github.com/matheuscrestanifernandes/calls-node.git && cd calls-node
```

- Configure .env variables:
```sh
PORT=8080 // Port you want to expose your docker containter
TWILIO_ACCOUNT_SID= // get in https://console.twilio.com/
TWILIO_AUTH_TOKEN= // get in https://console.twilio.com/
TWILIO_NUMBER=  // get in https://console.twilio.com/  ( for this buy a number from twilio )
MESSAGE_URL= // mp3 direct link for expose in call

# e2e
e2eUrl= // your host url from docker container
e2eClientNumber= // your number for test. For this you should use verified number from twilio account if your plan is free-tier
```

- Run project :
```sh
docker-compose up
```

## Routes:

- /call (post):
```json
 "clientNumber": "tel number"
```

- /sms (post):
```json
 "clientNumber": "tel number",
 "messageText": "message text"
```