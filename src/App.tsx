import React from 'react';
import './App.scss';
import SearchTab from './Components/SearchTab';

// typescript function based App component
const App = (): JSX.Element => {
  return(
    <div className='App'>
      <div className='Startup'><b>ZEVI</b></div>
      <div className='App-name'>Search Application</div>
      <SearchTab />
    </div>
  );
}


export default App;
