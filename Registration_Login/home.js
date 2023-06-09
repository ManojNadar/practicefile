function logout(event) {
  event.preventDefault();

  localStorage.removeItem("currentUser");
  alert("logged Out see you soon");
  window.location.href = "./login.html";
}
