// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBap6UzIDAMPShxgYit2WnwtvdkeCFkUWc",
//     authDomain: "austal.firebaseapp.com",
//     projectId: "austal",
//     storageBucket: "austal.appspot.com",
//     messagingSenderId: "1019750298016",
//     appId: "1:1019750298016:web:608b13385efe67179374c5",
//     storageBucket: 'https://console.firebase.google.com/project/austal/storage/austal.appspot.com/files'
//   }; console.log("Hello")
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
//   // Get a reference to the Firestore database
//   var db = firebase.firestore();
  
//   // Initialize Cloud Storage and get a reference to the service
//   var storage = firebase.storage();
//   var storageRef = storage.ref();
  
//   // Get a reference to the form
//   var form = document.getElementById('myForm');
  
//   // Listen for form submission
//   form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the form from submitting normally
  
//     // Get the form data
//     var firstName = document.getElementById('firstName').value;
//     var middleName = document.getElementById('middleName').value;
//     var lastName = document.getElementById('lastName').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var ssn = document.getElementById('ssn').value;
//     var month = document.getElementById('month').value;
//     var day = document.getElementById('day').value;
//     var year = document.getElementById('year').value;
//     var sex = document.getElementById('sex').value;
//     var idType = document.getElementById('idType').value;
  
//     // Prepare the form data object
//     var formData = {
//       firstName: firstName,
//       middleName: middleName,
//       lastName: lastName,
//       email: email,
//       phone: phone,
//       ssn: ssn,
//       dob: {
//         month: month,
//         day: day,
//         year: year
//       },
//       sex: sex,
//       idType: idType
//     };
  
//     // Save the form data to Firestore
//     db.collection('formSubmissions').add(formData)
//       .then(function (docRef) {
//         console.log('Form data saved with ID: ', docRef.id);
//         // Clear the form fields after successful submission
//         form.reset();
//       })
//       .catch(function (error) {
//         console.error('Error saving form data: ', error);
//       });
  
//     // Get the file elements
//     var frontPictureFile = document.getElementById('frontPicture').files[0];
//     var backPictureFile = document.getElementById('backPicture').files[0];
  
//     // Create a storage reference for the files
//     var frontPictureRef = storageRef.child('frontPictures/' + frontPictureFile.name);
//     var backPictureRef = storageRef.child('backPictures/' + backPictureFile.name);
  
//     // Upload the files
//     frontPictureRef.put(frontPictureFile)
//       .then(function (snapshot) {
//         console.log('Front picture uploaded successfully');
//       })
//       .catch(function (error) {
//         console.error('Error uploading front picture:', error);
//       });
  
//     backPictureRef.put(backPictureFile)
//       .then(function (snapshot) {
//         console.log('Back picture uploaded successfully');
//       })
//       .catch(function (error) {
//         console.error('Error uploading back picture:', error);
//       });
//   });
  