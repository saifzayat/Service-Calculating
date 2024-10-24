export default function Bill({ bill, setBill }) {
  return (
    <div>
      <label>how much was the bill ? </label>
      <input
        type="text"
        value={bill}
        placeholder="bill value"
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
