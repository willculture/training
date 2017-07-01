
import React from "react";

export default class Header extends React.Component {

   constructor(){
      super();
      this.state = {
        title: "Header"
      }

   }

    changeHeader(e) {
        console.log(e.target.value)
        //this.setState({e.value});
        console.log(this.setState);
        this.setState({title:e.target.value})

    }

    render() {
      //let name = (function(){return "Will"});
      console.log(this)

      return (
          <header>
            <h3>{this.state.title}</h3>  
            <input type="text" value={this.state.title} onChange={this.changeHeader.bind(this)}/>

          </header>
      );
    }

}
