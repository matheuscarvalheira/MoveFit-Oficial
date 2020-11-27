var user;
function loadInputs() {
  var res = localStorage.getItem("user");
  user = JSON.parse(res);

  var cellphone = document.getElementById("contact");
  var address = document.getElementById("adress");
  var email = document.getElementById("email");

  cellphone.value = user.cellphone;
  address.value = user.address;
  email.value = user.email;
}

async function update() {
  var cellphone = document.getElementById("contact").value;
  var address = document.getElementById("adress").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("senha").value;

  fetch(`http://localhost:3333/user/${user._id}`, {
    method: "PUT",
    body: JSON.stringify({
      email,
      cellphone,
      address,
      password,
    }),
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(async (response) => {
    var res = await response.json();
    if (res._id) {
      alert("Usuário atualizado");
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(res));
      window.location.href = "./perfil.html";
    } else if (res.error) {
      alert(res.error);
    }
  });
}
