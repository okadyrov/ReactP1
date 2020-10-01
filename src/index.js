import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
//import * as serviceWorker from './serviceWorker';

class WhoAmI extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     years: 26
  //   }
  //   //this.nextYear = this.nextYear.bind(this);
  //   // this.nextYear = () => {
  //   //   this.setState(state => ({
  //   //     years: ++state.years
  //   //   }))
  //   // }
  // }
  state = {
    years: 26
  }
  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }))
  }
  // nextYear() {
  //   //this.state.years++
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }
  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years = {years} </h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}

// function WhoAmI ({name, surname, link})  {
//   return (
//     <>
//       <h1>My name is {name}, surname - {surname} </h1>
//       <a href={link}>My profile</a>
//     </>
//   )
// }

const All = () => {
  return(
    <>
        <WhoAmI name="Oleg" surname="Adamov" link="facebook.com" />
        <WhoAmI name="Adam" surname="Bozhii" link="VK.com" />
        <WhoAmI name="Leyli" surname="Hudayeva" link="Telegram.com" />,

    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
  
  


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
