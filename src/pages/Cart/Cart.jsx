import './Cart.css'
import CartItem from './CartItems/CartItem'
import { DeleteFilled } from '@ant-design/icons'
import { Col, Container, Row } from 'react-bootstrap'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Cart = () => {
    const arr = [
        {
            title: 'item01',
            img: '',
            price: 99,
            qty: 5,
            isDeleted: false
        },
        {
            title: 'item02',
            img: '',
            price: 50,
            qty: 2,
            isDeleted: false
        },
        {
            title: 'item03',
            img: '',
            price: 20,
            qty: 8,
            isDeleted: false
        }

    ]
    return (
        <>


            <Container className='w-75'>
                <div className='headingsContainer mt-5 pt-3'>
                    <div className="headings d-flex">
                        <h5 className='me-5 ms-2'>Image</h5>
                        <h5 className='me-4 ms-5 w-50'>Title</h5>
                        <h5 className='ms-5 me-3'>Price</h5>
                        <h5 className='ms-5 me-5'>Qty</h5>
                        <div className='ms-5'>
                            <DeleteFilled />
                        </div>
                    </div>
                    <div className="Items">
                        {
                            arr.map((item, index) => < CartItem title={item.title} price={item.price} qty={item.qty} />)

                        }
                    </div>
                </div>
            </Container>

            <section>
                <Container className='w-50 my-5 p-5 rounded shadow-lg'>
                    <Row>
                        <Col> <h4 className='mt-2'>Subtotal</h4></Col>
                        <Col> <h2 className='text-end'>$564</h2> </Col>
                        <hr />
                    </Row>
                    <Row>
                        <Box
                            className='mb-5 mt-3'
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="standard-basic" label="Full Name" variant="standard" />
                            <br />
                            <TextField id="standard-basic" label="Email" variant="standard" />
                            <br />
                            <TextField id="standard-basic" label="Phone Number" variant="standard" />
                            <br />
                            <TextField id="standard-basic" label="Shipping Adress" variant="standard" />
                            <br />

                        </Box>
                    </Row>

                    <Row>
                        <div>
                            <button type="button" style={{ backgroundColor: "#61B846" }} class="btn text-light my-2 w-100">Place Order</button>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Cart
