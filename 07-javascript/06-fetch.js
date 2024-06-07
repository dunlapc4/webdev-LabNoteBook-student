const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const addBookToDom = (item) => {
  let element = document.createElement("div");
  let title = document.createElement("div");
  let author = document.createElement("div");
  let released = document.createElement("div");
  let pages = document.createElement("div");

  title.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.release;
  pages.textConent = book.numberOfPages;

  element.append(title);
  element.append(author);
  element.append(released);
  element.append(pages);

  app.append(element);
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    //    (response) => console.log(response),
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //(error) => console.log(error)

      //.then((data) => console.log(data));
      data.forEach((book) => {
        console.log(
          book.name,
          book.authors[0],
          book.numberOfPages,
          book.released
        );

        addBookToDom(book);
      });
    })
    .catch((error) => {
      console.error(error);
      let element = document.createElement("div");
      element.textContent = "an error occured.";
      app.append(element);
    });
};

fetchData(url);
