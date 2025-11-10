import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../services/api'
import Loading from './Loading'
import './Post.css'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)


  const getPost = async () => {
    try {

      
      const response = await api.get(`/posts/${id}`)
      setPost(response.data)
    } catch (error) {
      console.log('Erro ao buscar o post:', error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    getPost()
  }, [id])

  if (loading) {
    return <Loading />
  }

  return (
    <div className='post-container'>
      <div className='post'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Post
