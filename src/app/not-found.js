"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="lg:mt-[var(--desktopHeaderHeight)] p-3 text-center">
      <section className="flex flex-col gap-5 p-3 py-32">
        <h1 className="text-3xl font-medium lg:font-normal lg:text-5xl">
          404 Page Not Found
        </h1>
        <div className="flex flex-col gap-5 justify-center items-center">
          <p>The requested page cannot be found.</p>
          <Link
            href={`/`}
            className="bg-primaryGreen hover:bg-secondaryGreen transition-colors duration-200 ease-in-out rounded text-primaryLight px-2 py-1 font-medium"
          >
            Go home
          </Link>
        </div>
      </section>
    </div>
  );
}
