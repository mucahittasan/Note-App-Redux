import NotesArea from "./components/NotesArea";
import NoteSide from "./components/NoteSide";

const App = () => {
  return (
    <div className="flex">
      <NoteSide />
      <NotesArea />
    </div>
  );
};

export default App;
