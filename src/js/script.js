'use strict';
const select = {
  templateOf: {
    booksTemplate : '#template-book',
  },
  containerOf: {
    booksList : '.books-list',
  },
};
const templates = {
  booksTemplate : Handlebars.compile(document.querySelector(select.templateOf.booksTemplate).innerHTML),
};

function render(){
  for(let books of dataSource.books){
     /* generate HTML based on template */
     const generatedHTML = templates.booksTemplate(books);
     /* create element using utils.createElementFromHTML */
     const element = utils.createDOMFromHTML(generatedHTML);
     /* find menu comtainer */
     const booksContainer = document.querySelector(select.containerOf.booksList);
     /* add element to menu */
     booksContainer.appendChild(element);
  }
}
render();




