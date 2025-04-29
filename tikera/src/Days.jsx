import React from 'react'

function Days () {
    const d = new Date()
    const dayID = d.getDay() == 0 ? "day6" : `day${d.getDay() - 1}`
    const days = [
        {
            id: "day0",
            day: "Hétfő"
        },
        {
            id: "day1",
            day: "Kedd"
        },
        {
            id: "day2",
            day: "Szerda"
        },
        {
            id: "day3",
            day: "Csütörtök"
        },
        {
            id: "day4",
            day: "Péntek"
        },
        {
            id: "day5",
            day: "Szombat"
        },
        {
            id: "day6",
            day: "Vasárnap"
        }
    ]
    console.log(dayID)
    return (
        <>
            <nav>
                {days.map((day, i) => 
                <button key={i} id={day.id} className={day.id == dayID ? "bg-emerald-900 hover:bg-emerald-950 p-2.5 m-2.5 rounded-xl active" : "bg-emerald-700 hover:bg-emerald-900 p-2.5 m-2.5 rounded-xl"}>
                    {day.day}
                </button>)}
            </nav>
        </>
    )
}

export default Days