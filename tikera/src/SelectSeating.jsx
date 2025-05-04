import React from 'react'
import { useState } from 'react'

const SelectSeating = ({screening, seats, setSeats, ticketCount, selectedSeats, setSelectedSeats}) => {
    const rows = screening.room.rows
    const seatsPerRow = screening.room.seatsPerRow

    const handleClick = (i, j) => {
        const btn = document.querySelector(`#seat${i * rows + j}`)
        if(seats[i][j] == 0 && selectedSeats < ticketCount)
        {
            console.log(seats[i][j])
            seats[i][j] = 1
            console.log(seats[i][j])
            btn.classList.remove("bg-green-600")
            btn.classList.add("bg-cyan-800")
            selectedSeats++
            setSelectedSeats(selectedSeats)
            setSeats(seats)
        }
        else if(seats[i][j] == 1)
        {
            console.log(seats[i][j])
            seats[i][j] = 0
            console.log(seats[i][j])
            btn.classList.remove("bg-cyan-800")
            btn.classList.add("bg-green-600")
            selectedSeats--
            setSelectedSeats(selectedSeats)
            setSeats(seats)
        }
        console.log(seats[i][j])
        console.log(selectedSeats)
        console.log(seats)
    }

    return (
        <div className={seatsPerRow == 9 ? "grid grid-cols-9 w-fit h-fit m-auto mt-2.5" : "grid grid-cols-8 w-fit h-fit m-auto mt-2.5"}>
            {
                seats.map((row, i) => 
                    row.map((seat, j) => 
                        <button key={i * rows + j} id={`seat${i * rows + j}`} className={seat == 2 ? "bg-green-950 p-0.5 m-1 rounded-md" : "bg-green-600  p-0.5 m-1 rounded-md"} onClick={() => handleClick(i, j)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-armchair-icon lucide-armchair"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
                        </button>
                    )
                )
            }
        </div>
    )
}

export default SelectSeating
