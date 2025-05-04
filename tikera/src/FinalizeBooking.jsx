import React from 'react'

const FinalizeBooking = ({ticketCount, selectedSeats, pricings, seats}) => {
    const tickets = pricings.filter(pricing => pricing.count > 0)
    const selected = []
    for(let i = 0; i < seats.length; i++)
    {
        for(let j = 0; j < seats[i].length; j++)
        {
            if(seats[i][j] == 1)
                selected.push([`Row ${i + 1} Seat ${j + 1}`])
        }
    }
    let total = 0
    pricings.map(pricing => total += pricing.count * pricing.price)

    return (
        <>
            {
                tickets.map((ticket, i) =>
                    <section key={i} className="grid grid-cols-3">
                        <h3 className="text-lg text-left mt-1 mb-1 ml-2.5">{ticket.type}</h3>
                        <p className="text-md text-center m-auto">{ticket.count}</p>
                        <p className="text-md text-right m-auto mr-2.5">{ticket.total} Ft</p>
                    </section>
                )
            }
            {
                ticketCount == 0 ? <></> :
                <section className="grid grid-cols-3">
                    <h3 className="text-lg text-left mt-1 mb-1 ml-2.5">Total</h3>
                    <p className="text-md text-center m-auto">{ticketCount}</p>
                    <p className="text-md text-right m-auto mr-2.5">{total} Ft</p>
                </section>
            }
            {
                selectedSeats == 0 ? <></> :
                <>
                    <h3 className="text-lg text-left mt-1 mb-1 ml-2.5">Seats</h3>
                    <ul className="text-md text-left ml-2.5">
                        {
                            selected.map((seat, i) => 
                                <li key={i} className="mt-1 mb-1 ml-2.5">{seat}</li>
                            )
                        }
                    </ul>
                </>
            }
            {
                selectedSeats < ticketCount || ticketCount == 0 ? <></> :
                <button className="bg-cyan-800 rounded-xl m-auto mt-2.5 p-2.5 text-center">Finalize booking</button>
            }
        </>
        
    )
}

export default FinalizeBooking
