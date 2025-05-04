import React from 'react'
import { useState } from 'react'
import SelectTicket from './SelectTicket'
import SelectSeating from './SelectSeating'
import ScreeningDetails from './ScreeningDetails'
import FinalizeBooking from './FinalizeBooking'

const SelectedMovie = ({movie, img, day, selectedScreening, setSelectedScreening}) => {
    const screenings = movie.screenings.filter(screening => screening.weekday == day)
    screenings.sort((a, b) => a.start_time > b.start_time ? 1 : -1)

    const ticketPricings = [
        {
            type: "Adult",
            price: 2500,
            count: 0,
            total: 0
        },
        {
            type: "Student",
            price: 2000,
            count: 0,
            total: 0
        },
        {
            type: "Pensioner",
            price: 1800,
            count: 0,
            total: 0
        }
    ]
    
    const [ticketCount, setTicketCount] = useState(0)
    const [selectedSeats, setSelectedSeats] = useState(0)
    const [pricings, setPricings] = useState(ticketPricings)
    const [seats, setSeats] = useState([])

    const handleClick = (i) => {
        if(screenings[i].bookings.length < screenings[i].room.rows * screenings[i].room.seatsPerRow)
        {
            const btn = document.querySelector(`#screening${i}`)
            if(selectedScreening != -1)
            {
                const prevBtn = document.querySelector(`#screening${selectedScreening}`)
                prevBtn.classList.remove("bg-cyan-800")
                prevBtn.classList.add("bg-green-600")
            }
            selectedScreening = -1
            setSelectedScreening(selectedScreening)
            selectedScreening = i
            setSelectedScreening(selectedScreening)
            btn.classList.remove("bg-green-600")
            btn.classList.add("bg-cyan-800")
            const bookings = screenings[selectedScreening].bookings
            const rows = screenings[selectedScreening].room.rows
            const seatsPerRow = screenings[selectedScreening].room.seatsPerRow
            const seating = Array.from({length: rows}, () => Array.from({length: seatsPerRow}, () => 0))

            for(let r = 0; r < rows; r++)
            {
                for(let s = 0; s < seatsPerRow; s++)
                {
                    if(bookings.filter(booking => booking.row == r + 1 && booking.seat == s + 1).length != 0)
                        seating[r][s] = 2
                }
            }

            setSeats(seating)
            setPricings(ticketPricings)
            setTicketCount(0)
            setSelectedSeats(0)
        }
    }

    return (
        <>
            <div className="grid grid-cols-2 p-2.5 m-2.5 bg-slate-700 rounded-xl">
                <img src={img} className="rounded-xl h-100 m-auto mt-2.5 mb-2.5"/>
                <div className="grid grid-cols-1 text-left h-fit">
                    <h2 className="text-2xl">{movie.title}</h2>
                    <aside>{movie.release_year} | {movie.genre} | {movie.duration} minutes</aside>
                    <p className="pt-2.5 pb-2.5">
                        {movie.description}
                    </p>
                    <div className="grid grid-cols-5">
                        {screenings.map((screening, i) => 
                            <button key={i} id={`screening${i}`} onClick={() => handleClick(i)} className={screening.bookings.length < screening.room.rows * screening.room.seatsPerRow ? "bg-green-600 rounded-xl p-1 m-auto mb-2.5 w-15" : "bg-green-950 rounded-xl p-1 m-auto mb-2.5 w-15"}>
                                {screening.start_time}
                            </button>
                        )}
                    </div>
                    {
                        selectedScreening == -1 ? <></> :
                        <SelectTicket screening={screenings[selectedScreening]} pricings={pricings} setPricings={setPricings} ticketCount={ticketCount} setTicketCount={setTicketCount}/>
                    }
                </div>
            </div>
            {
                selectedScreening == -1 ? <></> :
                <div className="grid grid-cols-2 w-fit h-fit p-1 pr-2.5 m-auto mt-2.5 mb-2.5 bg-slate-700 rounded-xl">
                    <div className="grid grid-cols-1 h-fit p-1">
                        <ScreeningDetails movie={movie} screening={screenings[selectedScreening]}/>
                        <FinalizeBooking ticketCount={ticketCount} selectedSeats={selectedSeats} pricings={pricings} seats={seats}/>
                    </div>
                    <SelectSeating screening={screenings[selectedScreening]} seats={seats} setSeats={setSeats} ticketCount={ticketCount} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
                </div>
            }
        </>
    )
}

export default SelectedMovie
