import { Form, Button, Alert } from 'react-bootstrap';

export default function CreateBusinessCard({ createBusinessCardHandle, submitLabel }) {
    return (
        <Form onSubmit={createBusinessCardHandle}>
            <Form.Group className='mb-3'>
                <Form.Label>Business name</Form.Label>
                <Form.Control type="text" placeholder="Enter business name" name="businessName" required minLength={5} maxLength={64} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Business description</Form.Label>
                <Form.Control type="text" placeholder="Enter business description" name="businessDescription" required minLength={5} maxLength={256} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Business address</Form.Label>
                <Form.Control type="text" placeholder="Enter business address" name="businessAddress" required minLength={5} maxLength={64} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Business phone</Form.Label>
                <Form.Control type="text" placeholder="Enter business phone" name="businessPhone" required minLength={5} maxLength={15} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Business image url</Form.Label>
                <Form.Control type="text" placeholder="Enter business image url" name="businessImageUrl" required />
            </Form.Group>
            <Button variant="dark" type="submit">
                {submitLabel}
            </Button>
        </Form>
    );
}