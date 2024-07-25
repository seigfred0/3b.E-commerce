import './featuredProducts.scss';
import Card from '../Card/Card';


function FeaturedProducts({type}) {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat Long Sleeve",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/3035875/pexels-photo-3035875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "",
            title: "Blouse Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "",
            title: "Summer Fit Shirt",
            isNew: false,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2250526/pexels-photo-2250526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "",
            title: "Date Night Outfit",
            isNew: false,
            oldPrice: 19,
            price: 12
        }
    ]

    return(
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                {data.map(item => {
                    return <Card  item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts;