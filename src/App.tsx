import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.scss';

import Collection from './Models/collection';
import Card from './Models/card';

import Container from '@material-ui/core/Container';
import Collections from './Collections';
import ActiveCollection from "./ActiveCollection";

const initialCard: Card = {
  id: 0,
  word: "Add a vocabulary word.",
  definition: "Add a vocabulary definition."
}

const initialCollection: Collection = {
  id: 0,
  title: "Empty",
  image: "http://therewasanerror.com",
  cards: [initialCard]
}

const App: React.FC = (): JSX.Element => {

  const [collections, setCollections] = useState<Collection[]>([]);
  const [activeCollection, setActiveCollection] = useState<Collection>(initialCollection);
  // const [currentCard, setCurrentCard] = useState<Card>(initialCard); 
  const [showNewCardForm, setShowNewCardForm] = useState<boolean>(false);
  const [newCardFormObject, setNewCardFormObject] = useState<Card>(initialCard);

  useEffect(() => {
      axios.get('http://localhost:3000/collections')
          .then(response => {
              setCollections([...response.data]);
          });
  }, [])

  const switchActiveCollection = (newActiveCollection: Collection): void => {
    setShowNewCardForm(false);
    setActiveCollection(newActiveCollection);
  }

  const getNextIdNumber = (): number => {
    let working: Card[] = [...activeCollection.cards];
    working.sort((a, b) => a.id - b.id);
    return working[working.length-1].id + 1;
  }

  const addCardToDatabase = (updatedCollection: Collection): void => {
    axios.put('http://localhost:3000/collections/' + activeCollection.id, updatedCollection)
      .then(response => {
        console.log("response received: ", response);
        // do I need to update the state?
        // do I need to reset the form?
        // setShowNewCardForm(false);
        //  setNewCardFormObject(initialCard);
    });
  }

  const addACardToCurrentCollection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): boolean => {
    console.log("Card added.");

    // todo: make sure the the card is not the initial card
    
    let newCardToAdd: Card = {
      id: getNextIdNumber(),
      word: newCardFormObject.word,
      definition: newCardFormObject.definition
    }

    let updatedCollection = Object.assign({}, activeCollection, { cards: [...activeCollection.cards, newCardToAdd] });

    addCardToDatabase(updatedCollection);
    // setActiveCollection(updatedCollection);
    
    return false;
  }

  const mergeNewCardFormObject = (obj: object) : void => {
    let newCardObject: Card = Object.assign({}, newCardFormObject, obj);
    setNewCardFormObject(newCardObject);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container>
        <Collections 
          collections={collections} 
          setActiveCollection={switchActiveCollection} 
          activeCollection={activeCollection} 
        />
        { activeCollection.id !== 0 ? 
          <ActiveCollection 
            activeCollection={activeCollection}
            showNewCardForm={showNewCardForm}
            setShowNewCardForm={setShowNewCardForm} 
            addACardToCurrentCollection={addACardToCurrentCollection}
            mergeNewCardFormObject={mergeNewCardFormObject}
          /> : <div></div>}
      </Container>
    </div>
  );
}

export default App;
