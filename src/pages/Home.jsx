import BrandsName from '../components/BrandsName';
import About from './About';
import Banner from './Banner'
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <BrandsName></BrandsName>
            <Footer></Footer>
        </div>
    );
};

export default Home;