import Col from 'react-bootstrap/Col';
export default function ToopingOption({name, imagePath}){

    return <Col xs={12} sm={6} md={4} lg={3} 
    style={{textAllign: 'center'}}>
        <img style={{width: '75%'}}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        />
    </Col>

}