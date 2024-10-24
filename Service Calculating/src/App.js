import { useState } from "react";
import "./styles.css";
import Reset from "./Reset";
import OutPut from "./OutPut";
import Services from "./Services";
import Bill from "./Bill";
export default function App() {
  return (
    <div>
      <Container />
    </div>
  );
}
function Container() {
  const [bill, setBill] = useState(0);
  const [MSB, setMSB] = useState(0);
  const [FSB, setFSB] = useState(0);
  const tip = bill * ((MSB + FSB) / 2 / 100);
  const Total = bill + tip;
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Services MSB={MSB} setMSB={setMSB}>
        how did you like you service ?
      </Services>
      <Services MSB={FSB} setMSB={setFSB}>
        how did like your Friend like the service ?
      </Services>
      <Reset bill={bill} setBill={setBill} setFSB={setFSB} setMSB={setMSB} />
      <OutPut bill={bill} Total={Total} tip={tip} />
    </div>
  );
}
