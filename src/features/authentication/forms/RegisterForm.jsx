import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default function RegisterForm({ registerHandle, submitLabel }) {
    return (
        <Form onSubmit={registerHandle}>
            <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" required minLength={3} maxLength={64} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" required minLength={5} maxLength={64} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" required minLength={5} maxLength={64} />
            </Form.Group>
            <Button variant="dark" type="submit">
                {submitLabel}
            </Button>
        </Form>
    );
}