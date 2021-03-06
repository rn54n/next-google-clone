import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  const maxResults = 10;

  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
      {startIndex >= maxResults && (
        <>
          <Link
            href={`/search?term=${router.query.term}&start=${
              startIndex - maxResults
            }`}
          >
            <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
              <ChevronLeftIcon className="h-5" />
              <p>Previous</p>
            </div>
          </Link>
        </>
      )}

      <Link
        href={`/search?term=${router.query.term}&start=${
          startIndex + maxResults
        }`}
      >
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
