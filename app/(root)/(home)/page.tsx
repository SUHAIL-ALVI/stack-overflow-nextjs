import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import Link from "next/link";
import React from "react";
import HomeFilter from "@/components/home/HomeFilter";
import NoResult from "@/components/shared/NoResult";

const questions = [
  {
    _id: 1,
    title: "Casdcading delete in SQLAlchemy?",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "sql" },
    ],
    author: "john doe",
    upvotes: 2,
    views: 10,
    answer: 4,
    createdAt: "2020-09-01T12:00.000Z",
  },
  {
    _id: 2,
    title: "How ot center a div ?",
    tags: [
      { _id: 1, name: "CSS" },
      { _id: 2, name: "sql" },
    ],
    author: "Alvi ji",
    upvotes: 2,
    views: 10,
    answer: 4,
    createdAt: "2020-09-01T12:00.000Z",
  },
];

function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[40px] rounded-lg px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0
          ? questions.map((question) => "QuestionCard")
          : " No result Found"}
        <NoResult
          title=" There are no question to show"
          description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the  discussion. our query could be the next big thing others learn from. Get  involved! 💡"
          link="/ask-question"
          linkTitle="ask-Question"
        />
      </div>
    </>
  );
}
export default Home;
