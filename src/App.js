import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends  React.Component {
  constructor() {
    super();
    this.state = {
       data: 
       [
          {
             "id":1,
             "name":"Foo",
             "age":"20"
          },
          {
             "id":2,
             "name":"Bar",
             "age":"30"
          },
          {
             "id":3,
             "name":"Baz",
             "age":"40"
          }
       ]
    }
 }
  render() {
    return (
      <div>
      <Header/>
      <img src="~/../assets/Images/category-box-5-img.jpg" alt=""></img>
      <table>
         <tbody>
         
            {this.state.data.map((person, i) =>
            <TableRow data={person} key={person.id}></TableRow>
            )}
         </tbody>
      </table>
   </div>
    );
  }
}
class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Header</h1>
        </div>
     );
  }
}
class TableRow extends React.Component {
  render() {
     return (
       <div>
        <tr>
        <img src="./favicon.ico" />
        <img src="~/../assets/Images/category-box-5-img.jpg" alt=""></img>
            {/* <td>{this.props.key}</td> */}
           <h1>{this.props.data.id+this.props.data.name}</h1>
           <td>{this.props.data.id}</td>
           <td>{this.props.data.name}</td>
           <td>{this.props.data.age}</td>
        </tr>
        <tr>
        {/* <td>{this.props.key}</td> */}
       <td>{this.props.data.id}</td>
       <td>{this.props.data.name}</td>
       <td>{this.props.data.age}</td>
    </tr>
    </div>
        
     );
  }
}

export default App;
