import React ,{useState} from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router';



function Login(props) {

  const aaaa=useHistory();
  console.log(props);
  const [state,setState]=useState({
    email:"",
    password:""

  })


const handleChange=(event)=>{
  setState({...state,[event.target.name]:event.target.value})

}

const login=()=>{



  axios.post("https://ancient-bastion-78867.herokuapp.com/api/login",state).then(response=>{
  if(response["data"].login)
  {
    localStorage.setItem("token","Loggedin")
    aaaa.push("/profile")

    //  to redirect the user to profile page   
  }
  else{
    alert("Wrong Username Or Password")
  }

  }).catch(err=>{

    console.log(err);
  })



}

    return (
        <div>

<Row>
    
    <Col md={{ span: 4, offset: 4 }}>

    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  name="email" onChange={handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="button" onClick={login}>
    Login
  </Button>
</Form>

    </Col>

  </Row>
            
            
        </div>
    )
}

export default Login
