import React from "react";
import Form from "./Form";
import Footer from "./Footer";

const NoteSide = () => {
  return (
    <div className="bg-gray-100 text-gray-900 w-96 min-h-screen flex flex-col">
      <h2 className="text-center p-3 text-2xl font-semibold">
        Welcome to the Note App
      </h2>
      <Form />

      <Footer />
    </div>
  );
};

export default NoteSide;
