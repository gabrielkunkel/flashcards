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
  word: "Nothing Here.",
  definition: "No definition"
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
  const [currentCard, setCurrentCard] = useState<Card>(initialCard); 
  const [showNewCardForm, setShowNewCardForm] = useState<boolean>(false);

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
          /> : <div></div>}
      </Container>
    </div>
  );
}

export default App;
