function loginForm(event) {
  event.preventDefault();

  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  if (loginEmail && loginPassword) {
    let loginData = JSON.parse(localStorage.getItem("userDetails"));
    let flag = false;
    let currentUser;

    for (let i = 0; i < loginData.length; i++) {
      if (
        loginData[i].userEmail === loginEmail &&
        loginData[i].userPassword === loginPassword
      ) {
        flag = true;
        currentUser = loginData[i];
      }
    }

    if (flag) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      window.location.href = "./home.html";
      alert("logged in succesfull");
    } else {
      alert("sorry wrong details");
      document.getElementById("loginEmail").value = "";
      document.getElementById("loginPassword").value = "";
    }
  } else {
    alert("fill all the fields");
  }
}
