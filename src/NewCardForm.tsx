import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

interface INewCardFormProps {
    addACardToCurrentCollection: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean,
    mergeNewCardFormObject: (obj: object) => void
}

const useStyles = makeStyles({
  formWrapper: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});


const NewCardForm: React.FunctionComponent<INewCardFormProps> = (props) => {
  const classes = useStyles();

  return (<div className={classes.formWrapper}>
        <div><TextField id="word" variant="outlined" placeholder="Vocabulary Word" onChange={e => props.mergeNewCardFormObject({word : e.target.value})}/></div>
        <div><TextField id="definition" variant="outlined" placeholder="Word Definition" onChange={e => props.mergeNewCardFormObject({definition : e.target.value})}/></div>
        <button onClick={event => props.addACardToCurrentCollection(event)}>Add New Card</button>
  </div>);
};

export default NewCardForm;
