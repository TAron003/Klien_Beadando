import React from 'react'

const SelectTicket = ({screening, pricings, setPricings, ticketCount, setTicketCount}) => {
    const allSeats = screening.room.rows * screening.room.seatsPerRow
    const availableSeats = allSeats - screening.bookings.length

    const handleClickInc = (i) => {
        let count = 0
        pricings.map(pricing => count += pricing.count)
        if(count < availableSeats)
        {
            const inp = document.querySelector(`#Tickets${i}`)
            const t = document.querySelector("#total")
            const tc = document.querySelector("#ticketCount")
            const st = document.querySelector(`#${pricings[i].type}Total`)
            pricings[i].count++
            inp.value++
            pricings[i].total = pricings[i].count * pricings[i].price
            ticketCount++
            let total = 0
            pricings.map(pricing => total += pricing.total)
            t.innerText = `${total} Ft`
            tc.innerText = ticketCount
            st.innerText = `${pricings[i].total} Ft`
            setPricings(pricings)
            setTicketCount(ticketCount)
        }
    }

    const handleClickDec = (i) => {
        let count = 0
        pricings.map(pricing => count += pricing.count)
        if(count > 0)
        {
            const inp = document.querySelector(`#Tickets${i}`)
            const t = document.querySelector("#total")
            const tc = document.querySelector("#ticketCount")
            const st = document.querySelector(`#${pricings[i].type}Total`)
            pricings[i].count--
            inp.value--
            pricings[i].total = pricings[i].count * pricings[i].price
            ticketCount--
            let total = 0
            pricings.map(pricing => total += pricing.total)
            t.innerText = `${total} Ft`
            tc.innerText = ticketCount
            st.innerText = `${pricings[i].total} Ft`
            setPricings(pricings)
            setTicketCount(ticketCount)
        }
    }

    return (
        <>
            {
                ticketCount == availableSeats ? 
                <aside className="text-sm text-red-600 text-left">
                    Screening's maximum capacity is reached
                </aside>
                : <></> 
            }
            {
                pricings.map((pricing, i) => 
                    <form key={i} className="grid grid-cols-3">
                        <label htmlFor={`Tickets${i}`} className="grid grid-cols-1 mt-1 mb-1 ml-2.5">
                            <h3 className="text-lg text-left">{pricing.type}</h3>
                            <aside className="text-sm text-left">{`${pricing.price} Ft/db`}</aside>
                        </label>
                        <div className="relative flex items-center self-center m-auto mt-1 mb-1">
                            <button type="button" id="decrement-button" onClick={() => handleClickDec(i)} className="shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <input type="text" id={`Tickets${i}`} className="shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder={pricing.count} value={pricing.count} required onChange={() => handleChange(i)}/>
                            <button type="button" id="increment-button" onClick={() => handleClickInc(i)} className="shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                        <p id={`${pricing.type}Total`} className="text-right m-auto mr-2.5">0 Ft</p>
                    </form>
                )
            }
            <section className="grid grid-cols-3">
                <h3 className="text-lg text-left mt-1 mb-1 ml-2.5">Total: </h3>
                <p id="ticketCount" className="text-center m-auto">0</p>
                <p id="total" className="text-right m-auto mr-2.5">0 Ft</p>
            </section>
        </>
    )
}

export default SelectTicket
