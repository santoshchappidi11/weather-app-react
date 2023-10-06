import React, { useEffect, useState } from "react";

const useDate = () => {
  const locale = "en";
  const [todayDate, setTodayDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTodayDate(new Date());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = todayDate.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${todayDate.getDate()}, ${todayDate.toLocaleDateString(
    locale,
    { month: "long" }
  )}\n\n`;
  const time = todayDate.toLocaleDateString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return { date, time };
};

export default useDate;
