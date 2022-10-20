import '../Stlyes/Calendar.css'

export default function Calendar({ month, setMonth }) {
  return (
    <section className="calendarDisplay">
      <h2 className="calendarText">{month}</h2>
    </section>
  );
}
