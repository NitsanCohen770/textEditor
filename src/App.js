import './App.css';
import TextArea from './components/TextArea/TextArea';
import PreviewCard from './components/PreviewCard/PreviewCard';
import { useContext } from 'react';
import textValueContext from './store/textValue-context';

function App() {
  const textValueCtx = useContext(textValueContext);
  return (
    <div>
      <TextArea
        rows={5}
        title="Text Editor"
        value={textValueCtx.enteredText}
        onchange={textValueCtx.onchange}
      />
      <PreviewCard textValue={textValueCtx.tranformedText} />
    </div>
  );
}

export default App;
