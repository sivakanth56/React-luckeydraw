





class Book {
  static author = "Suresh Yadam";
  constructor(title, price, nPages) {
    this.title = title;
    this.price = price;
    this.numberOfPages = nPages;
  }
  updatePrice(newPrice) {
    this.price = newPrice;
  }
  static getBookName() {
    return Book.author;
  }
}

let jsBook = new Book("JavaScript by suresh techs", 300, 200);
let pythonBook = new Book("Python by suresh techs", 500, 300);
console.log(jsBook.title, jsBook.price);
jsBook.updatePrice(100);
console.log(jsBook.title, jsBook.price);

console.log(pythonBook.title, pythonBook.price);
console.log(Book.author);
console.log(Book.getBookName());

let jsBook1 = {
  title: "JS book",
  price: 300,
  noOfPages: 200,
  author: "suresh",
};
console.log(jsBook1);









