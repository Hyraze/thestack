import BookList from "./book-list";
import Header from "./header";

const App = ({ initialData }) => {
  console.log("initialData", initialData);
  return (
    <div className="container">
      <Header message="Book Show" />
      <BookList initialBooks={initialData.books} />
    </div>
  );
};

export default App;
