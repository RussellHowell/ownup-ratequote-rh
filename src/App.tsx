import * as React from 'react';
import RateQuoteApp from  './rate-quote';
import './App.css';
import { RateQuoteForm } from './rate-quote/components/RateQuoteForm/RateQuoteForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <RateQuoteApp />
    </div>
  );
}

export default App;
