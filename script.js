const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSucessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido!");
  } else {
    setSucessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória!");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha deve ter mais de 7 caracteres.");
  } else {
    setSucessFor(password);
  }
  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue === passwordConfirmation) {
    setErrorFor(passwordConfirmation, "As senhas devem ser iguais.");
  } else {
    setSucessFor(passwordConfirmation);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //adicionando mensagem de erro
  small.innerText = message;

  //adicionando classe de erro
  formControl.className = "form-control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;

  //adicionando classe de sucesso
  formControl.className = "form-control sucess";
}

function checkEmail(email) {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}
