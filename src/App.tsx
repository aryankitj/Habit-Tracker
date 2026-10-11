import { eachDayOfInterval, endOfWeek, startOfWeek, addWeeks } from "date-fns";
import "./App.css";
import { HabitForm } from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { Header } from "./components/Header";
import { HabitProvider } from "./context/HabitProvider";
import { useEffect, useState } from "react";

function App() {
  
  const [weekOffset, setWeekOffset] = useState(0);
  const week = addWeeks(new Date(), weekOffset);
  const visibleDates = eachDayOfInterval({
      start: startOfWeek(week, { weekStartsOn: 1 }),
      end: endOfWeek(week, { weekStartsOn: 1 }),
    });

    useEffect(() => {
      function handler(){
        console.log(weekOffset);
      }
      document.addEventListener("click", handler);

      return () => document.removeEventListener("click", handler);
    }, [weekOffset]);

  return (
    <>
      <HabitProvider>
        <Header visibleDates={visibleDates} onPrev={() => setWeekOffset((prev) => prev - 1)} onNext={() => setWeekOffset((prev) => prev + 1)}/>
        <HabitForm/>
        <HabitList visibleDates={visibleDates}/>
      </HabitProvider>
    </>
  );
}

export default App;
