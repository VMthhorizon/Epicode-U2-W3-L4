const img = document.querySelector(".card img");
const allTheParam = new URLSearchParams(location.search);
const imgId = allTheParam.get("id");

fetch("https://api.pexels.com/v1/photos/" + imgId, {
  headers: {
    Authorization: "wr9VHeJ8BCY4mdq0eIvLCG81ZSoedLSi0g662bAtBjgwNfADvEfr9bR6",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    img.src = data.src.medium;
    document.querySelector(".card-title").innerHTML =
      `<a class="card-title text-danger" href="${data.photographer_url}">Profilo Fotografo</a>`;
    document.querySelector(".card-text").innerHTML =
      '<a href="/pexels-start.html">TORNA INDIETRO</a>';
  })
  .catch((err) => {
    console.log(("SERVER ERROR!", err));
  });
