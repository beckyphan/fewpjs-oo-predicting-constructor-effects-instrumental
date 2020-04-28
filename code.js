class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.area = sideA * sideB;
    this.perimeter = sideA * 2 + sideB * 2;
  }
}
// Given the example class above, what will all four properties be if let rectangle = new Rectangle(2,4) is run?
let rectangle = new Rectangle(2,4)
rectangle.sideA // 2
rectangle.sideB // 4
rectangle.area // 8
rectangle.perimeter // 12
// What if let rectangle = new Rectangle(10,-4) is run?
let rectangle = new Rectangle(10,-4)
rectangle.sideA // 10
rectangle.sideB // -4
rectangle.area // -40
rectangle.perimeter // 12
// would need validation to prevent this

class Book {
  constructor(title, author) {
    this.title = this.titleize(title);
    this.author = this.titleize(author);
  }

  titleize(string) {
    let words = string.split(' ');
    for (let n = 0; n < words.length; n++) {
      words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
    }
    return words.join(' ');
  }
}
// What would the resulting instance look like if we ran new Book("Shawshank Redemption", "Stephen King")?
let book = new Book("Shawshank Redemption", "Stephen King"
book.title // Shawshank Redemption
book.author // Stephen King
// What about new Book("all the pretty horses", "cormac mccarthy")?
let book = new Book("all the pretty horses", "cormac mccarthy")
book.title // All The Pretty Horses
book.author // Cormac Mccarthy

class Transaction {}
// What would happen if let transactions = new Transaction(14.50, new Date(), "Subway tickets") was run?
let transactions = new Transaction(14.50, new Date(), "Subway tickets")
transactions // Transaction {}
