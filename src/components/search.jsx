import { useState } from "react";

function Search ({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (event) => {
    if (event.key === 'Enter'){
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value)
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input 
          placeholder="search"
          type="search"
          value={value}
          id="search-field"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
        />
        <button 
          className="btn search-btn green lighten-1" 
          onClick={handleSubmit}
          style={{position: "absolute", top: 0, right: 0}}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export {Search};