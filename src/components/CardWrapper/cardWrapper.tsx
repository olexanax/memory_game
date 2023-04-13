import nextId from "react-id-generator";
import { useState, useEffect, useMemo } from "react";
import "./cardWrapper.css";
import Card from "../Card/card";

export interface ICard {
    src: string;
    isOpen: boolean;
    id: string;
    alt: string;
}

const cardsData: ICard[] = [
    {
        src: "https://www.svgrepo.com/show/401099/american-football.svg",
        isOpen: false,
        id: nextId(),
        alt: "ball",
    },
    {
        src: "https://www.svgrepo.com/show/401094/alien.svg",
        isOpen: false,
        id: nextId(),
        alt: "ufo",
    },
    {
        src: "https://www.svgrepo.com/show/395768/anger-symbol.svg",
        isOpen: false,
        id: nextId(),
        alt: "redLine",
    },

    {
        src: "https://www.svgrepo.com/show/401099/american-football.svg",
        isOpen: false,
        id: nextId(),
        alt: "ball",
    },
    {
        src: "https://www.svgrepo.com/show/401094/alien.svg",
        isOpen: false,
        id: nextId(),
        alt: "ufo",
    },
    {
        src: "https://www.svgrepo.com/show/395768/anger-symbol.svg",
        isOpen: false,
        id: nextId(),
        alt: "redLine",
    },
    {
        src: "https://www.svgrepo.com/show/395769/ant.svg",
        isOpen: false,
        id: nextId(),
        alt: "ant",
    },
    {
        src: "https://www.svgrepo.com/show/395769/ant.svg",
        isOpen: false,
        id: nextId(),
        alt: "ant",
    },
    {
        src: "https://www.svgrepo.com/show/395768/anger-symbol.svg",
        isOpen: false,
        id: nextId(),
        alt: "redLine",
    },
    {
        src: "https://www.svgrepo.com/show/395768/anger-symbol.svg",
        isOpen: false,
        id: nextId(),
        alt: "redLine",
    },
    {
        src: "https://www.svgrepo.com/show/395769/ant.svg",
        isOpen: false,
        id: nextId(),
        alt: "ant",
    },
    {
        src: "https://www.svgrepo.com/show/395769/ant.svg",
        isOpen: false,
        id: nextId(),
        alt: "ant",
    },
    {
        src: "https://www.svgrepo.com/show/395769/ant.svg",
        isOpen: false,
        id: nextId(),
        alt: "ant",
    },
    {
        src: "https://www.svgrepo.com/show/401099/american-football.svg",
        isOpen: false,
        id: nextId(),
        alt: "ball",
    },
    {
        src: "https://www.svgrepo.com/show/395769/ant.svg",
        isOpen: false,
        id: nextId(),
        alt: "ant",
    },
    {
        src: "https://www.svgrepo.com/show/401099/american-football.svg",
        isOpen: false,
        id: nextId(),
        alt: "ball",
    },
    {
        src: "https://www.svgrepo.com/show/401094/alien.svg",
        isOpen: false,
        id: nextId(),
        alt: "ufo",
    },
    {
        src: "https://www.svgrepo.com/show/401094/alien.svg",
        isOpen: false,
        id: nextId(),
        alt: "ufo",
    },
];

const CardWrapper: React.FC = () => {
    const [dificalty, setDificalty] = useState<1 | 2 | 3>(1);
    const [data, setData] = useState(cardsData);
    const [currentData, setCurrentData] = useState(cardsData);
    const [firstChoise, setFirstChoise] = useState<ICard | undefined>(
        undefined
    );

    useEffect(() => {
        if (currentData.every((card) => card.isOpen)) {
            console.log("win");
            setTimeout(() => {
                setCurrentData((data) =>
                    shuffle(data.map((card) => ({ ...card, isOpen: false })))
                );
                alert("You win");
            }, 1000);
        }
    }, [currentData]);

    useEffect(() => {
        setCurrentData(shuffle(data.slice(0, 6 * dificalty)));
    }, [dificalty]);

    function shuffle(array: ICard[]) {
        return [...array].sort(() => Math.random() - 0.5);
    }

    const content = currentData.map((card) => {
        return (
            <Card
                src={card.src}
                key={card.id}
                id={card.id}
                alt={card.alt}
                isOpen={card.isOpen}
                setData={setCurrentData}
                firstChoise={firstChoise}
                setFirstChoise={setFirstChoise}
            />
        );
    });
    return (
        <div className="cardWrapper">
            {content}
            <div className="dificalty_block">
                <p className="p_wrapper">
                    <p>D</p>
                    <p>I</p>
                    <p>F</p>
                    <p>F</p>
                    <p>I</p>
                    <p>C</p>
                    <p>U</p>
                    <p>L</p>
                    <p>T</p>
                    <p>Y</p>
                </p>
                <select
                    className="dificalty_select"
                    onChange={(e) => setDificalty(+e.target.value as 1 | 2 | 3)}
                    name="dificalty"
                    id="pet-select"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        </div>
    );
};

export default CardWrapper;
