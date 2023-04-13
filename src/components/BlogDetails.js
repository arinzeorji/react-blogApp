import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Error from '../pages/Error';
import Loading from '../pages/Loading';
import useFetch from '../containers/useFetch';

function BlogDetails() {
    const { id } = useParams();
    const goto = useNavigate();

    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog with ID: ' + id + ' Deleted Succesfully');
            goto('/')
        }).catch(() => {
            console.log('Error Deleting Blog with ID: ' + id);
        })
    }
    return (
        <>
            {error && <Error error={error} />}
            {isLoading && <Loading />}
            {blog && (
                <div className="container">
                    <div className="blog-preview">
                        <h2 className="blog-title">{blog.title}</h2>
                        <h6 className="blog-author">By {blog.author} on {new Date().getFullYear()}</h6>
                        <p className="blog-author">{blog.body}</p>
                        <button className="delete-btn" onClick={handleDelete}>Delete Blog</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default BlogDetails;