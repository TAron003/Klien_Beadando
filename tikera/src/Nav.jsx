import React from 'react'

const Nav = ({selectedDay, setSelectedDay, setSelectedMovie, setSelectedScreening, dayID, days}) => {
    const handleClick = (i) => {
        setSelectedDay(i)
        setSelectedMovie(-1)
        setSelectedScreening(-1)
    }
    return (
        <>
            <nav className="grid grid-cols-8">
                <button onClick={() => handleClick(dayID)}>
                    <h1 className="text-emerald-500 text-4xl">
                        TIKERA
                    </h1>
                </button>
                {days.map((day, i) => 
                <button key={i} id={`day${i}`} onClick={() => handleClick(i)} className={i == selectedDay ? "bg-teal-950 p-2.5 m-auto mt-2.5 mb-2.5 rounded-xl w-30" : "bg-teal-900 hover:bg-teal-950 p-2.5 m-auto mt-2.5 mb-2.5 rounded-xl w-30"}>
                    {day}
                </button>)}
            </nav>
        </>
    )
}

export default Nav