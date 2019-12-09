import React, { useState } from 'react';
import collection from "./Models/collection";
import CurrentCard from "./CurrentCard";
import NewCardForm from "./NewCardForm";

export interface IActiveCollectionProps {
    activeCollection: collection,
    showNewCardForm: boolean,
    setShowNewCardForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ActiveCollection (props: IActiveCollectionProps) {

  
  return (
    <div>
      <CurrentCard />
      { props.showNewCardForm ? <NewCardForm /> : <div onClick={() => props.setShowNewCardForm(true)}>Add New Card To This Collection</div>}
    </div>
  );
}
