import React, { useState,useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function Signup() {

    // const [ firstName, setFirstName ] = useState('');
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        const first = firstNameRef.current.value;
        const last = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(firstName);

        let bodyObj = JSON.stringify({
            first, last, email, password
        })

        // console.log(bodyObj)

        const url = `http://localhost:4000/user/signup`;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        //* Setting our headers to accept the JSON object within the browser

        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            console.log(data);
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <>
            <h2>Signup</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input
                        innerRef={firstNameRef}
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                        innerRef={lastNameRef}
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        innerRef={emailRef}
                        type="email"
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        innerRef={passwordRef}
                        type="password"
                        autoComplete="off"
                    />
                </FormGroup>
                <Button type="submit" color="dark">Signup</Button>
            </Form>
        </>
    )
}

export default Signup