
import api from '../services/api'
import "./Admin.css"
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import Loading from './Loading'



const Admin = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)


    const getPosts = async () => {

        try {

            await new Promise((resolve) => setTimeout(resolve, 2000))
            const response = await api.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(response.data)

        } catch (error) {
            console.log(error + "Ocoreu um Error na requisição")
        } finally {
            setLoading(false)
        }

    };

    const deletePost = async (id) => {
        await api.delete(`/posts/${id}`);

        const filteredPosts = posts.filter((post) => post.id !== id);
        setPosts(filteredPosts);
     }


    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='admin'>
            <h1>Admin Page - Gerenciar Posts</h1>
            {posts.length === 0 ? <p> <Loading /> </p> : (
                posts.map((post) => (
                    <div key={post.id} className='post'>
                        <h3>{post.title}</h3>
                        <div className='actions'>
                            <Link className='btn edit-btn' to={`/edit/${post.id}`}>Editar</Link>
                            <button 
                            className='btn delete-btn'
                            onClick = {() => deletePost(post.id)}>
                            Excluir</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Admin