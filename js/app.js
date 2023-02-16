const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const db_data = JSON.parse(xhr.responseText);
    const columns = document.querySelectorAll(".column");

    for (let i = 0; i < 4; i++) {
      let images = "";
      for (let j = i; j < db_data.length; j += 4) {
        images += `<a href="slideshow.html"><img src="${db_data[j].images.thumbnail}" id="${j}"></a>`;
      }
      columns[i].innerHTML = images;
    }

    columns.forEach((column) => {
      column.addEventListener("click", function (event) {
        localStorage.setItem("imageid", event.target.id);
      });
    });
  }
};

xhr.open("GET", "data/data.json");
xhr.send();
