// window.toggleMenuOpen = () => $("body").toggleClass("open");

$(document).ready(function () {

    const toggleMenuOpen = () => {
        $("body").toggleClass("open");
    };

    const closeOverlay = () => {
        $("body").removeClass("open");
    };

    $(document).ready(function () {
        $(".navbar-overlay, .navbar-burger").on("click", toggleMenuOpen);
        $(".navbar-menu .button").on("click", closeOverlay);
    });



    function isValidFirstName(firstName) {
        var nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(firstName);
    }

    // Function to handle input validation for first name
    function validateFirstNameInput() {
        var firstName = $("#firstName").val().trim();
        var $validFeedback = $(".validfirstname-feedback");
        var $invalidFeedback = $(".invalidfirstname-feedback");
        var $firstNameInput = $("#firstName");

        if (isValidFirstName(firstName)) {
            $validFeedback.show();
            $invalidFeedback.hide();
            $firstNameInput.css("border-color", "green");
        } else {
            $validFeedback.hide();
            $invalidFeedback.show();
            $firstNameInput.css("border-color", "red");
        }
    }

    $("#firstName").on("input", validateFirstNameInput);

    function isValidLastName(lastName) {
        var nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(lastName);
    }

    function validateLastNameInput() {
        var lastName = $("#lastName").val().trim();
        var $validFeedback = $(".validlastname-feedback");
        var $invalidFeedback = $(".invalidlastname-feedback");
        var $lastNameInput = $("#lastName");

        if (isValidLastName(lastName)) {
            $validFeedback.show();
            $invalidFeedback.hide();
            $lastNameInput.css("border-color", "green");
        } else {
            $validFeedback.hide();
            $invalidFeedback.show();
            $lastNameInput.css("border-color", "red");
        }
    }

    $("#lastName").on("input", validateLastNameInput);

    // Function to validate email format
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateEmailInput() {
        var email = $("#email").val().trim();
        var $validFeedback = $(".validemail-feedback");
        var $invalidFeedback = $(".invalidemail-feedback");
        var $emailInput = $("#email");

        if (isValidEmail(email)) {
            $validFeedback.show();
            $invalidFeedback.hide();
            $emailInput.css("border-color", "green");
        } else {
            $validFeedback.hide();
            $invalidFeedback.show();
            $emailInput.css("border-color", "crimson");
        }
    }

    // Bind the validation function to the input event
    $("#email").on("input", validateEmailInput);

    $("#subscribeForm").submit(function (event) {
        event.preventDefault(); // Prevent form submission
        var newEmail = $("#emailSubscribe").val().trim();

        // Perform email validation
        if (isValidEmail(newEmail)) {
            // Display success message
            $("#subscribeResponseMessage").text("You have subscribed successfully.");
            // You can perform additional actions here, such as sending the email to a server

            // Reset the form
            $("#subscribeForm")[0].reset();
        } else {
            // Display error message
            $("#responseMessage").text("Please enter a valid email address.");
        }
    });

    // Function to handle phone number validation
    function validatePhoneNumber() {
        // Regex pattern for phone number validation
        var phoneRegex = /^\+\d{1,3}\s\d{1,}\s\d{1,}\s\d{1,}$/;

        // Function to check if the phone number is valid
        function isValidPhoneNumber(phoneNumber) {
            return phoneRegex.test(phoneNumber);
        }

        // Function to handle input validation
        function validatePhoneInput() {
            var phoneNumber = $("#phone").val().trim();
            var $validFeedback = $(".validphone-feedback");
            var $invalidFeedback = $(".invalidphone-feedback");
            var $phoneInput = $("#phone");

            if (isValidPhoneNumber(phoneNumber)) {
                $validFeedback.show();
                $invalidFeedback.hide();
                $phoneInput.css("border-color", "green");
            } else {
                $validFeedback.hide();
                $invalidFeedback.show();
                $phoneInput.css("border-color", "crimson")
            }
        }

        // Bind the validation function to the input event
        $("#phone").on("input", validatePhoneInput);
    }

    function isValidDateOfBirth(dateOfBirth) {
        var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(dateOfBirth);
    }

    // Function to handle date of birth validation
    function validateDateOfBirthInput() {
        var dateOfBirth = $("#dob").val().trim();
        var $validFeedback = $(".validDOB-feedback");
        var $invalidFeedback = $(".invalidDOB-feedback");
        var $dobInput = $("#dob");

        if (isValidDateOfBirth(dateOfBirth)) {
            $validFeedback.show();
            $invalidFeedback.hide();
            $dobInput.css("border-color", "green");
        } else {
            $validFeedback.hide();
            $invalidFeedback.show();
            $dobInput.css("border-color", "red");
        }
    }

    // Bind the validation function to the input event
    $("#dob").on("input", validateDateOfBirthInput);

    // Function to handle input validation for sex field
    function validateSexInput() {
        var sex = $("#sex").val();
        var $validFeedback = $(".validSex-feedback");
        var $sexSelect = $("#sex");

        if (sex) {
            $validFeedback.hide();
            $sexSelect.css("background-color", "transparent");
        } else {
            $validFeedback.show();
            $sexSelect.css("background-color", "crimson");
        }
    }

    $("#sex").on("change", validateSexInput);


    // Function to handle input validation for ID field
    function validateIDInput() {
        var idType = $("#idType").val();
        var $validFeedback = $(".validID-feedback");
        var $idTypeSelect = $("#idType");

        if (idType) {
            $validFeedback.hide();
            $idTypeSelect.css("background-color", "transparent");

            // Check if the selected ID type requires additional file uploads
            if (idType === "1" || idType === "2") {
                $(".additional-file-upload").show();
            } else {
                $(".additional-file-upload").hide();
            }
        } else {
            $validFeedback.show();
            $idTypeSelect.css("background-color", "crimson");
            $(".additional-file-upload").hide();
        }
    }

    $("#idType").on("change", validateIDInput);


    // Function to handle file upload validation
    function validateFileUpload(input, maxSize) {
        var file = input.files[0];
        var $fileInput = $(input);
        var $validFeedback = $fileInput.siblings(".valid-file-feedback");
        var $invalidFeedback = $fileInput.siblings(".invalid-file-feedback");
        var $previewContainer = $fileInput.siblings(".file-preview");

        if (file) {
            var fileSize = file.size / 1024 / 1024; // File size in MB

            if (fileSize <= maxSize) {
                $validFeedback.show();
                $invalidFeedback.hide();
                $fileInput.css("border-color", "green");

                // Read the file and display the preview
                var reader = new FileReader();
                reader.onload = function (e) {
                    $previewContainer.html('<img class="img-fluid" src="' + e.target.result + '" alt="File Preview" >');
                };
                reader.readAsDataURL(file);
            } else {
                $validFeedback.hide();
                $invalidFeedback.show();
                $fileInput.css("border-color", "red");
                $previewContainer.empty();
            }
        } else {
            $validFeedback.hide();
            $invalidFeedback.hide();
            $fileInput.css("border-color", "");
            $previewContainer.empty();
        }
    }

    $(".file-upload").each(function () {
        var $fileInput = $(this);
        var $validFeedback = $fileInput.siblings(".valid-file-feedback");
        var $invalidFeedback = $fileInput.siblings(".invalid-file-feedback");
        var $previewContainer = $('<div class="file-preview"></div>');
        $fileInput.after($previewContainer);

        // Hide the feedback messages initially
        $validFeedback.hide();
        $invalidFeedback.hide();

        // Bind the change event to the file input
        $fileInput.on("change", function () {
            validateFileUpload(this, 15); // Pass the maximum file size as an argument
        });
    });

    // Call the phone number validation function
    validatePhoneNumber();
    // validateEmailInput();
    // validateFirstNameInput();
    // validateLastNameInput();
    // validateSexInput();
    // validateIDInput();


    function validateInput($input, $validFeedback, $invalidFeedback) {
        if ($input.val().trim()) {
            $validFeedback.show();
            $invalidFeedback.hide();
            $input.css("border-color", "green");
            return true;
        } else {
            $validFeedback.hide();
            $invalidFeedback.show();
            $input.css("border-color", "red");
            return false;
        }
    }

    function validateForm() {
        var isValid = true;

        $(".form-group input, select").each(function () {
            var $input = $(this);
            var $validFeedback = $input.siblings(".valid-feedback");
            var $invalidFeedback = $input.siblings(".invalid-feedback");

            if (!validateInput($input, $validFeedback, $invalidFeedback)) {
                isValid = false;
            }
        });

        return isValid;
    }

    function fadeButton() {
        if (validateForm()) {
            $(".form-group-button button[type='submit']").removeClass("fade-color");
        } else {
            $(".form-group-button button[type='submit']").addClass("fade-color");
        }
    }

    $(".form-group input, select").on("input change", function () {
        $(this).removeClass("invalid-input");
        $(".valid-feedback, .invalid-feedback").hide();
        $(".form-group-button button[type='submit']").removeClass("fade-color");
        $(".invalid-input").removeClass("invalid-border");
    });

    $(".form-group-button button[type='submit']").on("click", function (event) {
        event.preventDefault(); // Prevent form submission
        var isValid = validateForm();

        if (!isValid) {
            $(".form-group input, select").each(function () {
                var $input = $(this);
                var $validFeedback = $input.siblings(".valid-feedback");
                var $invalidFeedback = $input.siblings(".invalid-feedback");

                if (!validateInput($input, $validFeedback, $invalidFeedback)) {
                    $input.addClass("invalid-input");
                }
            });

            $(".invalid-input").addClass("invalid-border");
        }
    });

    $(".form-group input, select").on("input change", fadeButton);

});
