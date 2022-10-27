import '../Stlyes/Calendar.css'

export default function Calendar({ month, setMonth }) {
  return (
    <section className="CalendarDisplay">
      <h2 className="CalendarText">{month}</h2>
    </section>
  );
}
