import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 text-center">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-400 max-w-md">
        Oops! The page you're looking for has vanished into the cinematic void.
        Let’s guide you back to the spotlight.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full font-semibold"
      >
        Go Home
      </Link>
    </section>
  );
};

export default Error;
