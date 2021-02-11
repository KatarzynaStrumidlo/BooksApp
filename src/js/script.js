{
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

  const favoriteBooks = [];

  function initActions(){
    const booksContainer = document.querySelector(select.containerOf.booksList);
    const booksImage = booksContainer.querySelectorAll('.book__image');
    for (let image of booksImage){
      image.addEventListener('dblclick', function(event){
        event.preventDefault();
        if (!image.classList.contains('favorite')){
        image.classList.add('favorite');
        const id = image.getAttribute('data-id');
        favoriteBooks.push(id);
        } else {
          image.classList.remove('favorite');
          const id = image.getAttribute('data-id');
          const indexOfid = favoriteBooks.indexOf('id');
          favoriteBooks.splice(indexOfid, 1);
        }
      });
    }
    /* niby wszystko działa, ale jak klikam na tą ksiażkę w drugim rzędzie
to coś się psuje. Jak jest na szerokim ekranie i klikam książkę nr 4
(jest wtedy w górnym rzędzie) to działa, ale jak zmiejszę ekran i przeskakuje
ona do drugiego rzędu to przestaje działać */
  }
  initActions();
  console.log(favoriteBooks);




}




