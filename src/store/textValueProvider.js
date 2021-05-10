import { useEnhancedReducer } from '../hooks/useEnhancedReducer';
import ReactMarkdown from 'react-markdown';
import TextValueContext from './textValue-context';

const defaultTextValueState = {
  enteredText: '',
  tranformedText: '',
};

const textValueReducer = (state, action) => {
  if (action.type === 'CHANGED') {
    return {
      enteredText: action.letter,
      tranformedText: <ReactMarkdown children={action.letter} />,
    };
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
