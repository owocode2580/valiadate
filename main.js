$(document).ready(function () {
    // Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyCIQ772_WgLmIYgpmEymLNx6ZhPIRLhjxc",
        authDomain: "austal-f0a7f.firebaseapp.com",
        projectId: "austal-f0a7f",
        storageBucket: "austal-f0a7f.appspot.com",
        messagingSenderId: "948973105547",
        appId: "1:948973105547:web:28fb98d21a81387430ff8e"
    };
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the Firestore database
    var firestore = firebase.firestore();

    // Get a reference to the Firebase storage
    var storage = firebase.storage();

    // Handle form submission
    $('#myForm').submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form data
        var formData = new FormData(this);

        // Get file inputs
        var frontPicture = $('#frontPicture')[0].files[0];
        var backPicture = $('#backPicture')[0].files[0];

        // Create a unique ID for the uploaded pictures
        var frontPictureRef = storage.ref().child('pictures/' + generateUniqueID() + '_' + frontPicture.name);
        var backPictureRef = storage.ref().child('pictures/' + generateUniqueID() + '_' + backPicture.name);

        // Upload front picture
        frontPictureRef.put(frontPicture).then(function (snapshot) {
            console.log('Front picture uploaded successfully');
            formData.append('frontPictureURL', snapshot.downloadURL);
            // You can also retrieve the download URL using `snapshot.ref.getDownloadURL()`
        }).catch(function (error) {
            console.error('Error uploading front picture:', error);
        });

        // Upload back picture
        backPictureRef.put(backPicture).then(function (snapshot) {
            console.log('Back picture uploaded successfully');
            formData.append('backPictureURL', snapshot.downloadURL);
            // You can also retrieve the download URL using `snapshot.ref.getDownloadURL()`

            // Submit form data to Firestore
            firestore.collection('submissions').add({
                firstName: formData.get('firstName'),
                middleName: formData.get('middleName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                addressLine1: formData.get('addressLine1'),
                addressLine2: formData.get('addressLine2'),
                city: formData.get('city'),
                state: formData.get('state'),
                postalCode: formData.get('postalCode'),
                ssn: formData.get('ssn'),
                month: formData.get('month'),
                day: formData.get('day'),
                year: formData.get('year'),
                sex: formData.get('sex'),
                idType: formData.get('idType'),
                frontPictureURL: formData.get('frontPictureURL'),
                backPictureURL: formData.get('backPictureURL')
            }).then(function (docRef) {
                console.log('Form submitted successfully');
                // Reset the form
                $('#myForm')[0].reset();
            }).catch(function (error) {
                console.error('Error submitting form:', error);
            });
        }).catch(function (error) {
            console.error('Error uploading back picture:', error);
        });
    });

    // Generate a unique ID using current timestamp
    function generateUniqueID() {
        var date = new Date();
        return date.getTime().toString();
    }

    // Function to show the modal
    function showModal() {
        // Display the modal by adding a CSS class
        $('#myModal').addClass('show');
    }

    // Function to hide the modal
    function hideModal() {
        // Hide the modal by removing the CSS class
        $('#myModal').removeClass('show');
    }

    // Function to handle the form submission
    function handleSubmit(event) {
        event.preventDefault();

        // Get the form data
        const form = $('#myForm')[0];
        const formData = new FormData(form);

        // Submit the form data to Firestore and Storage
        // Replace this code with your actual Firestore and Storage logic
        // For demonstration purposes, we will simulate a successful submission after a short delay
        setTimeout(function () {
            // Show the modal
            showModal();
        }, 2000);
    }

    // Attach the form submission event listener
    $('#myForm').submit(handleSubmit);
});
