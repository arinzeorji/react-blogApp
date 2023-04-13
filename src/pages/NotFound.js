import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div className="container">
            <h2>SORRY</h2>
            <p>This page cannot be displayed at the moment..... <br />Try again later</p>
            <Link to="/"> Go Back to All Blogs </Link>
        </div>
    );
}

export default NotFound;