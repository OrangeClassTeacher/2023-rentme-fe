export default function BudgetDate(): JSX.Element {
  const month = new Date().toLocaleString("en-en", { month: "long" });
  const year = new Date().getFullYear();
  const day = new Date().toLocaleString("de-de", { day: "2-digit" });

  return (
    <div>
      {month} {day} {year}
    </div>
  );
}
