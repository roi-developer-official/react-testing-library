import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
export default function ToopingOption({name, imagePath,updateItemCount}){

    const handleChange = (event,value) => {
        updateItemCount(name, value ,"toppings");
      };

    return (
    <Col xs={12} sm={6} md={4} lg={3} 
    style={{textAllign: 'center'}}>
    <Form.Group controlId={`${name}-toppings-checkbox`}>
        <Form.Check 
        type="checkbox" 
        onChange={(e)=>handleChange(e, e.target.checked ? 1 : 0)}
        label={name}
        ></Form.Check>
       </Form.Group>
        <img style={{width: '75%'}}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        />
    </Col>
    )

}