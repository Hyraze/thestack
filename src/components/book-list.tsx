import BookPreview from "./book-preview";
import { useEffect, useState } from "react";
import { fetchBooks } from "../api-client";

const BookList = ({ initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data.books);
    });
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookPreview key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
