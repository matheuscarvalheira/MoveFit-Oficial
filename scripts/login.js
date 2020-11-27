document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var email = document.getElementById("login").value;
    var password = document.getElementById("senha").value;

    fetch("http://localhost:3333/session", {
      method: "POST",
      body: JSON.stringify({
        email,
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
        localStorage.setItem("user", JSON.stringify(res));
        window.location.href = "./perfil.html";
      } else if (res.error === "Invalid password") {
        alert("Senha inválida!");
      } else if (res.error === "User not found") {
        alert("Email inválido!");
      }
    });
  });
