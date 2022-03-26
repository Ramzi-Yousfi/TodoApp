

'


function App() {

  }
  
    return (
      <div>
          {toggle ? <h1>True</h1> : <h1>False</h1>}
        <button onClick={changeToggle}>Change state +  </button>
      </div>
    )



  
}

export default App;
