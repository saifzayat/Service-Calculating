export default function Reset({ bill, setFSB, setMSB, setBill }) {
  function handelReset() {
    setBill(0);
    setMSB(0);
    setFSB(0);
  }
  return (
    <div>
      {bill !== 0 ? <button onClick={handelReset}>Reset</button> : null}
    </div>
  );
}
