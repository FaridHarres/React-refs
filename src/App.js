import react, { Component } from "react";
import './App.css';
import MyRef from './MyRef';

class App extends Component {
  constructor(props) {
    super(props)

    this.refComp= react.createRef();
  }

  handleclick=()=>{
    //acceder a la methode addfocus creer dans myRef
    this.refComp.current.focus();
  }

  render() {


    return (
      <div className="App">
        <MyRef ref={this.refComp}/>
        <button onClick={this.handleclick}>Valider</button>

      </div>
    );
  }
}

export default App;
