import '../Stlyes/BankBalance.css'

export default function BankBalance({ funds }) {
  return (
    <section className="bankBalanceDisplay">
      <h2 className="bankBalanceText">£{funds}</h2>
    </section>
  );
}
