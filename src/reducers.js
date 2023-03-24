import { combineReducers } from "redux";
import authorsReducer from "./features/books/authors/authorsSlice";
import booksReducer from "./features/books/books/booksSlice";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;