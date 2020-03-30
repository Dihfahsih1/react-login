import React from 'react';
import UserStore from './stores/UserStore';
import LoginForm from './LoginForm';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import './App.css';

class App extends React.Component{
  async componentDidMount() {
    try{
    let res = await fetch('/isLoggedIn', {
      method: 'post',
      headers: {
        'Accept':'application/json',
        'Content-type':'application/json'
      }
    });

    let result = await res.json();
    if(result && result.success){
      UserStore.loading = false;
    }

    }
    catch(e){

    }
  }
  render (){
      return(
        <div className="app">
        <div className="container">trying out</div>
        </div>
      );
    }
}



export default App;
