import { useState } from "react";
import "./CalendrierArriver.css";

const CalendrierArriver = () => {
  const [date, setDate] = useState<string>("2024-11-29");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div className="arriver">
      <img src="/images/logoOption/calendrier.png" alt="Arriver" />
      {}
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="arriver-date"
      />
      <span>{date}</span> {}
    </div>
  );
};

export default CalendrierArriver;
