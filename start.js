const hamsterURL = "https://api.pexels.com/v1/search?query=hamsters";
const kittensURL = "https://api.pexels.com/v1/search?query=kittens";

const getImgHamster = function () {
  fetch(hamsterURL, {
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
    .then((hamsters) => {
      const loadHamsterBtn = document.querySelector(".btn-primary");
      const cardImg = document.querySelectorAll(".card img");
      loadHamsterBtn.addEventListener("click", function () {
        cardImg.forEach((img, index) => {
          if (hamsters.photos[index])
            img.src = hamsters.photos[index].src.medium;
        });
      });
    })
    .catch((err) => {
      console.log("ERRORE! non riusciamo a contattare l'API", err);
    });
};
const getImgKittens = function () {
  fetch(kittensURL, {
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
    .then((kittens) => {
      const loadKittensBtn = document.querySelector(".btn-secondary");
      const cardImg = document.querySelectorAll(".card img");
      loadKittensBtn.addEventListener("click", function () {
        cardImg.forEach((img, index) => {
          if (kittens.photos[index]) img.src = kittens.photos[index].src.medium;
        });
      });
    })
    .catch((err) => {
      console.log("ERRORE! non riusciamo a contattare l'API", err);
    });
};

getImgHamster();
getImgKittens();
