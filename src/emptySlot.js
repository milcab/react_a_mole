import { useEffect } from "react";
import molehill from './molehill.png'

const EmptySlot = (props) => {
    useEffect(() => {
        let Seconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, Seconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '20vw' }} src={molehill} />
        </div>
    )
}

export default EmptySlot