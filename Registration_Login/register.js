function registerForm(event) {
  event.preventDefault();

  let name = document.getElementById("userName").value;
  let email = document.getElementById("userEmail").value;
  let password = document.getElementById("userPassword").value;
  let cPassword = document.getElementById("userCpassword").value;

  console.log(
    `Name = ${name}, Email = ${email}, Password = ${password}, Confirmpassword = ${cPassword}`
  );

  if (name && email && password && cPassword) {
    if (password.length >= 8 && cPassword >= 8) {
      if (password === cPassword) {
        let storeData = JSON.parse(localStorage.getItem("userDetails")) || [];
        let flag = false;

        for (let i = 0; i < storeData.length; i++) {
          if (storeData[i].userEmail === email) {
            flag = true;
          }
        }
        let dataobject = {
          userName: name,
          userEmail: email,
          userPassword: password,
        };
        if (!flag) {
          storeData.push(dataobject);
          localStorage.setItem("userDetails", JSON.stringify(storeData));
          alert("Registration Succefull");
          window.location.href = "./login.html";
          document.getElementById("userName").value = "";
          document.getElementById("userEmail").value = "";
          document.getElementById("userPassword").value = "";
          document.getElementById("userCpassword").value = "";
        } else {
          alert("Email already registered Try Login");
          window.location.href = "./login.html";
        }
      } else {
        alert("Password Doesn't Match");
      }
    } else {
      alert("password must be atleast 8 characters");
    }
  } else {
    alert("Please fill all the field");
  }
}
