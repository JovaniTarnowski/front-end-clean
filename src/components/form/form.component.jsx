import React from 'react';

class MyForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('http://localhost:8000/book/add', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Enter the title</label>
          <input id="title" name="title" type="text" />
  
          <label htmlFor="author">Enter the Author</label>
          <input id="author" name="author" type="text" />
  
          <label htmlFor="price">Enter the price</label>
          <input id="price" name="price" type="text" />
  
          <button>Send data!</button>
        </form>
      );
    }
  }

  export default MyForm;