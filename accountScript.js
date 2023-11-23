$(document).ready(function () {
  const usernameInput = $('#floatingInput');
  const password1 = $('#floatingPassword');
  const usernameError = $('#usernameError');
  const passwordError = $('#passwordError');
  const registerButton = $('#registerButton');
  const successMessage = $('#successMessage');

  function passwordsMatch() {
    return password1.val() === password2.val();
  }

  function validateForm() {
    const isUsernameValid = usernameInput[0].checkValidity();
    const isPasswordValid = password1[0].checkValidity();

    usernameError.css('display', isUsernameValid ? 'none' : 'block');
    passwordError.css('display', isPasswordValid ? 'none' : 'block');

    registerButton.prop('disabled', !(isUsernameValid && isPasswordValid));
  }

  $('#registrationForm').on('submit', function (event) {
    event.preventDefault();
  });

  usernameInput.on('input', validateForm);
  password1.on('input', validateForm);
});

