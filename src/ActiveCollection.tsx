import React from 'react';
import collection from "./Models/collection";
import CardWrapper from "./CardWrapper";
import NewCardForm from "./NewCardForm";
import { makeStyles } from '@material-ui/core/styles'

export interface IActiveCollectionProps {
    activeCollection: collection,
    showNewCardForm: boolean,
    setShowNewCardForm: React.Dispatch<React.SetStateAction<boolean>>,
    addACardToCurrentCollection: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean,
    mergeNewCardFormObject: (obj: object) => void
}

const useStyles = makeStyles({
  selectAddCard: {
    textAlign: 'center',
    cursor: 'pointer'
  }
});

export default function ActiveCollection (props: IActiveCollectionProps) {  
  const classes = useStyles();

  return (
    <div>
      <CardWrapper activeCollection={props.activeCollection}/>
      <br />
      { props.showNewCardForm ? <NewCardForm 
        addACardToCurrentCollection={props.addACardToCurrentCollection}
        mergeNewCardFormObject={props.mergeNewCardFormObject}
        /> : <div className={classes.selectAddCard} onClick={() => props.setShowNewCardForm(true)}>Add New Card To This Collection</div>}
    </div>
  );
}
