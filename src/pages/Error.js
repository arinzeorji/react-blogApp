import React from 'react';

function Error({ error }) {
    return (
        <div className="container">
            <div className="blog-preview">
                {error}<br />Please try again later....... THANK YOU
            </div>
        </div>

    )
}

export default Error;
