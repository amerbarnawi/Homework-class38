//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  // TODO your code goes in here, return the ul element

  const ul = document.createElement('ul');
  ul.style.display = 'flex';
  ul.style.width = '90%';
  ul.style.justifyItems = 'center';

  books.forEach((book) => {
    const li = document.createElement('li');
    const paragraph = document.createElement('p');
    const text = document.createTextNode(`${book.title} - ${book.author}.`);
    const image = document.createElement('img');

    li.style.listStyle = 'none';
    li.style.margin = '10px';
    li.style.padding = '10px';
    li.style.flex = '1';

    if (book.alreadyRead === true) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }

    if (book.title === 'The Design of Everyday Things') {
      image.setAttribute(
        'src',
        'https://productnotes.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png'
      );
      image.style.width = '200px';
    } else if (book.title === 'The Most Human Human') {
      image.setAttribute(
        'src',
        'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg'
      );
      image.style.width = '200px';
    } else if (book.title === 'The Pragmatic Programmer') {
      image.setAttribute(
        'src',
        'https://media.s-bol.com/mLB3V4PA12n/550x690.jpg'
      );
      image.style.width = '200px';
    }

    paragraph.appendChild(text);
    li.appendChild(paragraph);
    li.appendChild(image);
    ul.appendChild(li);
  });

  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
