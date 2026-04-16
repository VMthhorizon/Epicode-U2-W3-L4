const searchURL = "https://api.pexels.com/v1/search?query=";

const getImg = function (query) {
  fetch(searchURL + query, {
    headers: {
      Authorization: "wr9VHeJ8BCY4mdq0eIvLCG81ZSoedLSi0g662bAtBjgwNfADvEfr9bR6",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("Esiste un file criceti, procedi", response.status);
        return response.json();
      } else {
        throw new Error("ERRORE! non trovo file con immagini di criceti");
      }
    })
    .then((data) => {
      const cardImg = document.querySelectorAll(".card img");
      const arr9Min = document.querySelectorAll("small");

      cardImg.forEach((img, index) => {
        if (data.photos[index]) {
          img.src = data.photos[index].src.medium;
          if (arr9Min) {
            arr9Min[index].innerText = data.photos[index].id;
          }
        }
      });
    })
    .catch((err) => {
      console.log("ERRORE! non riusciamo a contattare l'API", err);
    });
};
// const getImgKittens = function () {
//   fetch(kittensURL, {
//     headers: {
//       Authorization: "wr9VHeJ8BCY4mdq0eIvLCG81ZSoedLSi0g662bAtBjgwNfADvEfr9bR6",
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log("Esiste un file criceti, procedi", response.status);
//         return response.json();
//       } else {
//         throw new Error("ERRORE! non trovo file con immagini di criceti");
//       }
//     })
//     .then((kittens) => {
//       const loadKittensBtn = document.querySelector(".btn-secondary");
//       const cardImg = document.querySelectorAll(".card img");
//       loadKittensBtn.addEventListener("click", function () {
//         cardImg.forEach((img, index) => {
//           if (kittens.photos[index]) img.src = kittens.photos[index].src.medium;
//         });
//       });
//     })
//     .catch((err) => {
//       console.log("ERRORE! non riusciamo a contattare l'API", err);
//     });
// };

const loadHamsterBtn = document.querySelector(".btn-primary");
loadHamsterBtn.addEventListener("click", function () {
  getImg("hamsters");
});

const loadKittensBtn = document.querySelector(".btn-secondary");
loadKittensBtn.addEventListener("click", function () {
  getImg("kittens");
});

const searchBtn = document.getElementById("button-addon2");
searchBtn.addEventListener("click", function () {
  getImg(document.querySelector(".form-control").value);
});

const arrHideBtn = document.querySelectorAll(".btn-group button:last-child");
arrHideBtn.forEach((hideBtn) => {
  hideBtn.addEventListener("click", function () {
    hideBtn.closest(".card").classList.add("invisible");
  });
});

const allLinks = document.querySelectorAll(".card a");
const detailURL = "./details.html?id=";

allLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const imgId = link.closest(".card").querySelector("small").innerText;
    location.assign(detailURL + imgId);
  });
});
