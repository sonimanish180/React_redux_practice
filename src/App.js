import React from 'react';
import {connect} from 'react-redux';
import './App.css';

import NavHeader from './component/navHeader';
import Books from './component/books';
import Category from './component/category';
import Topic from './component/topicComponent';


function App(props) {

  function renderNavPage(currentNavtab) {
    switch(currentNavtab) {
      case "BOOKS" :
        return <Books />
      case "CATEGORY" :
        return <Category />
      case "TOPIC" :
        return <Topic />
      default:
        return null;
    }
  }
  return (
    <div className="App">
      <NavHeader />
      {renderNavPage(props.currentNavTab)}
    </div>
  );
}

const mapStateToprops = (store) => {
  return {
    currentNavTab : store.selectedNav
  }
}

export default connect(mapStateToprops, null)(App);
