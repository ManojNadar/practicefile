function loginForm(event) {
  event.preventDefault();

  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  if (loginEmail && loginPassword) {
    let loginData = JSON.parse(localStorage.getItem("userDetails"));
    let flag = false;
    // let Current_User;

    for (let i = 0; i < loginData.length; i++) {
      if (
        loginData[i].userEmail === loginEmail &&
        loginData[i].userpassword === loginPassword
      ) {
        flag = true;
        // Current_User = loginData[i];
      }
    }

    if (!flag) {
      //   localStorage.setItem("userDetails", JSON.stringify(Current_User));
      window.location.href = "./home.html";
      alert("logged in succesfull");
    } else {
      alert("sorry wrong details");
    }
  } else {
    alert("fill all the fields");
  }
}
