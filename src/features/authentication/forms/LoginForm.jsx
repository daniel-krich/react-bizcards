import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function LoginForm({ loginHandle }) {
    return (
        <Form onSubmit={loginHandle}>
            <Form.Group className='mb-3' controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' required minLength={5} maxLength={64}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" name='password' required minLength={5} maxLength={64}/>
            </Form.Group>

            <Button variant="dark" type="submit">
                Login
            </Button>
        </Form>
    );
}