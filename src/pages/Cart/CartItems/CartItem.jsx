import { DeleteFilled } from "@ant-design/icons";


const CartItem = (props) => {
    const title = props.title;
    const price = props.price;
    const qty = props.qty;
    return (
        <div className="container my-5">
            <div className="items d-flex">
                <h6 className='me-5 img'>Image</h6>
                <h6 className="mx-5 w-50 title">{title}</h6>
                <h6 className='mx-5 price'>{price}</h6>
                <h6 className='mx-5 qty'>{qty}</h6>
                <div id="del" className="ms-5 ps-2">
                    <DeleteFilled />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem
