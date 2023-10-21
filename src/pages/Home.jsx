import BrandsName from '../components/BrandsName';
import About from './About';
import Banner from './Banner'
import Footer from './Footer';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <BrandsName></BrandsName>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;