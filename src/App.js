import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navigation from './components/Navigation';
import Formulario from './components/Formulario';
import { datos } from './datos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      datos
    };
    this.handleAddData = this.handleAddData.bind(this)
  };

  handleAddData(dato) {
    this.setState({
      datos: [...this.state.datos, dato]
    })
  }

  handleRemove(index) {
    if(window.confirm('Estas seguro de queres eliminar este dato??')){
      this.setState({
        datos: this.state.datos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    const datos = this.state.datos.map((dato, i) => {
      return (
        <div className="col-md-3" key={i}>
          <div className="card mt-4 App">
            <div className="card-header">
              <h3>{dato.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {dato.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p>{dato.descripcion}</p>
              <p className="font-weight-bold">{dato.encargado}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.handleRemove.bind(this, i)}
              >
              Borrar
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <Navigation title="My First App" estado={this.state.datos.length} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 mt-4">
              <Formulario onAddData={this.handleAddData}/>
            </div>
            <div className="col-md-8 mt-4">
              <div className="row">
                {datos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
