import { useEffect, useState } from "react";
import { mainWord, endWord } from "./utils/words"



function App() {
  const [name, setName] = useState<string[]>([]);

  const getRandomValue = (i: number, N: number) => Math.floor(Math.random() * (N - i) + i);

  const getUniqueRandomNumbers = (MIN_VALUE: number, MAX_VALUE: number, UNIQUE_NUMBERS: number) => {
    const numbers = Array(MAX_VALUE - MIN_VALUE + 1)
      .fill(null)
      .map((_, index) => index + MIN_VALUE);
    const shuffle = [...numbers];
    shuffle.forEach(
      (_elem, i, arr, j = getRandomValue(i, arr.length)) =>
        ([arr[i], arr[j]] = [arr[j], arr[i]])
    );

    return shuffle.slice(0, UNIQUE_NUMBERS);
  };


  const generateName = () => {
    const mainName = getUniqueRandomNumbers(0, mainWord.length - 1, 2).map(x => mainWord[x]);
    let bonusName = endWord[Math.floor(Math.random() * endWord.length)];
    while (mainName.includes(bonusName)) {
      bonusName = endWord[Math.floor(Math.random() * endWord.length)];
    }
    setName([...mainName, bonusName]);
  };

  useEffect(() => {
    generateName();

  }, []);


  return (
    <>
      <div
        className="p-6 w-full h-[calc(100vh-200px)] sm:h-[80vh] bg-contain bg-center bg-no-repeat flex justify-center items-center flex-col" style={{ backgroundImage: "url('background.jpg')" }}>
        <span className="name -rotate-3 text-[#fff] text-center font-font1 text-5xl lg:text-8xl font-extrabold uppercase tracking-wider drop-shadow-80 lg:drop-shadow-81 mt-[15px] lg:mt-[0px]">
          {name.join(' ')}
        </span>
      </div>
      <div className="text-center">
        <button onClick={generateName}
          className="btn z-40 bg-[#260433] p-3 px-14 hover:drop-shadow-83 border-4 border-[#2de2e6] hover:border-pink-500 rounded-full uppercase font-bold tracking-[0.1em] text-xl text-[#2de2e6] hover:text-pink-500">generate!</button>
      </div>
    </>
  )
}

export default App
