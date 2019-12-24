import React,{Component} from 'react';


class TareaForm extends Component{
    constructor(){
        super();
        this.state={
            title: '',
            description: '',
            priority: 'low',
            date: ''
        }
        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit=e=>{
        e.preventDefault();//evita refrescar la pagina
        this.props.agregarTarea(this.state);
        this.setState({
          title: '',
          description: '',
          priority: 'low',
          date:''
        });
      }
    handleInputChange = e => {
        console.log([e.target.name], e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    
      }
    render() {
        return (
          <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder="Title"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Description"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    value={this.state.priority}
                    onChange={this.handleInputChange}
                  >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="date"
                  className="form-control"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  placeholder="Fecha"
                  />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        )
      }
}

export default TareaForm;