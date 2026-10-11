import { type SubmitEvent,   useState } from "react";
import { Button } from "./Button";
import { useHabits } from "../context/useHabits";


export function HabitForm(){
    const [name, setName] = useState("");
    const {addHabit} = useHabits()
    
    function handleSubmit(e: SubmitEvent){
        e.preventDefault();
        if(name.trim() === "") return
        setName("");
        addHabit(name);
    }

  return(
    <form action="POST" className="flex gap-2" onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter a new habit..." className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500" />
        <Button className="rounded-lg px-4 py-2 font-medium">Add habit</Button>
    </form>
  )
}