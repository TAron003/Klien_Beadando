import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Nav from'./Nav.jsx'
import Movies from './Movies.jsx'
import SelectedMovie from './SelectedMovie.jsx'

import movies from './assets/movies.json'

import dune from './assets/images/dune.jpg'
import poorThings from './assets/images/poor-things.jpg'
import oppenheimer from './assets/images/oppenheimer.jpg'
import godzillaKong from './assets/images/godzilla-kong.jpg'
import civilWar from './assets/images/civil-war.jpg'
import ghostbusters from './assets/images/ghostbusters.jpg'
import insideOut2 from './assets/images/inside-out-2.jpg'
import kungFuPanda4 from './assets/images/kung-fu-panda-4.jpg'


function App() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const d = new Date()
    const dayID = d.getDay() == 0 ? 6 : d.getDay() - 1
    const [selectedDay, setSelectedDay] = useState(dayID)
    const day = days[selectedDay]
    const images = [dune, poorThings, oppenheimer, godzillaKong, civilWar, ghostbusters, insideOut2, kungFuPanda4]
    const [selectedMovie, setSelectedMovie] = useState(-1)
    const [selectedScreening, setSelectedScreening] = useState(-1)

    return (
        <>
            <Nav selectedDay={selectedDay} setSelectedDay={setSelectedDay} setSelectedScreening={setSelectedScreening} setSelectedMovie={setSelectedMovie} dayID={dayID} days={days}/>
            <div className="grid grid-cols-2 rounded-xl">
                <Movies movies={movies} day={day} images={images} setSelectedMovie={setSelectedMovie} setSelectedScreening={setSelectedScreening}/>
                {
                    selectedMovie == -1 ? <></> : 
                    <div className="grid grid-cols-1 h-fit">
                        <SelectedMovie movie={movies[selectedMovie]} img={images[selectedMovie]} day={day} selectedScreening={selectedScreening} setSelectedScreening={setSelectedScreening}/>
                    </div>
                }
                
            </div>
        </>
    )
}

export default App