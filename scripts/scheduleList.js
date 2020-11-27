var user;
async function getSchedule() {
  var res = localStorage.getItem("user");
  var caixaHorario = document.getElementById("caixa-horario");

  user = JSON.parse(res);

  fetch(`http://localhost:3333/schedules/${user._id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(async (response) => {
    var res = await response.json();
    if (res) {
      var listagem = document.createElement("div");
      var divHour = document.createElement("div");
      var divDate = document.createElement("div");
      var titleHour = document.createElement("label");
      var titleDate = document.createElement("label");

      var titleD = document.createTextNode("Horário");
      var titleH = document.createTextNode("Data");

      divHour.classList = "div-hour";
      divDate.classList = "div-date";
      listagem.classList = "listagem";

      titleHour.appendChild(titleH);
      titleDate.appendChild(titleD);

      divHour.appendChild(titleHour);
      divDate.appendChild(titleDate);

      listagem.appendChild(divHour);
      listagem.appendChild(divDate);

      caixaHorario.appendChild(listagem);
      res.map((schedule) => {
        var dateArray = splitDateAndHour(schedule.scheduleDate);
        var list = document.createElement("div");

        var divH = document.createElement("div");
        var divD = document.createElement("div");

        divH.classList = "div-hour";
        divD.classList = "div-date";
        list.classList = "listagem";

        var hourLabel = document.createElement("label");
        var dateLabel = document.createElement("label");

        var hour = document.createTextNode(dateArray[1]);
        var date = document.createTextNode(dateArray[0]);

        dateLabel.appendChild(date);
        hourLabel.appendChild(hour);

        divH.appendChild(hourLabel);
        divD.appendChild(dateLabel);

        list.appendChild(divD);
        list.appendChild(divH);

        caixaHorario.appendChild(list);
      });
    } else if (res.error === "Invalid password") {
      alert("Senha inválida!");
    } else if (res.error === "User not found") {
      alert("Email inválido!");
    }
  });
}

function splitDateAndHour(schedule) {
  return schedule.split(",").map((item) => item.trim());
}
