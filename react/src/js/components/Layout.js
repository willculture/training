
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

    render() {
      //let name = (function(){return "Will"});
      return (
        <div>
         <Header />
         <Footer />
        </div>
      );
    }

}
