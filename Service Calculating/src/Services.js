export default function Services({ children, MSB, setMSB }) {
  return (
    <div>
      <label>{children}</label>
      <select value={MSB} onChange={(e) => setMSB(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>it was okay(%5)</option>
        <option value={10}>it was good (%10)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
