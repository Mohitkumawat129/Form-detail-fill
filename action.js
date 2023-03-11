const form = document.querySelector("form");
form.addEventListener("submit", addUser);
const users = [];

function addUser(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const num = document.getElementById("number").value;
  const pass1 = document.getElementById("password").value;
  const pass2 = document.getElementById("cpassword").value;

  const user = {
    name: name,
    email: email,
    number: num,
    password: pass1,
  };
  if (pass1 === pass2) {
    users.push(user);
  } else {
    alert("Password is not matched");
  }
  if (users.length > 10) {
    alert("Database is full,Please try after some time!!");
  } else {
    displayUsers();
  }
}
function displayUsers() {
  const name11 = document.getElementById("name1");
  const email11 = document.getElementById("email1");
  const contact11 = document.getElementById("contact1");
  const password11 = document.getElementById("password1");

  name11.innerHTML = "";
  email11.innerHTML = "";
  contact11.innerHTML = "";
  password11.innerHTML = "";

  users.forEach((user) => {
    const li1 = document.createElement("p");
    const li2 = document.createElement("p");
    const li3 = document.createElement("p");
    const li4 = document.createElement("p");

    const name1 = document.createElement("p");
    const email1 = document.createElement("p");
    const contact1 = document.createElement("p");
    const password1 = document.createElement("p");

    name1.innerText = user.name;
    email1.innerText = user.email;
    contact1.innerText = user.contact;
    password1.innerText = user.password;

    li1.appendChild(name1);
    li2.appendChild(email1);
    li3.appendChild(contact1);
    li4.appendChild(password1);

    name11.appendChild(li1);
    email11.appendChild(li2);
    contact11.appendChild(li3);
    password11.appendChild(li4);
  });
}
