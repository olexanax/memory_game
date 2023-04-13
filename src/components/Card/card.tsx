import "./card.css";
import { ICard } from "../CardWrapper/cardWrapper";

interface CardProps extends ICard {
    firstChoise: undefined | ICard;
    setData: React.Dispatch<
        React.SetStateAction<
            { src: string; isOpen: boolean; id: string; alt: string }[]
        >
    >;
    setFirstChoise: React.Dispatch<React.SetStateAction<ICard | undefined>>;
}

const Card: React.FC<CardProps> = ({
    src,
    isOpen,
    id,
    alt,
    setData,
    firstChoise,
    setFirstChoise,
}) => {
    const openCard = () => {
        setData((data) => {
            const newData = data.map((card) =>
                card.id === id ? { ...card, isOpen: !card.isOpen } : card
            );
            return newData;
        });
    };

    const onClick = () => {
        if (!isOpen) {
            if (!firstChoise) {
                setFirstChoise({ src, id, isOpen, alt });
                openCard();
            } else if (firstChoise && firstChoise.alt === alt) {
                openCard();
                setFirstChoise(undefined);
            } else {
                setFirstChoise(undefined);
                openCard();
                setTimeout(() => {
                    setData((data) => {
                        return data.map((card) =>
                            card.id === id || card.id === firstChoise.id
                                ? { ...card, isOpen: !card.isOpen }
                                : card
                        );
                    });
                }, 500);
            }
        }

        //if first choise
    };
    return (
        <div className="flip-card" onClick={onClick}>
            <div
                className="flip-card-inner"
                style={!isOpen ? undefined : { transform: "rotateY(180deg" }}
            >
                <div className="flip-card-front">
                    <img
                        src="https://www.creativefabrica.com/wp-content/uploads/2021/07/13/Mahjong-svg-cut-file-Graphics-14637735-1.png"
                        alt=""
                        style={{ height: "180px", width: "180px" }}
                    />
                </div>
                <div className="flip-card-back">
                    <img
                        src={src}
                        alt={alt}
                        style={{ height: "200px", width: "200px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
