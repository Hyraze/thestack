import { createRoot } from "react-dom/client";
import App from "./components/app";
import axios from "axios";

import { API_SERVER_URL } from "./public-config";
console.log("API_SERVER_URL", API_SERVER_URL);

const container = document.getElementById("app");
const root = createRoot(container);

axios.get(`${API_SERVER_URL}/books`).then((response) => {
  console.log("response", response.data);
  root.render(
    <App initialData={{ books: response.data.books }} />,
  );
});
