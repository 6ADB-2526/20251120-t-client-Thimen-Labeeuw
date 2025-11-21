/**
 *
 */

const selectKinderen = document.getElementById("kinderen");
const lijst = document.getElementById("geschenkenlijst");
const form = document.getElementById("addGeschenk");
const SelectAddGeschenk = document.getElementById("geschenken");

// var formDataGeschenkAdd = new FormData(form);
// const geschenkAdd = Object.fromEntries(formDataGeschenkAdd);

//console.log(geschenkAdd);

function updateSelect() {
  fetch("https://o-apiandclient-render.onrender.com/kinderen").then(
    (data) =>
      data.json().then((alleKinderen) => {
        console.log(alleKinderen);

        alleKinderen.forEach((kind) => {
          const newOption = document.createElement("option");
          newOption.value = kind.id;
          newOption.innerHTML = kind.voornaam;
          selectKinderen.appendChild(newOption);
        });
      })
  );
}

selectKinderen.addEventListener("change", () => {
  fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then((result) => result.json())
    .then((kinderen) => {
      let kindje = kinderen.find(
        (kind) => kind.id == selectKinderen.value
      );
      console.log(kindje);
      lijst.innerHTML = "";
      kindje.fullGeschenk.forEach((geschenk) => {
        const li = document.createElement("li");
        li.innerHTML = geschenk.naam;
        lijst.appendChild(li);
      });
    });
});

fetch("https://o-apiandclient-render.onrender.com/geschenken");

updateSelect();

//geschenken
