import React from 'react'
import "./App.css";
import Header from "./Header"
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets"


function App() {
  const user = 'akshit';
  return (
    //BEM naming convention
    <div className="app">
      {!user ?  (
        <login />   
      ) : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>  
      )}
              
    </div>
  );
}

export default App;
