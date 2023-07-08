import './App.css';

function Input(){
  return(
    <form>
      <textarea></textarea>
      <button>Submit</button>
    </form>
  )
}


function App() {
  return (
    <div className="App">
        <Input/>
    </div>
  );
}

export default App;
