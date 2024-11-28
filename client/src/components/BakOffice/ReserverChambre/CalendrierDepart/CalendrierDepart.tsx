import { useState } from "react";
import "./CalendrierDepart.css";

const CalendrierDepart = () => {
  const [date, setDate] = useState<string>("2024-12-01");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div className="depart">
      <img src="public/images/logoOption/calendrier.png" alt="Depart" />
      {}
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="depart-date"
      />
      <span>{date}</span> {}
    </div>
  );
};

export default CalendrierDepart;
