import React, {useState} from 'react';
import './App.css';

import NavHeader from './component/navHeader';
import Books from './component/books';
import Category from './component/category';
import Topic from './component/topicComponent';


function App() {
  const [currentNavtab, setCurrentNavtab] = useState('BOOKS');

  function renderNavPage(currentNavtab) {
    switch(currentNavtab) {
      case "BOOKS" :
        return <Books currentNavTab={currentNavtab} />
      case "CATEGORY" :
        return <Category currentNavTab={currentNavtab} />
      case "TOPIC" :
        return <Topic currentNavTab={currentNavtab} />
    }
  }
  return (
    <div className="App">
      <NavHeader currentNavtab={currentNavtab} setNavTab={(clickedVal) => {setCurrentNavtab(clickedVal)}} />
      {renderNavPage(currentNavtab)}
    </div>
  );
}

export default App;
