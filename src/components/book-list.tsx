import BookPreview from "./book-preview";
import { useEffect, useState } from "react";
import { fetchBooks } from "../api-client";

const BookList = ({ initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  useEffect(() => {
    // TODO: not when server_side rendering
    // fetchBooks().then((books) => {
    //   setBooks(books);
    // });
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
