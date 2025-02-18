import './card.scss';
import {Link} from 'react-router-dom';

function Card({item}) {
    const uploadUrl =  import.meta.env.VITE_UPLOAD_URL;

    return(
        <Link className='link' to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item?.attributes.isNew && <span>New Season</span>}
                    <img src={uploadUrl + item.attributes?.img?.data.attributes?.url} alt="" className='mainImg'/>
                    {item.attributes.img2 &&
                    
                        <img src={uploadUrl + item.attributes?.img2?.data.attributes?.url} alt="" className='secondImg'/>
                    }
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="prices">
                    <h3>${item?.attributes.oldPrice || item?.attributes.price + 20}</h3>
                    <h3>${item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card;