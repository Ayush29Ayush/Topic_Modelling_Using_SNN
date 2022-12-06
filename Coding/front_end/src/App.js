import './App.css';
import TextInput from './TextInput';
import "bootswatch/dist/morph/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Topic Modelling for Research Article
        </h1>
        <p>Paste the Abstract Below</p>
        <TextInput/>
      </header>
    </div>
  );
}

export default App;
