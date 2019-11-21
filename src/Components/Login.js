import React, { useState } from 'react';
import { Auth } from "aws-amplify";
import {Button, Form, FormGroup, Input, Label, Container} from 'reactstrap'



const Login = () => {
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");

	const login = async () => {
			try {
				await Auth.signIn(email, pw);
				alert("Success!");
				console.log('sign in success')
			}catch(e){
				alert("error logging in see console");
				console.log(e)
			}
	}
	const check = () => {
		return (
				console.log(email, pw)
			)
	}
	return(
		<Container style={{paddingTop:"10%"}}>
			<Form>
	    	  <FormGroup>
	        	<Label for="exampleEmail">Email</Label>
	        	<Input type="email" onChange={e=>setEmail(e.target.value)} name="email" id="exampleEmail" placeholder="with a placeholder" />
		      </FormGroup>
		      <FormGroup>
		       	<Label for="examplePassword">Password</Label>
		       	<Input type="password" onChange={e=>setPw(e.target.value)} name="password" id="examplePassword" placeholder="password placeholder" />
		      </FormGroup>
	      	<Button onClick={login}> Login!</Button>
	      	</Form>
		</Container>
	)
}

export default Login