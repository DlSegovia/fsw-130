import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
      email: '' 
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name] : value
    
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email
    }
    this.setState({
      name: '',
      phoneNumber: '',
      email: ''
    });
    this.props.createContact(contact);
  }

  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
            {data.phoneNumber}
             {data.email}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }


  render() {
    
    return(
      <div className="container">
        <h1>Contacts Application</h1>
        <hr />
        <div>
          <h3>Add Contact</h3>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="First-Last Name" type="text" onChange={this.handleChange} className="form-control" value={this.state.name} name="name"/>
            <input placeholder="Phone Number" type="text" onChange={this.handleChange} className="form-control" value={this.state.phoneNumber} name="phoneNumber"/> 
            <input placeholder="Email" type="text" onChange={this.handleChange} className="form-control" value={this.state.email}name="email"/> 
            <br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
        { <ul className="list-group">
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </ul> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
