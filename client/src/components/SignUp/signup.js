import React, { Component, useState } from 'react';
import axios from 'axios';

function SignUp() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

    const handleSubmit(event) {
        event.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);
    }
}
