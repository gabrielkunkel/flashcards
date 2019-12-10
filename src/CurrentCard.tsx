import * as React from 'react';
import Card from './Models/card';
import ReactCardFlip from 'react-card-flip';
import MaterialCard from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

interface ICurrentCardProps {
  currentCard: Card
}

const CurrentCard: React.FunctionComponent<ICurrentCardProps> = (props): JSX.Element => { 
  const [flipState, setFlipState] = React.useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setFlipState(!flipState);
  }

  return (
    <ReactCardFlip isFlipped={flipState} flipDirection="horizontal">
      <MaterialCard onClick={handleClick}>
        <CardContent>
          <div>{props.currentCard.word}</div>
        </CardContent>
      </MaterialCard>
      <MaterialCard onClick={handleClick}>
        <CardContent>
          <div>{props.currentCard.definition}</div>
        </CardContent>
      </MaterialCard>
    </ReactCardFlip>);
};

export default CurrentCard;
