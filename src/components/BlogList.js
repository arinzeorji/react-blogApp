import React from 'react'
import { Link } from 'react-router-dom';

function BlogList({ blogs, title }) {
  //const { blogs, title } = props;

  return (
    <div className="container">
      <h2>{title}</h2>
      {
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2 className="blog-title">{blog.title}</h2>
              <h4 className="blog-author">By {blog.author} on {new Date().getFullYear()}</h4>
            </Link>
          </div>
        )
        )}
    </div>
  )
}

export default BlogList;
