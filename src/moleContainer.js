import { useEffect, useState } from 'react'
import Mole from './mole'
import EmptySlot from './emptySlot'

const MoleContainer = (props) => {
    let [displayMole, setDisplayMole] = useState(true);

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    return (
        <div className='moleContainer'>
            {displayMole ? <Mole handleClick={handleClick} setDisplayMole={setDisplayMole} /> : <EmptySlot toggle={setDisplayMole} />}
        </div>
    )
}
export default MoleContainer