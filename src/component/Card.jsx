import "./Card.css"
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { db } from "../Config/firebase";
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'

function Cardx({ data, indexes, ids }) {
    const { unit, name, price, description } = data;
    const ref = collection(db, 'items');
    // const {index} = key;
    // console.log(name, indexes);
    const fetchData = async (ids) => {
        const query = query(ref, where("name", "==", "Pineapple"));
        const querySnapshot = await getDocs(query)
        console.log(querySnapshot);
    }
    const fo = () => {
        fetchData()
    }
    return (
        <>
            <Card className="my-2 shadow m-3" style={{ width: '25rem', border: "none", overflow: "hidden" }}>
                <Card.Img id='cardImg' variant="top" />
                <Card.Body className="mt-2">
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <Row>
                            <Col lg={10} md={10} sm={10}><div className='mt-2 fw-bold'>{price}</div></Col>
                            <Col lg={2} md={2} sm={2}><Button className="px-4" variant="dark" onClick={fo} style={{ borderRadius: "", fontSize: "1.1rem" }}>+</Button></Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cardx