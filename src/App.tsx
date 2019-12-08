import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.scss';

import Collection from "./Models/collection";

import Container from '@material-ui/core/Container';

const App: React.FC = (): JSX.Element => {

  const [collection, setCollection] = useState<Collection[]>([]);

  useEffect(() => {
      axios.get('http://localhost:3000/collections')
          .then(response => {
              setCollection([...response.data]);
          });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container>
        This is container.
      </Container>
    </div>
  );
}

export default App;
