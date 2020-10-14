import React from 'react';
import './form.styles.css'

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className='input'>
          <label htmlFor="title">Enter the title: </label>
          <input id="title" name="title" type="text" />
  
          <label htmlFor="author">Enter the Author: </label>
          <input id="author" name="author" type="text" />
  
          <label htmlFor="price">Enter the price: </label>
          <input id="price" name="price" type="text" />

          <label htmlFor="quantity">Enter the price: </label>
          <input id="quantity" name="quantity" type="text" />
  
          <button>Add Book</button>
        </form>
      );
    }
  }

  export default MyForm;