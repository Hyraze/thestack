const BookPreview = ({ book }) => {
  return (
    <div className="book-preview">
      <div className="category">{book.title}</div>
      <div className="contest">{book.description}</div>
      <div className="author">Author: {book.author}</div>
    </div>
  );
};

export default BookPreview;
