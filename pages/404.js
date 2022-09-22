import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-white dark:bg-darkGray h-screen flex justify-center items-center w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-white">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something&#39;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&#39;t find that page. You&#39;ll find lots to explore
            on the home page.{" "}
          </p>
          <Link href="/">
            <a className="flex justify-center items-center text-white bg-[#fc5185] border-0 py-3 px-20 focus:outline-none hover:bg-[#ff3f79] rounded-full text-lg font-extrabold my-10 md:w-2/3 mx-auto">
              Back to Homepage
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
