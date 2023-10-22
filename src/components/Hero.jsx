import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img src={logo} alt="sumz logo" />

        <button
          type="butoon"
          onClick={() => window.open("https://github.com/Suhelkhan12")}
        >
          Github
        </button>
      </nav>
    </header>
  );
};

export default Hero;
