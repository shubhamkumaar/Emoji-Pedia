import React from "react";
import emoji from "../emojipedia"

import Entry from "./Entry";

function createEntry(et){
return <Entry 
key ={et.id}
emj={et.emoji}
name={et.name}
meaning = {et.meaning}/>
}
function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emoji.map(createEntry)}
        </dl>
      </div>
  );
}

export default App;
