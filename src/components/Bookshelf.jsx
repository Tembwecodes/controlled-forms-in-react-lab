import { useState } from 'react';

const BookShelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: '', author: '' });
  };

  const handleRemoveBook = (index) => {
    setBooks((prevBooks) => prevBooks.filter((_, i) => i !== index));
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <button onClick={() => handleRemoveBook(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;