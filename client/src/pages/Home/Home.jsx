import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import  Categories  from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact'
import './home.scss';

function HomePage() {


    return(
        <div className="home">
            <Slider />
            <FeaturedProducts type="featured"/> 
            <Categories />
            <FeaturedProducts type="trending"/>
            <Contact />
        </div>
    )
}



export default HomePage;