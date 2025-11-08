import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import api from '../services/api'


const Home = () => {
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

  useEffect(() => {
    getPosts();
  }, []);


  if (loading) {
    return <Loading />
  }

  return (
    <div className='home'>
      <h1>Últimos Post</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => (
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            < Link to={`/post/${post.id}`} className='btn'>Ler mais</Link>
          </div>
        ))
      )}
    </div>
  );
};


export default Home