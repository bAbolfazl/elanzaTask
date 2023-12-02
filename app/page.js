"use client";

import BooksList from "./_components/booksList";
import { useQuery } from "react-query";
import { getBooks } from "@/APIGate/books";
import WithLoader from "./_HOC/withLoading";
import WithProfiler from "./_HOC/withLoading";

const BooksListWithLoaderWithProfiler = WithProfiler(WithLoader(BooksList));

export default function Home() {
  const { data: booksData, isLoading } = useQuery("books", getBooks);

  return (
    <>
      <h1 className="text-blue font-bold text-3xl mb-9">Books (Users)</h1>
      <BooksListWithLoaderWithProfiler
        isLoading={isLoading}
        data={booksData}
        title="homePage"
      />
    </>
  );
}
