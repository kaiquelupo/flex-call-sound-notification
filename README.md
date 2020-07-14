# Incoming Call Sound Notification

This Flex plugin adds a sound notification for incoming calls. The base code was created by <a href="https://github.com/MartinAmps">Martin Amps</a>.  

## Twilio Serverless 

You will need the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) and the [serverless plugin](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started) to deploy the assets inside the ```serverless``` folder of this project. You can install the necessary dependencies with the following commands:

`npm install twilio-cli -g`

and then

`twilio plugins:install @twilio-labs/plugin-serverless`

## How to use

1. Setup all dependency above: Twilio CLI

2. Clone this repository

3. Copy ./serverless/.env.example to ./serverless/.env and populate the appropriate environment variables.

4. cd into ./serverless/ then run `npm install` and then `twilio serverless:deploy` (optionally you can run locally with `twilio serverless:start --ngrok=""`

5. Copy .env.example to .env and set the following variables:

    - REACT_APP_FLEX_AUDIOS_BASE_URL: your Twilio Serverless base url (this will be available after you deploy your functions). In local development environment, it could be your localhost base url. 

6. Copy `public/appConfig.example.js` to `public/appConfig.js`

7. Run `npm install`

8. cd back to the root folder and run `npm start` to run locally or `npm run-script build` and deploy the generated ./build/plugin-dialpad.js to [twilio assests](https://www.twilio.com/console/assets/public) to include plugin with hosted Flex. Also, you want to use Twilio Serverless, just run `npm run deploy` to send your plugin directly to your Flex.
