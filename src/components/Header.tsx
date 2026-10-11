import { isToday } from "date-fns";
import { Button } from "./Button";
import { useHabits } from "../context/useHabits";
import { format } from "date-fns";

type HeaderProps = {
  visibleDates: Date[];
  onPrev: () => void;
  onNext: () => void;
};

export function Header({visibleDates, onPrev, onNext}: HeaderProps) {
  const {habits} = useHabits();

  const doneToday = habits.filter((habit) => habit.completions.some((c) => isToday(c))).length;
  const totalToday = habits.length;

  const weekRange = `${format(visibleDates[0], "MMM d")} - ${format(visibleDates.at(-1)!, "MMM d")}`;

  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold"> Habit Tracker</h1>
        <span className="text-zinc-400 text-sm"> {doneToday}/{totalToday} done today</span>
      </div>

      <div className='flex flex-col gap-1 items-end'>
        <span className="text-zinc-400 text-sm">{weekRange}</span>
        <div className='flex items-center gap-3'>
          <Button onClick={onPrev}>Prev</Button>
          <Button onClick={onNext} disabled={visibleDates.some((date) => isToday(date))}>Next</Button>
        </div>
      </div>
    </header>
  )
}