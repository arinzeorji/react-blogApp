import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Moja');
    const [isLoading, setLoading] = useState(false);
    const goto = useNavigate();

    const handleSubmit = (e) => {
        //alert(`form has been submitted`);
        e.preventDefault();
        const formBody = { title, body, author };
        setLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formBody)
        }).then(() => {
            console.log('New Blog Added Successfully');
            setLoading(false);
            goto('/');

        }).catch((e) => {
            setLoading(true);
            console.log(e + ' Error ocurred');
        })
    }
    return (
        <div className="blog-preview">
            <div className="create">
                <form onSubmit={handleSubmit}>
                    <label>Blog Title:</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label>Blog Body:</label>
                    <textarea
                        required
                        onChange={e => setBody(e.target.value)}
                    >
                    </textarea>
                    <label>Blog Author:</label>
                    <select
                        onChange={e => setAuthor(e.target.value)}
                    >
                        <option value="moja">Moja</option>
                        <option value="king"> King</option>
                        <option value="uncle ile">Uncle ile</option>
                    </select>
                    {
                        (!isLoading)
                            ? <button type="submit">Add new Blog</button>
                            :
                            <button type="submit">Adding Blog....</button>
                    }
                </form>
            </div>
        </div>
    )
}

export default New;
