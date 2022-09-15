const membresList = document.getElementById("membre__container"); //3
const input = document.getElementById("membre"); //8
const button = document.getElementById("btn-submit"); //9
const form = document.getElementById("form");

function fetchData() {
  fetch("https://fanompo-6a67.restdb.io/rest/services")
    .then((response) => response.json())
    .then((json) => takeData(json));
  return;
} //1
fetchData();

function takeData(val) {
  renderData(val.slice(1, 11));
  return val.slice(1, 11);
} //2

function checkMembres(val) {
  let bool = "false";
  val === true ? (bool = "COMPLETED") : (bool = "UNCOMPLETED");
  return bool;
} //7

function renderData(dataSlice) {
  let list = dataSlice
    .map(
      (membre, i) =>
        `li class="membre">
		
   <p>${i + 1}. ${membre.title} - ${checkMembres(membre.completed)}</p>
 </li>`
    ) //5
    .join(" "); //6

  //7 i + 1

  membresList.innerHTML = list;
} //4

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  let data = {
    title: input.value,
    completed: false,
    userId: 1,
  };

  postData(data);

  input.value = "";
});

/* function postData(data) {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
} */
