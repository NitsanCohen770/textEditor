import { useEnhancedReducer } from '../hooks/useEnhancedReducer';

import TextValueContext from './textValue-context';

const defaultTextValueState = {
  enteredText: '',
  tranformedText: '',
};

const textValueReducer = (state, action) => {
  let atrribute = action.letter;
  let text = action.getState().enteredText;
  //   let boldElement;
  //   console.log(text);

  //   boldElement = document.getElementById('h');
  //   boldElement.innerHTML = atrribute;

  switch (action.letter) {
    case '#':
      atrribute = <b id="h"></b>;

      break;

    default:
      break;
  }
  if (action.type === 'CHANGED') {
    return { enteredText: action.letter, tranformedText: atrribute };
  }
};

const TextValueProvider = ({ children }) => {
  const [
    textValueState,
    dispatchTextValueAction,
    getState,
  ] = useEnhancedReducer(textValueReducer, defaultTextValueState);

  const letterEnteredHandler = letter => {
    dispatchTextValueAction({ type: 'CHANGED', letter, getState });
  };

  const textValueContext = {
    enteredText: textValueState.enteredText,
    tranformedText: textValueState.tranformedText,
    onchange: letterEnteredHandler,
  };

  return (
    <TextValueContext.Provider value={textValueContext}>
      {children}
    </TextValueContext.Provider>
  );
};

export default TextValueProvider;
