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

    $('#subscribeForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the email input value
        const newEmail = $('#emailSubscribe').val();

        // Validate the email address (you can add your own validation logic here)
        if (!newValidateEmail(newEmail)) {
            // Display an error message if the email is invalid
            $('#subscribeResponseMessage').text('Please enter a valid email address.');
            return; // Stop further execution
        }

        // Clear the error message
        $('#subscribeResponseMessage').text('');

        // Perform the subscription (you can add your own logic here)
        // Simulating a successful subscription with a delay of 1 second
        setTimeout(function () {
            // Display the success message
            $('#subscribeResponseMessage').text('You have subscribed successfully!');
        }, 1000);

        // Reset the form
        $('#subscribeForm')[0].reset();
    });

    // Helper function to validate email address
    function newValidateEmail(newEmail) {
        // Regular expression for email validation
        const newEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return newEmailRegex.test(newEmail);
    }


});

