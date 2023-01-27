import { Form, Button, Alert } from 'react-bootstrap';

export default function CreateBusinessCard({ createBusinessCardHandle, submitLabel }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        createBusinessCardHandle(event);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>Business name</Form.Label>
                <Form.Control type="text" placeholder="Enter business name" name="businessName" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Business description</Form.Label>
                <Form.Control type="text" placeholder="Enter business description" name="businessDescription" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Business address</Form.Label>
                <Form.Control type="text" placeholder="Enter business address" name="businessAddress" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Business phone</Form.Label>
                <Form.Control type="text" placeholder="Enter business phone" name="businessPhone" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Business image url</Form.Label>
                <Form.Control type="text" placeholder="Enter business image url" name="businessImageUrl" />
            </Form.Group>
            <Button variant="dark" type="submit">
                {submitLabel}
            </Button>
        </Form>
    );
}