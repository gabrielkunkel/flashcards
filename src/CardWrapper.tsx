import * as React from 'react';
import collection from './Models/collection';
import Card from './Models/card';
import CurrentCard from './CurrentCard';

interface ICardWrapperProps {
    activeCollection: collection
}

const initialCard: Card = {
    id: 0,
    word: "Vocabulary word loading...",
    definition: "Vocabulary definition loading..."
  }

const CardWrapper: React.FunctionComponent<ICardWrapperProps> = (props): JSX.Element => {
    const [currentCard, setCurrentCard] = React.useState<Card>(initialCard);

    React.useEffect(() => {
        setCurrentCard(props.activeCollection.cards[0]);
      }, [props.activeCollection.cards])
    
    const nextCard = (e: React.MouseEvent): void => {
        e.preventDefault();
        if(props.activeCollection.cards[currentCard.id]) {
            setCurrentCard(props.activeCollection.cards[currentCard.id]);
        }
    }

    const previousCard = (e: React.MouseEvent): void => {
        e.preventDefault();
        if(props.activeCollection.cards[currentCard.id-2]) {
            setCurrentCard(props.activeCollection.cards[currentCard.id-2]);
        }
    }

    const CardSwitch = (): JSX.Element => {
        return(<div>
            <button onClick={previousCard}>Previous</button>
            <button onClick={nextCard}>Next</button>
        </div>)
    }

    const CardCount = (): JSX.Element => {
        return (<div>
            {currentCard.id} / {props.activeCollection.cards.length}
        </div>)
    }

  return (
    <div>
        <CardCount />
        <CurrentCard currentCard={currentCard} />
        <CardSwitch />
    </div>);
};

export default CardWrapper;
