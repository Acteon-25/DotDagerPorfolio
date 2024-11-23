import Madera from "@/assets/img/madera.jpg"

const Game = () => {
  return (
    <a
      href="https://tbot.xyz/lumber/"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed top-0 right-4 w-48 h-16"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-10 bg-gray-700"></div>

      <img src={Madera} className="absolute top-10 left-0 right-0 mx-auto w-full h-10 rounded-md shadow-lg group-hover:animate-swing inset-0 "
      />
      <span className="absolute top-12 left-1/2 -translate-x-1/2 text-black text-center font-bold">
        For you
      </span>
    </a>
  );
};

export default Game;