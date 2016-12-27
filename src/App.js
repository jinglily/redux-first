import React from 'react';
import PostBody from './PostBody';
import Work from './Work';
import './main.css';

class App extends React.Component{
   render(){
     return(
       <div>
        <div className="top">
          <PostBody />
        </div>
        <div className="bottom">
          <Work />
        </div>
       </div>
     )
   }
 }
export default App;
