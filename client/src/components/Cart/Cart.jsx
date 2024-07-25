import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './cart.scss'

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat Long Sleeve",
            description: "lorem ipsum tdald daalalkjkjs  ",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/3035875/pexels-photo-3035875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "",
            title: "Blouse Shirt",
            description: "lorem ipsum tdald daalalkjkjs  ",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ]


  return (
    <div className="cart">
        <h1>Products in your Cart</h1>  
        {data?.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.description.substring(0,100)}</p>
                    <div className="price">
                        1 x ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon />
            </div>
        ))}

        <div className="total">
            <span>SUBTOTAL</span>
            <span>$19.00</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>    
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart;