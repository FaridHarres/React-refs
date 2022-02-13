import react, { Component } from "react";

class MyRef extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         value :""
      }
      //faire ref a l'element
      this.mytitle = react.createRef();

      this.myInput = react.createRef()
      


    }


    addFocus =()=>{
        this.myInput.current.focus();
    }
  
    render(){
        return(
            <div>            
                <input ref={this.myInput} type="text"/>
            </div>
        )
    }
}

export default MyRef