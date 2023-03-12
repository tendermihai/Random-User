//create async function to get all users from API
async function getPersons() {
  let data = await fetch("https://randomuser.me/api/?results=10");
  let conv = await data.json();
  attachCards(conv.results);
}

let card = document.querySelector(".card");

//functie care imi creeaza carduri
function createCard(person) {
  let section = document.createElement("section");
  section.classList.add("card");

  section.innerHTML = `

  
  <section class="img-avatar">
      <img src=${person.picture.thumbnail} class="avatar">
  </section>
  <section class="info">
      <p class="gender">${person.gender}</p>
      <p class="name">${
        person.name.title + " " + person.name.first + " " + person.name.last
      }</p>
      <p class="email">${person.email}</p>
      <p class="location">${person.location.city}</p>
  </section>

  
  `;

  return section;
}

function attachCards(persons) {
  let container = document.querySelector(".container");

  container.innerHTML = "";
  Array.from(persons).forEach((person) => {
    container.appendChild(createCard(person));
  });
}

getPersons();

// async function createPagination(persons) {
//   let btns = document.querySelector(".pg-btns");

//   let data = await fetch(
//     "https://randomuser.me/api/?page=3&results=10&seed=abc"
//   );
//   let conv = await data.json();
//   console.log(conv);

//   btns.addEventListener("click", () => {
//     console.log("apasat");

//     getPersons(conv);
//   });
// }

let btns = document.querySelector(".pg-btns");

btns.addEventListener("click", async (e) => {
  let btn = e.target;
  if (btn.classList.contains("btn")) {
    console.log(btn.textContent);

    let data = await fetch(
      `https://randomuser.me/api/?page=${btn.textContent}&results=10&seed=abc`
    );
    let conv = await data.json();
    attachCards(conv.results);
  }
});
