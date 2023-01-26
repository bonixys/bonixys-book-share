import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <section className="bg-indigo-400 dark:bg-indigo-900 text-white dark:text-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold capitalize lg:text-4xl">How it works</h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img className="object-cover w-full lg:w-1/2 rounded-xl h-72 lg:h-96 -ml-10" src="/hero-library.jpg" alt="" />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6  text-left">
            <ul>
              <li>1. Signup</li>
              <li>2. List your book and let others borrow it</li>
              <li>3. You approve and the person now can read it</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
