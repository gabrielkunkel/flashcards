import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.scss';

import Collection from './Models/collection';

import Container from '@material-ui/core/Container';
import Collections from './Collections';

const App: React.FC = (): JSX.Element => {

  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
      axios.get('http://localhost:3000/collections')
          .then(response => {
              setCollections([...response.data]);
          });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container>
        <Collections collections={collections} />
      </Container>
    </div>
  );
}

export default App;
