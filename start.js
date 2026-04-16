const hamsterURL = "https://api.pexels.com/v1/search?query=hamsters";

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

getImgHamster();
getImgUnicorn();
