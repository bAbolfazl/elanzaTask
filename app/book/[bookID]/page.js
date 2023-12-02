"use client";

import { getSingleBook } from "@/APIGate/books";
import WithProfiler from "@/app/_HOC/withProfiler";
import WithLoader from "@/app/_HOC/withLoading";
import BookDetail from "@/app/_components/bookDetail";
import { useQuery } from "react-query";

const BookDetailWithLoaderWithProfiler = WithProfiler(WithLoader(BookDetail));

const BookID = ({ params }) => {
  const { data: bookData, isFetching } = useQuery("singleBook", () =>
    getSingleBook(params.bookID)
  );

  return (
    <BookDetailWithLoaderWithProfiler
      isLoading={isFetching}
      data={bookData}
      title="bookDetailPage"
    />
  );
};

export default BookID;
