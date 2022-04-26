import React from "react";

const Header = () => {
  return (
    <form className="text-center mt-4">
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-200 placeholder:text-gray-600 w-1/3 h-8 rounded p-3 outline-none"
      />
    </form>
  );
};

export default Header;
