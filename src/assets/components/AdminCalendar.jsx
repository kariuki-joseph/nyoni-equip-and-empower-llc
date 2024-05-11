import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../styles/AdminCalendar.css';

export default function AdminCalendar() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div className="flex justify-center">
      <Calendar
        className={"w"}
        onChange={onChange}
        defaultView="month"
        calendarType="gregory"
        value={value}
        tileClassName={({ activeStartDate, date, view }) =>
          view === "month" && date.getDate() === value.getDate() && date.getMonth() === value.getMonth() && date.getFullYear() === value.getFullYear()
            ? "react-calendar__tile--active"
            : null
        }
        tileActiveStartDate={value}
        navigationLabel={({ date, view, label }) =>
          view === "century" || view === "decade" || view === "year" ? null : label
        }
      />
    </div>
  );
}
