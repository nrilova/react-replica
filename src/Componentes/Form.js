import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import ThemeProvider from 'react-bootstrap/ThemeProvider';

const BasicExample = () => {
  return (
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
    <Form className='formulario'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <br/>
        <Form.Control type="email" placeholder="" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <br/>
        <Form.Control type="email" placeholder="" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <br/>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <br/>
      <Link to="Join"><Button className='buttonlink-2'>Join Now</Button></Link>
    </Form>
    </ThemeProvider>
  );
}
export default BasicExample;















