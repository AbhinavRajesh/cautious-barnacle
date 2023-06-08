import { useEffect, useState } from "react";

interface ILoader {
  title?: string;
}

const Loader = ({ title = "Loading" }: ILoader) => {
  const [dots, setDots] = useState<string>(".");

  useEffect(() => {
    const loop = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return ".";
        else return prev + ".";
      });
    }, 500);

    return () => clearInterval(loop);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1 className="text-xl md:text-4xl font-bold text-black text-center">
        {title}
        {dots}
      </h1>
    </div>
  );
};

export default Loader;
