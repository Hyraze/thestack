import ReactDOMServer from 'react-dom/server'
import { fetchBooks } from "../api-client"
import App from '../components/app'

const serverRender = async () => {
    const books = await fetchBooks()

    const initialMarkup = ReactDOMServer.renderToString(
        <App initialData={{ books }} />
    );

    return { initialMarkup, initialData: { books } };
};

export default serverRender;