import React from 'react';

interface INewCardFormProps {
    addACardToCurrentCollection: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean,
    mergeNewCardFormObject: (obj: object) => void
}

const NewCardForm: React.FunctionComponent<INewCardFormProps> = (props) => {

  return (<div>
        <div><input id="word" placeholder="Vocabulary Word" onChange={e => props.mergeNewCardFormObject({word : e.target.value})}/></div>
        <div><input id="definition" placeholder="Word Definition" onChange={e => props.mergeNewCardFormObject({definition : e.target.value})}/></div>
        <button onClick={event => props.addACardToCurrentCollection(event)}>Add New Card</button>
  </div>);
};

export default NewCardForm;
