import { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import './product.scss'
function ProductPage() {

    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)
    

    const imgs = [
        "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]



    return(
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={imgs[0]} alt="" onClick={e=> setSelectedImg(0)}/>
                    <img src={imgs[1]} alt="" onClick={e=> setSelectedImg(1)}/>
                </div>
                <div className="mainImgs">
                    <img src={imgs[selectedImg]} alt="" />
                </div>

            </div>
            <div className="right">
                <h1>Title</h1>  
                <span>$199</span>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae hic ut pariatur vitae nulla quod provident eius quibusdam harum consequuntur delectus libero natus aliquam, error laudantium dignissimos similique quidem doloribus.</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}  
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>  
                </div>

                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISHLIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>

                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}



export default ProductPage