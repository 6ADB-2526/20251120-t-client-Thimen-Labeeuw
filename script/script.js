/**
 *
 */

const selectKinderen = document.getElementById("kinderen");
const lijst = document.getElementById("geschenkenlijst");

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
      let kindje = {};
      kinderen.forEach((kind) => {
        if (kind.id == selectKinderen.value) {
          console.log(`${kind.id} en ${selectKinderen.value}`);

          kindje = kind;
        }
      });
      console.log(kindje);
      kindje.geschenkId.forEach((id) => {
        const newLi = document.createElement("li");

        fetch("https://o-apiandclient-render.onrender.com/gescheken")
          .then((result) => {
            result.json;
          })
          .then((geschenken) => {
            const gechenkToShow = geschenken.find((geschenk) => {
              geschenk.id == id;
            });
            newLi.innerHTML = id;
            lijst.appendChild(newLi);
          });
      });
    });
});

updateSelect();

//geschenken
