import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../logo.svg';
import axios from 'axios';

class Login extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
            usuario:'',
            contrasena:'',

            estudiantes:[],
            administradores:[],
            colaboradores:[],
            catedraticos:[]

    }
}
  
// async componentDidMount() {
//   try {
//    const res=await axios.get("http://localhost:3001/mostrarEstudiantes");
//       this.setState({
//           estudiantes : res.data
//       })
//   } 
//   catch (error) {
//       console.log("Error")
//   }
// }

handleChange = e => {
  this.setState({
          ...this.state, //mantiene la informacion de los campos
          [e.target.name]: e.target.value //le asigna al atributo entre parentesis el valor de dicho atributo en el formulario
  })
}
handleSubmit= async e => {
  e.preventDefault();
  const {usuario,contrasena} = this.state;

  const res=await axios.get("http://localhost:3001/mostrarEstudiantes");
  const res2= await axios.get("http://localhost:3001/mostrarAdministrador");
  const res3= await axios.get("http://localhost:3001/mostrarColaborador");
  const res4= await axios.get("http://localhost:3001/mostrarCatedratico");
  this.state.estudiantes = res.data
  this.state.administradores= res2.data
  this.state.colaboradores= res3.data
  this.state.catedraticos = res4.data

  console.log(this.state.estudiantes.length)
  console.log(this.state.administradores.length)
  console.log(this.state.colaboradores.length)
  console.log(this.state.catedraticos.length)

for(var i=0; i<this.state.estudiantes.length;i++){
  if (this.state.estudiantes[i].carnet === usuario){
    alert("Bienvenido estudiante" +
        "\n:"+ this.state.estudiantes[i].nombre)
        this.props.history.push('/pageEstudiante');
  }
  console.log("for 1 de estudiantes ")
}
  for(var y=0; y<this.state.administradores.length;y++){
   if(this.state.administradores[y].correo ===usuario){ 
     alert("Bienvenido administrador" +
     "\n"+ this.state.administradores[y].nombre)
     this.props.history.push('/pageAdmin');
  }
  console.log("for 2 de administrador ")
 }
 for(var j=0; j<this.state.colaboradores.length;j++){
  if(this.state.colaboradores[j].carnet === usuario){ 
    alert("Bienvenido colaborador" +
    "\n"+ this.state.colaboradores[j].nombre);
    this.props.history.push('/pageColaborador')
 }
 console.log("for 3 de colaborador ")
}
for(var k=0; k<this.state.catedraticos.length;k++){
  if(this.state.catedraticos[k].registro === usuario){ 
    alert("Bienvenido catedratico" +
    "\n"+ this.state.catedraticos[k].nombre);
    this.props.history.push('/pageCatedratico')
 }
 console.log("for 4 de catedratico ")
}
}
  // for (var i=0;i<this.estudiantes.length; i++){
  //     var indice = this.state.estudiantes[i].contrasena === contrasena
  //   }
  // console.log (this.state.estudiantes)
  // const indice=this.state.estudiantes[0].indexOf(usuario);
  // if(this.state.estudiantes[indice]["contrasena"]==contrasena){
  //  console.log("entro")
  // }
  render() {
    return (
      <React.Fragment>
        <div className="container col-md-4 text-cente">
        <br/>
        <br/>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control onChange = { this.handleChange } value = { this.state.usuario} name="usuario" placeholder="ingrese usuario" />
          <Form.Text className="text-muted">todos sus datos estan protegidos</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange = { this.handleChange } value = { this.state.contrasena } name="contrasena" type="password" placeholder="ingrese su contraseña" />
        </Form.Group>

      <Button variant="primary" type="submit"> Submit </Button>
      </Form>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
     

      </React.Fragment>
    )
  }
}
export default Login;