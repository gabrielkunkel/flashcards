import React from 'react';
import collection from "./Models/collection";
import CardWrapper from "./CardWrapper";
import NewCardForm from "./NewCardForm";

export interface IActiveCollectionProps {
    activeCollection: collection,
    showNewCardForm: boolean,
    setShowNewCardForm: React.Dispatch<React.SetStateAction<boolean>>,
    addACardToCurrentCollection: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean,
    mergeNewCardFormObject: (obj: object) => void
}

export default function ActiveCollection (props: IActiveCollectionProps) {  
  return (
    <div>
      <CardWrapper activeCollection={props.activeCollection}/>
      { props.showNewCardForm ? <NewCardForm 
        addACardToCurrentCollection={props.addACardToCurrentCollection}
        mergeNewCardFormObject={props.mergeNewCardFormObject}
        /> : <div onClick={() => props.setShowNewCardForm(true)}>Add New Card To This Collection</div>}
    </div>
  );
}
