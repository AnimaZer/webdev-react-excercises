import React from 'react';
export default class PhoneInput extends React.Component{
  constructor(props){
    this.props = props;
    this.state={
      input:''
    };
  }

  validation(){

  }

  format(phoneNumber){

  }

  render(){
    return(
      <div className='phoneInput'>
        <input 
          type = 'text'
          onChange = {
            event => this.setState({
              input: event.target.value
          })
        }/>
      </div>
    )
  }
};