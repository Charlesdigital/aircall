import React from 'react';
import ReactDOM from 'react-dom';
import Activity from "./components/activityDetails/activityDetails.jsx";
import Test from "./components/test.jsx";


import Header from './Header.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
      <Activity/>
      <Test/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
