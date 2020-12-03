document
  .getElementById("submit")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("lastname").value;
    var number = document.getElementById("number").value;
    var address = document.getElementById("address").value;
    var date = document.getElementById("date").value;
    var password = document.getElementById("password").value;

    var newDate = date.toString();

    await fetch("http://localhost:3333/user", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        surname,
        cellphone: number,
        address,
        birthday: newDate,
        password,
      }),
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      var res = await response.json();
      console.log(res);
      if (res._id) {
        alert('Usuário cadastrado com sucesso!');
        window.location.href = "./login.html";
      } else if (res.error) {
        alert(res.error);
      }
    });
  });
