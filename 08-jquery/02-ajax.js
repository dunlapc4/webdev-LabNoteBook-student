$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";
  const fetchData = (url) => {
    $.ajax({
      type: GET,
      url: url,
      success: (data) => {
        data.forEach((item) => {
          addBookToDOM(item);
        });
      },
      error: (error) => {
        console.error(error);
        $("#books").append($("<div>").text(`an error has occured`));
      },
      complete: () => {
        $("#loading").remove();
      },
    });
    /*   fetchData(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          addBookToDOM(item);
        });
      })
      .catch((error) => {
        console.log(error);
        let li = document.createElement("li");
        li.textContent = `an error occured please try again`;
        app.append(li);
      })
      .finally(() => {
        app.removeChild(loading);
      });*/
  };
  fetchData(url);
});

const app = document.querySelector("#books");
app.style.paddingLeft = 0;
const loading = document.querySelector("#loading");

const addBookToDOM = (item) => {
  console.log(item);

  $("#books").append(
    $("<div>")
      .ccs({
        display: flex,
        flexDirection: "column",
        lignItems: "center",
        marginTop: "20px",
      })
      .append($("h3").text(item.name))
      .append($("<p>").text(item.author[0]))
      .append($("<p>").text(item.released))
  );
  /*let element = document.createElement("div");
  let title = document.createElement("h4");
  let author = document.createElement("p");
  let published = document.createElement("p");
  let pages = document.createElement("p");*/

  /* element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "20px";

  title.textContent = item.name;
  author.textContent = `by ${item.authors[0]}`;
  published.textContent = item.released.substr(0, 4);
  pages.textContent = `${item.numberOfPages} pages`;*/

  /* element.append(title);
  element.append(author);
  element.append(published);
  element.append(pages);

  app.append(element);*/
};

/*const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    },

    error: (error) => {
      console.error(error);
    },

    complete: () => {
      $('#loading').remove();
    },
  });*/
/* .catch((error) => {
      console.log(error);
      let li = document.createElement("li");
      li.textContent = `An error occured. Please try again.`;
      app.append(li);*/

/*.finally(() => {
      app.removeChild(loading);
    });*/

fetchData(url);
