import { useState } from "react";

const TemperatureConverter = () => {
    const [mode, changeMode] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [conversion, setConversion] = useState("ctof");
  const [result, setResult] = useState(null);

  const convertTemp = () => {
    if (temperature.trim() === "") {
      alert("Please Enter Temperature");
      return;
    }
    let temp = Number(temperature);
    if (isNaN(temp)) {
      alert("Enter a Valid Temperature");
    } else if (conversion === "ctof") {
      let f = temp * 1.8 + 32;
      setResult(`${temp} °C = ${f.toFixed(2)} °F`);
    } else {
      let c = ((temp - 32) * 5) / 9;
      setResult(`${temp}°f = ${c.toFixed(2)} °C`);
    }
  };
  const resetData = () => {
    setTemperature("");
    setConversion("ctof");
    setResult(null);
  };
  
  return (
    <div className={"min-h-screen flex justify-center items-center pt-5  " + (mode ? "bg-gray-100 text-black border-gray-300 shadow-2xl " : " bg-gray-950 text-white border-zinc-700  ")}>
      <div className={" p-8 rounded-2xl shadow-xl  w-130  relative transition-all duration-300 border-white " + (mode ? "bg-white text-black border-gray-300 shadow-xl" : "bg-black text-white  shadow-gray-50 ")}>
        <button
          className={` border rounded-4xl w-10 flex justify-center mb-5  absolute top-2 right-3  cursor-pointer  ${mode ? "bg-white text-black border-gray-300" : "bg-black text-white border-zinc-700 "}`}
          onClick={()=> changeMode(!mode)}
        >
       {mode ? " 🌙" : "☀️ "}
        </button>

        <h1 className="text-3xl font-bold text-center mb-5 ">
          🌡️Temperature Converter
        </h1>
        <input
          type="number"
          placeholder="Enter Temperature"
          className={"border w-full p-3 rounded mb-5 " + (mode ? "bg-white text-black border-gray-300 " : "bg-black text-white  border-zinc-700 ")}
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <div className="mb-5">
          <label className="block mb-2">
            <input
              type="radio"
              name="temp"
              value="ctof"
              checked={conversion === "ctof"}
              onChange={(e) => setConversion(e.target.value)}
            />
            <span className="ml-2">Celcius ➡️ fahrenheit </span>
          </label>
          <label className="block">
            <input
              type="radio"
              name="temp"
              value="ftoc"
              checked={conversion === "ftoc"}
              onChange={(e) => setConversion(e.target.value)}
            />
            <span>fahrenheit ➡️ Celcius</span>
          </label>
        </div>
        <div className="flex gap-3">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-800 text-lg font-medium cursor-pointer"
            onClick={convertTemp}
          >
            Convert
          </button>
          <button
            className="bg-red-500 text-white rounded px-4 py-2 w-full hover:bg-red-700 text-lg font-medium cursor-pointer"
            onClick={resetData}
          >
            Reset
          </button>
        </div>
        {result && (
          <div className= {"mt-7 bg-green-400 p-4 rounded text-center " + (mode ? "bg-green-100" : "bg-green-400")}>
            <h2 className="text-lg font-bold">Result</h2>
            <p className="text-lg mt-3">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default TemperatureConverter;
