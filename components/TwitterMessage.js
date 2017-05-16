import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleTyping(event){
    this.setState({
      value: event.target.value
    })
  }
  //
  // remainingCharacters(){
  //   const max = this.props.maxChars
  //   return max - this.state.value.length
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleTyping.bind(this)} />
        <strong>Remaining characters: {this.props.maxChars - this.state.value.length}</strong>
      </div>
    );
  }
}
