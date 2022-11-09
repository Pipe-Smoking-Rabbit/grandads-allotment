import '../CSS/BankBalance.css'

export default function BankBalance({ funds }) {
  return (
    <section className="BankBalanceDisplay">
      <h2 className="BankBalanceText">£{funds}</h2>
    </section>
  );
}
