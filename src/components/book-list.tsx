import BookPreview from "./book-preview";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookPreview book={book} />;
      })}
    </div>
  );
};

export default BookList;
