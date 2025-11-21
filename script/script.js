/**
 *
 */

const selectKinderen = document.getElementById("kinderen");
const lijst = document.getElementById("reedsgeschenk");

function updateSelect() {
  fetch("https://o-apiandclient-render.onrender.com/kinderen").then(
    (data) =>
      data.json().then((alleKinderen) => {
        console.log(alleKinderen);

        alleKinderen.forEach((kind) => {
          const newOption = document.createElement("option");
          newOption.value = kind.voornaam;
          newOption.innerHTML = kind.voornaam;
          selectKinderen.appendChild(newOption);
        });
      })
  );
}

selectKinderen.addEventListener("change", () => {
  fetch("https://o-apiandclient-render.onrender.com/kinderen").then(
    (data) => {
      data.json().then((kinderen) => {
        console.log(selectKinderen.value);

        const newItem = document.createElement("li");
        const kind = kinderen.find((kindje) => {
          console.log(kindje.voornaam);

          kindje.voornaam == selectKinderen.value;
        });
        console.log(kind);
      });
    }
  );
});

updateSelect();
