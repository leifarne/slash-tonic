const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// firebase functions:config:set slack.signing_secret=d02b377073eae11176076b4126fe8042
// firebase functions:config:set slack.bot_token=xoxb-111-111-xxx
// firebase functions:config:get > .runtimeconfig.json