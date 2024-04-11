import { IBook } from "./../../types/IBook";
import BookService from "../../services/bookService";
import {
  bookFetching,
  bookFetchingError,
  bookFetchingSuccess,
  bookSetTotalCount,
} from "../reducers/BookSlice";
import { AppDispatch } from "../store";

export const fetchBooks =
  (
    query: string,
    page: number,
    limit: number,
    orderBy: string,
    category: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(bookFetching());
      const {
        data: { totalItems, items },
      } = await BookService.getBooks(query, page, limit, orderBy, category);
      let books: Array<IBook> = items
        ? items.map((item: any) => {
            const {
              id,
              volumeInfo: {
                title,
                authors = [],
                description,
                categories = [],
                imageLinks = {
                  thumbnail:
                    "http://books.google.com/books/publisher/content?id=Z_9PCgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72q1LiyimoWzwsxM3wSpxdEtafrvL8TvP_E6s7vsHMfJb0VXqHeocseynLOMGGcNv8Ae6Jon0s0bdqL75BxOD13S9HFddm7bSDAVUKwDATrnkMjt3rFn3_WqkxxrCoHAtJv0_Wc&source=gbs_api",
                },
              },
            } = item;
            return {
              id,
              title,
              authors,
              description,
              categories,
              photoURL: imageLinks.thumbnail,
            };
          })
        : [];
      dispatch(bookFetchingSuccess(books));
      dispatch(bookSetTotalCount(totalItems));
    } catch (error) {
      let errorMessage =
        error instanceof Error
          ? error.message
          : "Произошла ошибка при загрузке данных";
      dispatch(bookFetchingError(errorMessage));
    }
  };
