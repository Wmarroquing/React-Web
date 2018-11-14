import React, { Component } from 'react';

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      encargado: '',
      descripcion: '',
      prioridad: 'Bajo'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    // console.log("Escribiendo...");
    // console.log(e.target.value, e.target.name)
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
    // console.log(this.state)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddData(this.state)
    console.log(this.state)
    console.log('Enviando datos...')
  }
  render() {
    return (
      <div className="card mt-4">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <h3>Formulario</h3>
          <hr></hr>
          <div className="form-group">
            <label>Titulo</label>
            <input 
              type="text"
              name="title"
              className="form-control"
              placeholder="Ingresa el titulo"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label>Responsable</label>
            <input 
              type="text"
              name="encargado"
              className="form-control"
              placeholder="Responsable de la tarea"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label> 
            <input 
              type="text"
              name="descripcion"
              className="form-control"
              placeholder="Descripcion"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label>Prioridad</label>
            <select className="form-control" name="prioridad" onChange={this.handleInput}>
              <option>Bajo</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
          </div>
          <button type="submit" className="btn btn-lg btn-primary">Añadir</button>
        </form>
      </div>
    )
  }
}

export default Formulario;