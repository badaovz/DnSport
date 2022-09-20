import PropTypes from 'prop-types';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar';

const DefaultLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

DefaultLayout.ropTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
