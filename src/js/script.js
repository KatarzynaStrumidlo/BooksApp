{
  'use strict';
  const select = {
    templateOf: {
      booksTemplate : '#template-book',
    },
    containerOf: {
      booksList : '.books-list',
      filters: '.filters',
    },
  };
  const templates = {
    booksTemplate : Handlebars.compile(document.querySelector(select.templateOf.booksTemplate).innerHTML),
  };

  class BooksList {
    constructor() {
      const thisBooksList = this;
      thisBooksList.initData();
      thisBooksList.getElements();
      thisBooksList.render();
      thisBooksList.initActions();
      thisBooksList.determineRatingBgc();
    }

    initData() {
      const thisBooksList = this;
      thisBooksList.data = dataSource.books;
    }

    getElements() {
      const thisBooksList = this;
      thisBooksList.booksContainer = document.querySelector(select.containerOf.booksList);
      thisBooksList.filtersContainer = document.querySelector(select.containerOf.filters);
      thisBooksList.favoriteBooks = [];
      thisBooksList.filters = [];
      thisBooksList.filterBook = document.querySelector('.book__image[data-id="' + book.id + '"]');
    }

    render(){
      const thisBooksList = this;
      for(let books of dataSource.books){
      /* generate HTML based on template */
        const generatedHTML = templates.booksTemplate(books);
        /* create element using utils.createElementFromHTML */
        const element = utils.createDOMFromHTML(generatedHTML);
        /* add element to container */
        thisBooksList.booksContainer.appendChild(element);

        const ratingBgc = determineRatingBgc(rating);
        const ratingWidth = width;
      };
    }

    initActions() {
      const thisBooksList = this;
      thisBooksList.booksContainer.addEventListener('dblclick', function(event){
      event.preventDefault();
      const clickedElem = event.target.offsetParent;
      const id = clickedElem.getAttribute('data-id');
      if(!clickedElem.classList.contains('favorite')){
        thisBooksList.favoriteBooks.push(id);
        clickedElem.classList.add('favorite');
      } else {
        thisBooksList.favoriteBooks.splice(thisBooksList.favoriteBooks.indexOf(id), 1);
        clickedElem.classList.remove('favorite');
      }
    });
    /* niby wszystko działa, ale jak klikam na tą ksiażkę w drugim rzędzie
    to coś się psuje. Jak jest na szerokim ekranie i klikam książkę nr 4
    (jest wtedy w górnym rzędzie) to działa, ale jak zmiejszę ekran i przeskakuje
    ona do drugiego rzędu to przestaje działać */

      thisBooksList.filtersContainer.addEventListener('click', function(event){
      const clickedElem = event.target;
      if(clickedElem.tagName === 'INPUT' && clickedElem.type === 'checkbox' && clickedElem.name ==='filter'){
        console.log(clickedElem.value);
        if(clickedElem.checked){
          thisBooksList.filters.push(clickedElem.value);
        } else {
          const id = thisBooksLi.stfilters.indexOf(clickedElem.value);
          thisBooksList.filters.splice(thisBooksList.filters.indexOf(id), 1);
        }
      }
    });
    }

    filterBooks() {
      const thisBooksList = this;
      for(let book of dataSource.books){
        let shouldBeHidden = false;
        for(let filter of filters){
          if(!book.details[filter]){
            shouldBeHidden = true;
            break;
          }
        }
        if(shouldBeHidden){
          thisBooksList.filterBook.classList.add('hidden');
        }else {
          thisBooksList.filterBook.classList.remove('hidden');
        }
      }
    }

    determineRatingBgc(rating) {
      ...
    }

  }

  const app = new BooksList();













}




