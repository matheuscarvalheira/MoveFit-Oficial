var selectedOption;
var user;
function getUser() {
  var res = localStorage.getItem("user");
  user = JSON.parse(res);
  selectedOption = document.getElementById("hour").value;
}

function getSelectedOption(value) {
  selectedOption = value;
}

document
  .getElementById("schedule")
  .addEventListener("click", async function () {
    var date = document.getElementById("hdate").value;

    var newDate = date.toString();

    fetch("http://localhost:3333/schedule", {
      method: "POST",
      body: JSON.stringify({
        user_id: user._id,
        email: user.email,
        name: user.name,
        scheduleDate: date + ", " + selectedOption,
      }),
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      var res = await response.json();
      if (res._id) {
        alert("Horário marcado com sucesso!");
        window.location.href = "./perfil.html";
      } else if (res.error === "Schedule unavailable") {
        alert("Horário indisponível!");
        console.log(res);
      } else {
        alert(res.error);
      }
    });
  });
