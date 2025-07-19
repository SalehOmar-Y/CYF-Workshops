const form = document.getElementById("form");
const usernameElement = document.getElementById("username");
console.log(usernameElement)
const passwordElement = document.getElementById("password");
console.log(passwordElement)
const buttonElement = document.getElementById("button");
console.log(buttonElement)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameElement.value;
  console.log(username.length)
  const password = passwordElement.value;
    console.log(password.length)
  // let usernameLength = username.length();
  // let passwordLength = password.length();

  // // if (usernameLength > 4 && passwordLength > 4) {
  // //   console.log("-------------------------");
  // //   console.log("Success you have finished");
  // //   console.log("-------------------------");
  // // } else {
  // //   alert("Username must be at least 4 characters");
  // //   alert("password must be at least 4 characters");
  // }
});
