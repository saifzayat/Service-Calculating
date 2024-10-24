export default function OutPut({ bill, Total, tip }) {
  return (
    <h3>{bill !== 0 ? `you pay $${Total} ($${bill} + $${tip} tip)` : null}</h3>
  );
}
