import * as React from 'react';
import Card from './Models/card';
import ReactCardFlip from 'react-card-flip';
import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface ICurrentCardProps {
  currentCard: Card
}

const useStyles = makeStyles({
  materialCard: {
    width: '80%',
    height: '8em',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cardFront: {
    textAlign: 'center',
    fontSize: 34
  },
  cardBack: {
    textAlign: 'center'
  }
});

const CurrentCard: React.FunctionComponent<ICurrentCardProps> = (props): JSX.Element => { 
  const [flipState, setFlipState] = React.useState<boolean>(false);
  const classes = useStyles();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setFlipState(!flipState);
  }

  return (
    <ReactCardFlip isFlipped={flipState} flipDirection="horizontal">
      <MaterialCard className={classes.materialCard} onClick={handleClick}>
        <CardContent>
          <Typography className={classes.cardFront}>{props.currentCard.word}</Typography>
        </CardContent>
      </MaterialCard>
      <MaterialCard className={classes.materialCard} onClick={handleClick}>
        <CardContent>
          <Typography className={classes.cardBack}>{props.currentCard.definition}</Typography>
        </CardContent>
      </MaterialCard>
    </ReactCardFlip>);
};

export default CurrentCard;
