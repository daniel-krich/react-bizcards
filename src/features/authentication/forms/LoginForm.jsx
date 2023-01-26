import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default function LoginForm({ loginHandle }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        loginHandle(event);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name='email'
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name='password'
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}