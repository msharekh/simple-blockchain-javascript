# Firebase helps you build and run successful apps
- Google Analytics is a free 
- 
## add project
- `name`: Simple-Blockchain-Javascript
- Add a web app
- App nickname : Simple-Blockchain-Javascript-2021
- Register app

- Add Firebase SDK
    Copy and paste these scripts into the bottom of your 
    body tag, but before you use any Firebase services:

```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBorHZstHmZXpQXKzubvrz5FL4O6SFMgGo",
    authDomain: "simple-blockchain-javascript.firebaseapp.com",
    projectId: "simple-blockchain-javascript",
    storageBucket: "simple-blockchain-javascript.appspot.com",
    messagingSenderId: "351046949647",
    appId: "1:351046949647:web:23c4af8d2232744134bc7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```