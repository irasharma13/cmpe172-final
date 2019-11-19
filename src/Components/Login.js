import React, { useState } from 'react';
import Amplify, { Auth } from "aws-amplify";
import {Button, Form, FormGroup, Input, Label, Container} from 'reactstrap'



const Login = () => {
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	let result = "";
	return(
		<Container style={{paddingTop:"10%"}}>
			<Button onClick={()=> Auth.federatedSignIn()}> Login!</Button>
			<Button onClick={()=> Auth.federatedSignIn({provider:'Google'})}>Google Log In</Button>
		</Container>
	)
}

export default Login