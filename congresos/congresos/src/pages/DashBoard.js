import React,{Component} from 'react';
import {Tareas} from '../db/Tareas.json';
import TareaForm from '../components/forms/TareaForm';
import Menu from '../components/Menu';
import logo from '../logo.svg';

//onClick={this.removeTodo.bind(this, i)}
class DashBoard extends Component{
    
    constructor(){
        super();
        this.state={
            Tareas
        }
    }
    handleAddTarea=tarea=>{
        this.setState({
            Tareas:[...this.state.Tareas,tarea]
        })
    }
   
    
    render(){
        const tareas=this.state.Tareas.map((tarea,i)=>{
            return(
            <div className="col-md-4" key={i}>
            <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{tarea.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {tarea.priority}
              </span>
            </div>
            <div className="card-body">
              {tarea.description}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                >
                Delete
              </button>
            </div>
          </div>
        </div>
            )
        })
        return(
            <React.Fragment>
            <Menu/>
            <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TareaForm agregarTarea={this.handleAddTarea}></TareaForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {tareas}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
        )
    }
}

export default DashBoard 