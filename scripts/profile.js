var user;
function getUser() {
  var res = localStorage.getItem("user");
  user = JSON.parse(res);
  console.log(user);

  var caixa = document.getElementById("caixa");
  var uName = document.createElement("input");
  var uEmail = document.createElement("input");
  var uAddress = document.createElement("input");
  var uNumber = document.createElement("input");

  uName.id = "userName";
  uEmail.id = "userEmail";
  uAddress.id = "userAddress";
  uNumber.id = "userNumber";

  uName.value = user.name;
  uEmail.value = user.email;
  uAddress.value = user.address;
  uNumber.value = user.cellphone;

  uName.disabled = true;
  uEmail.disabled = true;
  uAddress.disabled = true;
  uNumber.disabled = true;

  caixa.appendChild(uName);
  caixa.appendChild(uEmail);
  caixa.appendChild(uAddress);
  caixa.appendChild(uNumber);
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "./index.html";
}

function criaTabela1() {
  var teste = document.getElementById("teste");
  teste.innerHTML = [
    "<table>",
    "<tr>",
    "<th>Exercícios</th>",
    "<th>Série</th>",
    "<th>Intensidade</th>",
    "</tr>",
    "<tr>",
    "<td>SUPINO INCLINADO</td>",
    "<td>4x8-10</td>",
    "<td>80%</td>",

    "</tr>",

    "<tr>",
    "<td>CRUCIFIXO</td>",
    "<td>4x6-12</td>",
    "<td>70%</td>",
    "</tr>",

    "<tr>",
    "<td>SUPINO C/ BARRA</td>",
    "<td>4x8-10</td>",
    "<td>80%</td>",
    "</tr>",

    "<tr>",
    "<td>VOADOR</td>",
    "<td>4x6-12</td>",
    "<td>70%</td>",
    "</tr>",

    "<tr>",
    "<td>ABD. INSISTÊNCIA</td>",
    "<td>4XMÁX</td>",
    "<td>80%</td>",
    "</tr>",
    "</table>",
  ].join("\n");
}

function criaTabela2() {
  var teste = document.getElementById("teste");
  teste.innerHTML = [
    "<table>",
    "<tr>",
    "<th>Exercícios</th>",
    "<th>Série</th>",
    "<th>Intensidade</th>",
    "</tr>",
    "<tr>",
    "<td>LEVANTAMENTO</td>",
    "<td>4x8-10</td>",
    "<td>20%</td>",

    "</tr>",

    "<tr>",
    "<td>PULLEY FRONTAL</td>",
    "<td>4x6-12</td>",
    "<td>40%</td>",
    "</tr>",

    "<tr>",
    "<td>PULLEY ATRÁS</td>",
    "<td>4x8-10</td>",
    "<td>45%</td>",
    "</tr>",

    "<tr>",
    "<td>REMADA</td>",
    "<td>4x6-12</td>",
    "<td>70%</td>",
    "</tr>",

    "<tr>",
    "<td>SERROTE</td>",
    "<td>4XMÁX</td>",
    "<td>90%</td>",
    "</tr>",
    "</table>",
  ].join("\n");
}

function criaTabela3() {
  var teste = document.getElementById("teste");
  teste.innerHTML = [
    "<table>",
    "<tr>",
    "<th>Exercícios</th>",
    "<th>Série</th>",
    "<th>Intensidade</th>",
    "</tr>",
    "<tr>",
    "<td>LEG PRESS</td>",
    "<td>4x8-10</td>",
    "<td>10%</td>",

    "</tr>",

    "<tr>",
    "<td>EXTENSOR</td>",
    "<td>4x6-12</td>",
    "<td>20%</td>",
    "</tr>",

    "<tr>",
    "<td>FLEXORA</td>",
    "<td>4x8-10</td>",
    "<td>100%</td>",
    "</tr>",

    "<tr>",
    "<td>CADEIRA ADUTORA</td>",
    "<td>4x6-12</td>",
    "<td>70%</td>",
    "</tr>",

    "<tr>",
    "<td>STIFF</td>",
    "<td>4XMÁX</td>",
    "<td>40%</td>",
    "</tr>",
    "</table>",
  ].join("\n");
}

function pegaValor() {
  //pega o valor
  var select = document.getElementById("categorias");
  var value = select.options[select.selectedIndex].value;
  console.log(value);

  if (value === "1") {
    //apaga a tabela anterior
    if (document.getElementById("minha-tabela") != null) {
      document.getElementById("minha-tabela").remove();
    }
    criaTabela1();
  }

  if (value === "2") {
    //apaga a tabela anterior
    if (document.getElementById("minha-tabela") != null) {
      document.getElementById("minha-tabela").remove();
    }
    criaTabela2();
  }

  if (value === "3") {
    //apaga a tabela anterior
    if (document.getElementById("minha-tabela") != null) {
      document.getElementById("minha-tabela").remove();
    }
    criaTabela3();
  }
}
