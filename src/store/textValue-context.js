import React from 'react';

const textValueContext = React.createContext({
  enteredText: '',
  tranformedText: '',
  onchange: letter => {},
});

export default textValueContext;
