import React from 'react';
import BlogList from '../components/BlogList';
import Loading from '../pages/Loading';
import Error from '../pages/Error';
import useFetch from '../containers/useFetch';

const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
    return (
        <>
            {error && <Error error={error} />}
            {isLoading && <Loading />}
            {(blogs) ? <BlogList blogs={blogs} title="ALL BLOGS!" /> : <div className="container"><h1>NO BLOGS AVAILABLE</h1></div>}
        </>
    );
}
export default Home;
