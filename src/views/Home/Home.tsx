import CharacterList from "../../components/Characters/CharacterList";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-800 h-full w-screen flex flex-col items-center justify-center">
      <Navbar />
      <CharacterList />
    </div>
  );
};
export default Home;
