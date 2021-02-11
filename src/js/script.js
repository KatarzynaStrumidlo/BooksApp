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
  const filters = [];

  function initActions(){
    const booksContainer = document.querySelector(select.containerOf.booksList);
    booksContainer.addEventListener('dblclick', function(event){
      event.preventDefault();
      const clickedElem = event.target.offsetParent;
      const id = clickedElem.getAttribute('data-id');
      if(!clickedElem.classList.contains('favorite')){
        favoriteBooks.push(id);
        clickedElem.classList.add('favorite');
      } else {
        favoriteBooks.splice(favoriteBooks.indexOf(id), 1);
        clickedElem.classList.remove('favorite');
      }
    });
    /* niby wszystko działa, ale jak klikam na tą ksiażkę w drugim rzędzie
  to coś się psuje. Jak jest na szerokim ekranie i klikam książkę nr 4
  (jest wtedy w górnym rzędzie) to działa, ale jak zmiejszę ekran i przeskakuje
  ona do drugiego rzędu to przestaje działać */
    const filtersContainer = document.querySelector(select.containerOf.filters);
    filtersContainer.addEventListener('click', function(event){
      const clickedElem = event.target;
      if(clickedElem.tagName === 'INPUT' && clickedElem.type === 'checkbox' && clickedElem.name ==='filter'){
        console.log(clickedElem.value);
        if(clickedElem.checked){
          filters.push(clickedElem.value);
          console.log('filters', filters);
        } else {
          const id = filters.indexOf(clickedElem.value);
          filters.splice(filters.indexOf(id), 1);
          console.log('filters', filters);
        }
      }
      filterBooks();
    });
  }
  initActions();
  console.log(favoriteBooks);

  function filterBooks(){
    for(let book of dataSource.books){
      let shouldBeHidden = false;
      for(let filter of filters){
        if(!book.details[filter]){
          shouldBeHidden = true;
          break;
        }
      }
      if(shouldBeHidden){
        document.querySelector('.book__image[data-id="' + book.id + '"]').classList.add('hidden');
      }else {
        document.querySelector('.book__image[data-id="' + book.id + '"]').classList.remove('hidden');
      }
    }
  }







}




