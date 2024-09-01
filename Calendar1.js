import React, { useState } from 'react';

export default function Calendar1() {
  // Initialize state with current date
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currMonth, setCurrMonth] = useState(currentDate.getMonth());
  const [currYear, setCurrYear] = useState(currentDate.getFullYear());

  // Array of month names
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  // Function to render calendar days
  const renderCalendar = () => {
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= lastDateOfMonth; i++) {
      days.push(i);
    }
    return days;
  };

  // Event handler for changing the month
  const changeMonth = (direction) => {
    setCurrMonth((prevMonth) => {
      let newMonth = prevMonth + (direction === 'prev' ? -1 : 1);
      let newYear = currYear;
      if (newMonth < 0) {
        newMonth = 11; // December
        newYear--;
      }
      if (newMonth > 11) {
        newMonth = 0; // January
        newYear++;
      }
      setCurrMonth(newMonth);
      setCurrYear(newYear);
      return newMonth;
    });
  };

  // Get current month and year text
  const currentDateText = `${months[currMonth]} ${currYear}`;

  return (
    <div>
      <div className="wrapper">
        <header>
          <p className="current-date">{currentDateText}</p>
          <div className="icons">
            <span id="prev" onClick={() => changeMonth('prev')}>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span id="next" onClick={() => changeMonth('next')}>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </header>
        <div className="calendar">
          <ul className="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tues</li>
            <li>Wed</li>
            <li>Thurs</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="days">
            {renderCalendar().map(day => (
              <li key={day}>{day}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
