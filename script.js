
const authButton = document.getElementById("authButton");
const authModal = document.getElementById("authModal");
const closeModal = document.getElementById("closeModal");
const submitLogin = document.getElementById("submitLogin");
const loginInput = document.getElementById("loginInput");
const usernameDisplay = document.getElementById("usernameDisplay");


document.addEventListener("DOMContentLoaded", () => {
  const savedLogin = localStorage.getItem("username");
  if (savedLogin) {
    setLoggedInState(savedLogin);
  }
});


authButton.addEventListener("click", () => {
  if (authButton.textContent === "Війти") {
    authModal.style.display = "flex";
    document.body.classList.add("modal-open");
    clearInputError();
  } else {
    logout();
  }
});


closeModal.addEventListener("click", closeModalWindow);
window.addEventListener("click", (event) => {
  if (event.target === authModal) {
    closeModalWindow();
  }
});


function closeModalWindow() {
  authModal.style.display = "none";
  document.body.classList.remove("modal-open");
  clearInputError();
}


submitLogin.addEventListener("click", () => {
  const loginValue = loginInput.value.trim();
  if (loginValue) {
    localStorage.setItem("username", loginValue);
    setLoggedInState(loginValue);
    closeModalWindow();
  } else {
    loginInput.classList.add("error");
  }
});


function setLoggedInState(username) {
  authButton.textContent = "Вийти";
  usernameDisplay.textContent = `Вітаємо, ${username}`;
  loginInput.value = "";
}


function logout() {
  localStorage.removeItem("username");
  authButton.textContent = "Війти";
  usernameDisplay.textContent = "";
}

function clearInputError() {
  loginInput.classList.remove("error");
}
