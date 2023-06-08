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

    $('#myForm').submit(function (event) {
        event.preventDefault();
        validateMyForm();
        console.log("Form submitted successfully");
    });


    $('input').on('input', function () {
        validateInputs();
        validateAddressInputs();
        validateSSNInput();
    });

    $('#month, #day, #year').on('change', function () {
        validateBirthdate();
    });

    $('#sex').on('change', function () {
        validateGender();
    });

    $('#idType').on('change', function () {
        validateID();
    });

    function validateMyForm() {
        validateInputs();
        validateAddressInputs();
        validateSSNInput();
        validateBirthdate();
        validateGender();
        validateID();
        validateFile();

        const formData = new FormData($('#myForm')[0]);

        // You can also manually add additional data to the FormData object if needed
        formData.append('additionalField', 'additionalValue');

        // Append the file inputs to the FormData object
        const fileInputs = $('#myForm input[type="file"]');
        fileInputs.each(function () {
            const fileInput = $(this)[0];
            const files = fileInput.files;
            if (files.length > 0) {
                const file = files[0];
                formData.append(fileInput.name, file);
            }
        });

        // Iterate over the FormData object to view the serialized form data
        for (const entry of formData.entries()) {
            console.log(entry[0], ':', entry[1]);
        }
    }


    function validateInputs() {
        // Validate first name input
        const firstNameInput = $('#firstName');
        const validFirstNameFeedback = $('.validfirstname-feedback');
        const invalidFirstNameFeedback = $('.invalidfirstname-feedback');

        if (firstNameInput.val().trim() !== '') {
            firstNameInput.removeClass('invalid_border').addClass('valid_border');
            validFirstNameFeedback.show();
            invalidFirstNameFeedback.hide();
        } else {
            firstNameInput.removeClass('valid_border').addClass('invalid_border');
            validFirstNameFeedback.hide();
            invalidFirstNameFeedback.show();
        }

        // Validate last name input
        const lastNameInput = $('#lastName');
        const validLastNameFeedback = $('.validlastname-feedback');
        const invalidLastNameFeedback = $('.invalidlastname-feedback');

        if (lastNameInput.val().trim() !== '') {
            lastNameInput.removeClass('invalid_border').addClass('valid_border');
            validLastNameFeedback.show();
            invalidLastNameFeedback.hide();
        } else {
            lastNameInput.removeClass('valid_border').addClass('invalid_border');
            validLastNameFeedback.hide();
            invalidLastNameFeedback.show();
        }

        // Validate email input
        const emailInput = $('#email');
        const validEmailFeedback = $('.validemail-feedback');
        const invalidEmailFeedback = $('.invalidemail-feedback');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.val().trim() !== '') {
            if (emailRegex.test(emailInput.val())) {
                emailInput.removeClass('invalid_border').addClass('valid_border');
                validEmailFeedback.show();
                invalidEmailFeedback.hide();
            } else {
                emailInput.removeClass('valid_border').addClass('invalid_border');
                validEmailFeedback.hide();
                invalidEmailFeedback.show();
            }
        } else {
            emailInput.removeClass('valid_border invalid_border');
            validEmailFeedback.hide();
            invalidEmailFeedback.hide();
        }

        // Validate phone number input
        const phoneInput = $('#phone');
        const validPhoneFeedback = $('.validphone-feedback');
        const invalidPhoneFeedback = $('.invalidphone-feedback');
        const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        if (phoneInput.val().trim() !== '') {
            if (phoneRegex.test(phoneInput.val())) {
                phoneInput.removeClass('invalid_border').addClass('valid_border');
                validPhoneFeedback.show();
                invalidPhoneFeedback.hide();
            } else {
                phoneInput.removeClass('valid_border').addClass('invalid_border');
                validPhoneFeedback.hide();
                invalidPhoneFeedback.show();
            }
        } else {
            phoneInput.removeClass('valid_border invalid_border');
            validPhoneFeedback.hide();
            invalidPhoneFeedback.hide();
        }
    }

    function validateSSNInput() {
        const ssnInput = $('#ssn');
        const validSSNFeedback = $('.validssn-feedback');
        const invalidSSNFeedback = $('.invalidssn-feedback');
        const ssnRegex = /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;

        if (ssnInput.val().trim() !== '') {
            if (ssnRegex.test(ssnInput.val())) {
                ssnInput.removeClass('invalid_border').addClass('valid_border');
                validSSNFeedback.show();
                invalidSSNFeedback.hide();
            } else {
                ssnInput.removeClass('valid_border').addClass('invalid_border');
                validSSNFeedback.hide();
                invalidSSNFeedback.show();
            }
        } else {
            ssnInput.removeClass('valid_border invalid_border');
            validSSNFeedback.hide();
            invalidSSNFeedback.hide();
        }
    }

    function validateAddressInputs() {
        // Validate address inputs
        const addressLine1Input = $('#addressLine1');
        const cityInput = $('#city');
        const stateInput = $('#state');
        const postalCodeInput = $('#postalCode');

        if (addressLine1Input.val().trim() !== '') {
            addressLine1Input.removeClass('invalid_border').addClass('valid_border');
            addressLine1Input.next().next('.validAddressLine1-feedback').show();
            addressLine1Input.next().next('.invalidAddressLine1-feedback').hide();
        } else {
            addressLine1Input.removeClass('valid_border').addClass('invalid_border');
            addressLine1Input.next().next('.validAddressLine1-feedback').hide();
            addressLine1Input.next().next('.invalidAddressLine1-feedback').show();
        }

        if (cityInput.val().trim() !== '') {
            cityInput.removeClass('invalid_border').addClass('valid_border');
            cityInput.next().next('.validCity-feedback').show();
            cityInput.next().next('.invalidCity-feedback').hide();
        } else {
            cityInput.removeClass('valid_border').addClass('invalid_border');
            cityInput.next().next('.validCity-feedback').hide();
            cityInput.next().next('.invalidCity-feedback').show();
        }

        if (stateInput.val().trim() !== '') {
            stateInput.removeClass('invalid_border').addClass('valid_border');
            stateInput.next().next('.validState-feedback').show();
            stateInput.next().next('.invalidState-feedback').hide();
        } else {
            stateInput.removeClass('valid_border').addClass('invalid_border');
            stateInput.next().next('.validState-feedback').hide();
            stateInput.next().next('.invalidState-feedback').show();
        }

        if (postalCodeInput.val().trim() !== '') {
            postalCodeInput.removeClass('invalid_border').addClass('valid_border');
            postalCodeInput.next().next('.validPostal-feedback').show();
            postalCodeInput.next().next('.invalidPostal-feedback').hide();
        } else {
            postalCodeInput.removeClass('valid_border').addClass('invalid_border');
            postalCodeInput.next().next('.validPostal-feedback').hide();
            postalCodeInput.next().next('.invalidPostal-feedback').show();
        }
    }

    function populateOptions(element, start, end) {
        for (let i = start; i <= end; i++) {
            const option = $('<option>').val(i).text(i);
            element.append(option);
        }
    }

    // Populate day options
    const dayInput = $('#day');
    populateOptions(dayInput, 1, 31);

    // Populate month options
    const monthInput = $('#month');
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    months.forEach((month, index) => {
        const option = $('<option>').val(index + 1).text(month);
        monthInput.append(option);
    });

    // Populate year options
    const yearInput = $('#year');
    const currentYear = new Date().getFullYear();
    populateOptions(yearInput, 1900, currentYear);

    function validateBirthdate() {
        const monthInput = $('#month');
        const dayInput = $('#day');
        const yearInput = $('#year');
        const validBirthdateFeedback = $('.validbirthdate-feedback');
        const invalidBirthdateFeedback = $('.invalidbirthdate-feedback');

        const selectedMonth = monthInput.val();
        const selectedDay = dayInput.val();
        const selectedYear = yearInput.val();

        if (selectedMonth !== '' && selectedDay !== '' && selectedYear !== '') {
            const birthdate = new Date(`${selectedMonth}/${selectedDay}/${selectedYear}`);
            const currentDate = new Date();

            if (birthdate > currentDate) {
                monthInput.removeClass('valid_border').addClass('invalid_border');
                dayInput.removeClass('valid_border').addClass('invalid_border');
                yearInput.removeClass('valid_border').addClass('invalid_border');
                validBirthdateFeedback.hide();
                invalidBirthdateFeedback.show().text('Birth date cannot be in the future.');
            } else {
                monthInput.removeClass('invalid_border').addClass('valid_border');
                dayInput.removeClass('invalid_border').addClass('valid_border');
                yearInput.removeClass('invalid_border').addClass('valid_border');
                validBirthdateFeedback.show();
                invalidBirthdateFeedback.hide();
            }
        } else {
            monthInput.removeClass('valid_border invalid_border');
            dayInput.removeClass('valid_border invalid_border');
            yearInput.removeClass('valid_border invalid_border');
            validBirthdateFeedback.hide();
            invalidBirthdateFeedback.hide();
        }
    }

    function validateGender() {
        var selectedGender = $('#sex').val();
        var sexInput = $('#sex');
        var validSexFeedback = $('.validSex-feedback');
        var invalidSexFeedback = $('.invalidSex-feedback');

        if (!selectedGender) {
            sexInput.removeClass('valid_border').addClass('invalid_border');
            validSexFeedback.hide();
            invalidSexFeedback.show();
        } else {
            sexInput.removeClass('invalid_border').addClass('valid_border');
            validSexFeedback.show();
            invalidSexFeedback.hide();
        }
    }

    function validateID() {
        const selectedID = $('#idType').val();
        const idTypeInput = $('#idType');
        const validIDFeedback = $('.validID-feedback');
        const invalidIDFeedback = $('.invalidID-feedback');

        if (!idTypeInput) {
            idTypeInput.removeClass('valid_border').addClass('invalid_border');
            validIDFeedback.hide();
            invalidIDFeedback.show();
        } else {
            idTypeInput.removeClass('invalid_border').addClass('valid_border');
            validIDFeedback.show();
            invalidIDFeedback.hide();
        }
    }

    $('#frontPicture').change(validateFile);
    $('#backPicture').change(validateFile);

    function validateFile() {
        const input = this;
        const file = input.files && input.files[0];
        const maxSize = 15 * 1024 * 1024; // 15MB
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        const validFeedback = $(input).siblings('.valid-file-feedback');
        const invalidFeedback = $(input).siblings('.invalid-file-feedback');
        const invalidAlert = $(input).siblings('.invalid-alert');
        const previewElement = $(input).siblings('.preview');

        if (file) {
            if (file.size > maxSize || !allowedTypes.includes(file.type)) {
                $(input).addClass('invalid_border');
                validFeedback.hide();
                invalidFeedback.show();
                invalidAlert.text('File size or format is not supported').show();
                previewElement.empty(); // Clear the preview if invalid file
            } else {
                $(input).removeClass('invalid_border');
                $(input).addClass('valid_border');
                validFeedback.show();
                invalidFeedback.hide();
                invalidAlert.empty().hide();

                previewImage(file, previewElement);
            }
        } else {
            $(input).removeClass('invalid_border');
            validFeedback.hide();
            invalidFeedback.hide();
            invalidAlert.empty().hide();
            previewElement.empty(); // Clear the preview if no file selected
        }
    }

    function previewImage(file, previewElement) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgElement = $('<img>').attr('src', e.target.result);
            previewElement.empty().append(imgElement);
        };
        reader.readAsDataURL(file);
    }


    // Add CSS class for invalid inputs Aand select
    $('input, select').on('invalid', function (event) {
        event.preventDefault();
        $(this).removeClass('valid_border').addClass('invalid_border');
        $(this).siblings('.invalid_color').show();
    });

});





// $(document).ready(function () {

//     const toggleMenuOpen = () => {
//         $("body").toggleClass("open");
//     };

//     const closeOverlay = () => {
//         $("body").removeClass("open");
//     };

//     $(document).ready(function () {
//         $(".navbar-overlay, .navbar-burger").on("click", toggleMenuOpen);
//         $(".navbar-menu .button").on("click", closeOverlay);
//     });

//     // Generate options for month (1-12)
//     var monthSelect = $("#month");
//     for (var i = 1; i <= 12; i++) {
//         var option = $("<option></option>").attr("value", i).text(i);
//         monthSelect.append(option);
//     }

//     // Generate options for day (1-31)
//     var daySelect = $("#day");
//     for (var i = 1; i <= 31; i++) {
//         var option = $("<option></option>").attr("value", i).text(i);
//         daySelect.append(option);
//     }

//     // Generate options for year (1900-2023)
//     var yearSelect = $("#year");
//     var currentYear = new Date().getFullYear();
//     for (var i = 1900; i <= currentYear; i++) {
//         var option = $("<option></option>").attr("value", i).text(i);
//         yearSelect.append(option);
//     }


//     // Function to validate the name fields
//     function validateNames() {
//         var firstName = $('#firstName').val().trim();
//         var lastName = $('#lastName').val().trim();

//         // Validate first name
//         if (firstName === '') {
//             $('#firstName').addClass('invalid').removeClass('valid');
//             $('.invalidfirstname-feedback').show();
//             $('.validfirstname-feedback').hide();
//         } else {
//             $('#firstName').removeClass('invalid').addClass('valid');
//             $('.invalidfirstname-feedback').hide();
//             $('.validfirstname-feedback').show();
//         }

//         // Validate last name
//         if (lastName === '') {
//             $('#lastName').addClass('invalid').removeClass('valid');
//             $('.invalidlastname-feedback').show();
//             $('.validlastname-feedback').hide();
//         } else {
//             $('#lastName').removeClass('invalid').addClass('valid');
//             $('.invalidlastname-feedback').hide();
//             $('.validlastname-feedback').show();
//         }
//     }

//     // Trigger validation on input change
//     $('#firstName, #middleName, #lastName').on('input', validateNames);

//     // Function to validate email format
//     function isValidEmail(email) {
//         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }

//     function validateEmailInput() {
//         var email = $("#email").val().trim();
//         var $validFeedback = $(".validemail-feedback");
//         var $invalidFeedback = $(".invalidemail-feedback");
//         var $emailInput = $("#email");

//         if (isValidEmail(email)) {
//             $validFeedback.show();
//             $invalidFeedback.hide();
//             $emailInput.css("border-color", "green");
//         } else {
//             $validFeedback.hide();
//             $invalidFeedback.show();
//             $emailInput.css("border-color", "crimson");
//         }
//     }

//     // Bind the validation function to the input event
//     $("#email").on("input", validateEmailInput);

//     $("#subscribeForm").submit(function (event) {
//         event.preventDefault(); // Prevent form submission
//         var newEmail = $("#emailSubscribe").val().trim();

//         // Perform email validation
//         if (isValidEmail(newEmail)) {
//             // Display success message
//             $("#subscribeResponseMessage").text("You have subscribed successfully.");
//             // You can perform additional actions here, such as sending the email to a server

//             // Reset the form
//             $("#subscribeForm")[0].reset();
//         } else {
//             // Display error message
//             $("#responseMessage").text("Please enter a valid email address.");
//         }
//     });

//     // Function to handle phone number validation
//     function validatePhoneNumber() {
//         // Regex pattern for phone number validation
//         var phoneRegex = /^\+?\d{1,4}?\s?\d{1,4}?\s?\d{1,9}$/;

//         // Function to check if the phone number is valid
//         function isValidPhoneNumber(phoneNumber) {
//             return phoneRegex.test(phoneNumber);
//         }

//         // Function to handle input validation
//         function validatePhoneInput() {
//             var phoneNumber = $("#phone").val().trim();
//             var $validFeedback = $(".validphone-feedback");
//             var $invalidFeedback = $(".invalidphone-feedback");
//             var $phoneInput = $("#phone");

//             if (isValidPhoneNumber(phoneNumber)) {
//                 $validFeedback.show();
//                 $invalidFeedback.hide();
//                 $phoneInput.css("border-color", "green");
//             } else {
//                 $validFeedback.hide();
//                 $invalidFeedback.show();
//                 $phoneInput.css("border-color", "crimson")
//             }
//         }

//         // Bind the validation function to the input event
//         $("#phone").on("input", validatePhoneInput);
//     }


//     function isValidSSN(ssn) {
//         var ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
//         return ssnRegex.test(ssn);
//     }

//     function validateSSNInput() {
//         var ssn = $("#ssn").val().trim();
//         var $validFeedback = $(".validssn-feedback");
//         var $invalidFeedback = $(".invalidssn-feedback");
//         var $ssnInput = $("#ssn");

//         if (isValidSSN(ssn)) {
//             $validFeedback.show();
//             $invalidFeedback.hide();
//             $ssnInput.css("border-color", "green");
//         } else {
//             $validFeedback.hide();
//             $invalidFeedback.show();
//             $ssnInput.css("border-color", "crimson");
//         }
//     }

//     $("#ssn").on("input", validateSSNInput);


//     function validateDateOfBirthInput() {
//         var day = parseInt($("#day").val());
//         var month = parseInt($("#month").val());
//         var year = parseInt($("#year").val());

//         var selectedDate = new Date(year, month - 1, day);
//         var today = new Date();

//         var $validFeedback = $(".validbirthdate-feedback");
//         var $invalidFeedback = $(".invalidbirthdate-feedback");
//         var $dateOfBirthInputs = $("#day, #month, #year");

//         if (
//             month >= 1 &&
//             month <= 12 &&
//             day >= 1 &&
//             day <= 31 &&
//             selectedDate < today
//         ) {
//             $validFeedback.show();
//             $invalidFeedback.hide();
//             $dateOfBirthInputs.css("border-color", "green");
//         } else {
//             $validFeedback.hide();
//             $invalidFeedback.show();
//             $dateOfBirthInputs.css("border-color", "red");
//         }
//     }

//     $("#day, #month, #year").on("change", validateDateOfBirthInput);


//     // Function to handle input validation for sex field
//     function validateSex() {
//         var sex = $('#sex').val();

//         if (sex === '') {
//             $('#sex').removeClass('valid').addClass('invalid');
//             $('.invalidSex-feedback').show();
//             $('.validSex-feedback').hide();
//         } else {
//             $('#sex').removeClass('invalid').addClass('valid');
//             $('.invalidSex-feedback').hide();
//             $('.validSex-feedback').show();
//         }
//     }

//     // Trigger validation on selection change
//     $('#sex').on('change', validateSex);


//     // Function to handle input validation for ID field
//     function validateIDInput() {
//         var idType = $("#idType").val();
//         var $validFeedback = $(".validID-feedback");
//         var $idTypeSelect = $("#idType");

//         if (idType) {
//             $validFeedback.hide();
//             $idTypeSelect.css("background-color", "transparent");

//             // Check if the selected ID type requires additional file uploads
//             if (idType === "1" || idType === "2") {
//                 $(".additional-file-upload").show();
//             } else {
//                 $(".additional-file-upload").hide();
//             }
//         } else {
//             $validFeedback.show();
//             $idTypeSelect.css("border-color", "crimson");
//             $(".additional-file-upload").hide();
//         }
//     }

//     $("#idType").on("change", validateIDInput);


//     // Function to handle file upload validation
//     function validateFileUpload(input, maxSize) {
//         var file = input.files[0];
//         var $fileInput = $(input);
//         var $validFeedback = $fileInput.siblings(".valid-file-feedback");
//         var $invalidFeedback = $fileInput.siblings(".invalid-file-feedback");
//         var $previewContainer = $fileInput.siblings(".file-preview");

//         if (file) {
//             var fileSize = file.size / 1024 / 1024; // File size in MB

//             if (fileSize <= maxSize) {
//                 $validFeedback.show();
//                 $invalidFeedback.hide();
//                 $fileInput.css("border-color", "green");

//                 // Read the file and display the preview
//                 var reader = new FileReader();
//                 reader.onload = function (e) {
//                     $previewContainer.html('<img class="img-fluid" src="' + e.target.result + '" alt="File Preview" >');
//                 };
//                 reader.readAsDataURL(file);
//             } else {
//                 $validFeedback.hide();
//                 $invalidFeedback.show();
//                 $fileInput.css("border-color", "red");
//                 $previewContainer.empty();
//             }
//         } else {
//             $validFeedback.hide();
//             $invalidFeedback.hide();
//             $fileInput.css("border-color", "");
//             $previewContainer.empty();
//         }
//     }

//     $(".file-upload").each(function () {
//         var $fileInput = $(this);
//         var $validFeedback = $fileInput.siblings(".valid-file-feedback");
//         var $invalidFeedback = $fileInput.siblings(".invalid-file-feedback");
//         var $previewContainer = $('<div class="file-preview"></div>');
//         $fileInput.after($previewContainer);

//         // Hide the feedback messages initially
//         $validFeedback.hide();
//         $invalidFeedback.hide();

//         // Bind the change event to the file input
//         $fileInput.on("change", function () {
//             validateFileUpload(this, 15); // Pass the maximum file size as an argument
//         });
//     });

//     // Call the phone number validation function
//     validatePhoneNumber();
//     validateEmailInput();
//     validateIDInput();


//     function validateInput($input, $validFeedback, $invalidFeedback) {
//         if ($input.val().trim()) {
//             $validFeedback.show();
//             $invalidFeedback.hide();
//             $input.css("border-color", "green");
//             return true;
//         } else {
//             $validFeedback.hide();
//             $invalidFeedback.show();
//             $input.css("border-color", "red");
//             return false;
//         }
//     }

//     function validateForm() {
//         var isValid = true;

//         $(".form-group input, select").each(function () {
//             var $input = $(this);
//             var $validFeedback = $input.siblings(".valid-feedback");
//             var $invalidFeedback = $input.siblings(".invalid-feedback");

//             if (!validateInput($input, $validFeedback, $invalidFeedback)) {
//                 isValid = false;
//             }
//         });

//         return isValid;
//     }

//     function updateSubmitButton() {
//         var isValidForm = validateForm();
//         $(".form-group-button button[type='submit']").prop("disabled", !isValidForm);
//     }

//     $(".form-group input, select").on("input change", function () {
//         $(this).removeClass("invalid-input");
//         $(".valid-feedback, .invalid-feedback").hide();
//         updateSubmitButton();
//         $(".invalid-input").removeClass("invalid-border");
//     });

//     $(".form-group-button button[type='submit']").on("click", function (event) {
//         event.preventDefault(); // Prevent form submission
//         var isValid = validateForm();

//         if (!isValid) {
//             $(".form-group input, select").each(function () {
//                 var $input = $(this);
//                 var $validFeedback = $input.siblings(".valid-feedback");
//                 var $invalidFeedback = $input.siblings(".invalid-feedback");

//                 if (!validateInput($input, $validFeedback, $invalidFeedback)) {
//                     $input.addClass("invalid-input");
//                 }
//             });

//             $(".invalid-input").addClass("invalid-border");
//         }
//     });

//     $(".form-group input, select").on("input change", updateSubmitButton);


// });


// $(document).ready(function () {


//     // Generate options for month (1-12)
//     var monthSelect = $("#month");
//     for (var i = 1; i <= 12; i++) {
//         var option = $("<option></option>").attr("value", i).text(i);
//         monthSelect.append(option);
//     }

//     // Generate options for day (1-31)
//     var daySelect = $("#day");
//     for (var i = 1; i <= 31; i++) {
//         var option = $("<option></option>").attr("value", i).text(i);
//         daySelect.append(option);
//     }

//     // Generate options for year (1900-2023)
//     var yearSelect = $("#year");
//     var currentYear = new Date().getFullYear();
//     for (var i = 1900; i <= currentYear; i++) {
//         var option = $("<option></option>").attr("value", i).text(i);
//         yearSelect.append(option);
//     }


//     $('#myForm').submit(function (event) {
//         event.preventDefault(); // Prevent form submission

//         // Reset validation messages and colors
//         $('.invalid_color, .valid_color').hide().removeClass('invalid_color valid_color');

//         // Validate each input field
//         var isValid = true;

//         // Validate name fields
//         $('.for_firstname input, .for_lastname input').each(function () {
//             var value = $(this).val().trim();
//             var feedback = $(this).siblings('.validfirstname-feedback, .validlastname-feedback');
//             var invalidFeedback = $(this).siblings('.invalidfirstname-feedback, .invalidlastname-feedback');

//             if (value === '') {
//                 invalidFeedback.show().addClass('invalid_color');
//                 isValid = false;
//             } else {
//                 feedback.show().addClass('valid_color');
//             }
//         });

//         // Validate email field
//         var email = $('#email').val().trim();
//         var emailFeedback = $('#email').siblings('.validemail-feedback');
//         var invalidEmailFeedback = $('#email').siblings('.invalidemail-feedback');

//         if (email === '') {
//             invalidEmailFeedback.show().addClass('invalid_color');
//             isValid = false;
//         } else {
//             emailFeedback.show().addClass('valid_color');
//         }

//         // Validate phone number field
//         var phone = $('#phone').val().trim();
//         var phoneFeedback = $('#phone').siblings('.validphone-feedback');
//         var invalidPhoneFeedback = $('#phone').siblings('.invalidphone-feedback');

//         if (phone === '') {
//             invalidPhoneFeedback.show().addClass('invalid_color');
//             isValid = false;
//         } else {
//             phoneFeedback.show().addClass('valid_color');
//         }

//         // Validate address fields
//         $('.for_address input').each(function () {
//             var value = $(this).val().trim();
//             var feedback = $(this).siblings('.validAddressLine1-feedback, .validCity-feedback, .validState-feedback, .validPostal-feedback');
//             var invalidFeedback = $(this).siblings('.invalidAddressLine1-feedback, .invalidCity-feedback, .invalidState-feedback, .invalidPostal-feedback');

//             if (value === '') {
//                 invalidFeedback.show().addClass('invalid_color');
//                 isValid = false;
//             } else {
//                 feedback.show().addClass('valid_color');
//             }
//         });

//         // Validate SSN field
//         var ssn = $('#ssn').val().trim();
//         var ssnFeedback = $('#ssn').siblings('.validssn-feedback');
//         var invalidSSNFeedback = $('#ssn').siblings('.invalidssn-feedback');

//         if (ssn === '') {
//             invalidSSNFeedback.show().addClass('invalid_color');
//             isValid = false;
//         } else {
//             ssnFeedback.show().addClass('valid_color');
//         }

//         // Validate birth date fields
//         var month = $('#month').val().trim();
//         var day = $('#day').val().trim();
//         var year = $('#year').val().trim();
//         var dobFeedback = $('.dob_select .validSex-feedback');
//         var invalidDOBFeedback = $('.dob_select .invalidSex-feedback');

//         if (month === '' || day === '' || year === '') {
//             invalidDOBFeedback.show().addClass('invalid_color');
//             isValid = false;
//         } else {
//             dobFeedback.show().addClass('valid_color');
//         }

//         // Validate gender field
//         var gender = $('#sex').val().trim();
//         var genderFeedback = $('#sex').siblings('.validSex-feedback');
//         var invalidGenderFeedback = $('#sex').siblings('.invalidSex-feedback');

//         if (gender === '') {
//             invalidGenderFeedback.show().addClass('invalid_color');
//             isValid = false;
//         } else {
//             genderFeedback.show().addClass('valid_color');
//         }

//         // Validate ID field
//         var idType = $('#idType').val().trim();
//         var idTypeFeedback = $('#idType').siblings('.validID-feedback');
//         var invalidIDTypeFeedback = $('#idType').siblings('.invalidID-feedback');

//         if (idType === '') {
//             invalidIDTypeFeedback.show().addClass('invalid_color');
//             isValid = false;
//         } else {
//             idTypeFeedback.show().addClass('valid_color');
//         }


//         $('#idType').change(function () {
//             var selectedIdType = $(this).val();
//             var frontPictureField = $('#frontPicture').closest('.form-group');
//             var backPictureField = $('#backPicture').closest('.form-group');

//             // Hide both file upload fields
//             frontPictureField.hide();
//             backPictureField.hide();

//             // Show the appropriate file upload field based on the selected ID type
//             if (selectedIdType === '1') { // Driver License
//                 frontPictureField.show();
//                 backPictureField.show();
//             } else if (selectedIdType === '2') { // State ID
//                 frontPictureField.show();
//             }
//         });
//         // File upload validation
//         $('.file-upload').change(function () {
//             var file = this.files[0];
//             var fileSize = file.size;
//             var maxSize = 15 * 1024 * 1024; // 15MB
//             var allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Allowed image file types

//             // Validate file size
//             if (fileSize > maxSize) {
//                 alert('File is larger than 15MB. Please choose a smaller file.');
//                 $(this).removeClass('valid_colors').addClass('invalid_colors');
//                 $(this).siblings('.valid-file-feedback').css('display', 'none');
//                 $(this).siblings('.invalid-file-feedback').css('display', 'block');
//                 return; // Stop further processing
//             }

//             // Validate file type
//             if (!allowedTypes.includes(file.type)) {
//                 alert('File type not supported. Please choose an image file.');
//                 $(this).removeClass('valid_colors').addClass('invalid_colors');
//                 $(this).siblings('.valid-file-feedback').css('display', 'none');
//                 $(this).siblings('.invalid-file-feedback').css('display', 'block');
//                 return; // Stop further processing
//             }

//             // File is valid, perform further actions
//             $(this).removeClass('invalid_colors').addClass('valid_colors');
//             $(this).siblings('.invalid-file-feedback').css('display', 'none');
//             $(this).siblings('.valid-file-feedback').css('display', 'block');
//         });

//         // Submit the form if all fields are valid
//         if (isValid) {
//             // Form submission logic here
//             console.log('Form submitted successfully');
//             // You can use AJAX to submit the form data to the server if needed
//         }
//     });
// });




