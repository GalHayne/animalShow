import { useState } from 'react'
import bird from './animals/bird.svg'
import cat from './animals/cat.svg'
import cow from './animals/cow.svg'
import dog from './animals/dog.svg'
import gator from './animals/gator.svg'
import heart from './animals/heart.svg'
import horse from './animals/horse.svg'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse,
}


function AnimalShow({ type }) {

    const [clicks, setClicksCount] = useState(1);

    const handleClick = () => {
        setClicksCount(clicks + 1);
    }

    return (
        <div onClick={handleClick}>
            <img className='animalImg' alt="animal" src={svgMap[type]} />
            <img style={{ width: clicks * 10 + 'px' }} alt="heart" src={heart} />
        </div>
    )
}

export default AnimalShow;