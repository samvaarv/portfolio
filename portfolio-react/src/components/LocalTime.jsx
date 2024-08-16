import React, { useState, useEffect } from "react";

function LocalTime() {
  const [time, setTime] = useState("");

  // Function to format the time
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const isAm = hours < 12;

    // Convert 24-hour time to 12-hour time
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const amPm = isAm ? "AM" : "PM";

    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  };

  // Function to get local time with time zone
  const getLocalTime = () => {
    const date = new Date();
    const localTime = formatTime(date);
    const timeZoneOffset = -date.getTimezoneOffset() / 60;
    const gmtOffset = `GMT${
      timeZoneOffset >= 0 ? `+${timeZoneOffset}` : timeZoneOffset
    }`;

    return `${localTime} ${gmtOffset}`;
  };

  useEffect(() => {
    const updateTime = () => {
      setTime(getLocalTime());
    };

    // Initial time set
    updateTime();

    // Update time every minute
    const intervalId = setInterval(updateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="footer-date">
      <span>LOCAL TIME</span>
      <span>{time}</span>
    </div>
  );
}

export default LocalTime;
