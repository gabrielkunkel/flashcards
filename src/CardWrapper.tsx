import * as React from 'react';
import collection from './Models/collection';
import Card from './Models/card';
import { makeStyles } from '@material-ui/core/styles';
import CurrentCard from './CurrentCard';
import Button from '@material-ui/core/Button'

interface ICardWrapperProps {
    activeCollection: collection
}

const initialCard: Card = {
    id: 0,
    word: "Vocabulary word loading...",
    definition: "Vocabulary definition loading..."
  }

const useStyles = makeStyles({
    cardSwitch: {
        textAlign: 'center'
    },
    cardCount: {
        float: 'right'
    }
});

const CardWrapper: React.FunctionComponent<ICardWrapperProps> = (props): JSX.Element => {
    const [currentCard, setCurrentCard] = React.useState<Card>(initialCard);
    const classes = useStyles();

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
        return(<div className={classes.cardSwitch}>
            <Button variant="contained" onClick={previousCard}>Previous</Button>
            <Button variant="contained" onClick={nextCard}>Next</Button>
        </div>)
    }

    const CardCount = (): JSX.Element => {
        return (<div className={classes.cardSwitch}>
            {currentCard.id} / {props.activeCollection.cards.length}
        </div>)
    }

  return (<div>
        <CurrentCard currentCard={currentCard} />
        <CardCount />
        <br />
        <CardSwitch />
    </div>);
};

export default CardWrapper;
