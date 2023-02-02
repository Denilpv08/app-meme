import html2canvas from "html2canvas";
import { useState } from "react";
import "./App.css";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const handleLinea1 = (e) => {
    setLinea1(e.target.value);
  };

  const handleLinea2 = (e) => {
    setLinea2(e.target.value);
  };

  const handleImagen = (e) => {
    setImagen(e.target.value);
  };

  const handleClick = (e) => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <select onChange={handleImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      <input onChange={handleLinea1} type="text" placeholder="Linea 1" />
      <br />
      <input onChange={handleLinea2} type="text" placeholder="Linea 2" />
      <br />
      <button onClick={handleClick}>Exportar</button>
      <div className="meme" id="meme">
        <span>{linea1}</span>
        <br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>
    </div>
  );
}

export default App;
