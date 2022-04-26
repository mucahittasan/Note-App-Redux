import { searchNotes } from "../redux/notes/noteSlice";
import { useDispatch } from "react-redux";

const Header = () => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const input = e.target.value;
    dispatch(searchNotes(input));
  }


  return (
    <form className="text-center mt-4">
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search..."
        className="bg-gray-200 placeholder:text-gray-600 w-1/3 h-8 rounded p-3 outline-none"
      />
    </form>
  );
};

export default Header;
