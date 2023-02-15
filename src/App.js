import { useState } from "react";
import AnimalShow from "./AnimalShow";


function getRandomAnimal() {
    const animals = ['bird', 'cat', 'dog', 'cow', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {

    // const [count, setCount] = useState(0);
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
        // setCount(count + 1);
    };

    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })



    return (
        <div>
            <button onClick={handleClick}>
                Add Animal
            </button>
            <div className="animalsContainer">{renderAnimals}</div>
        </div>
    )
}

export default App;