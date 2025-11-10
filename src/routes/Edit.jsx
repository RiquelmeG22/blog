import api from '../services/api'
import "./Admin.css"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const { id } = useParams();
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const getPost = async () => {
    
    
    
    try {

      const response = await api.get(`/posts/${id}`)
      const data = response.data;

      setTitle(data.title);
      setBody(data.body);

    } catch (error) {
      console.log('Erro ao buscar o post:', error)
    } finally {
      setLoading(false)
    }
  }

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await api.put(`/posts/${id}`, {
      body: post
    });
    navigate('/admin');
  }

  useEffect(() => {
    getPost()
  }, [])


  return (
    <div className='NewPost'>
      <h2>Editando: {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className='form-control'>
          <label htmlFor='titulo'>Titulo:</label>
          <input type="text"
            name="titulo"
            id="titulo"
            placeholder='Digite o titulo'
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""} />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder='Digite o conteúdo'
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}>
          </textarea>
        </div>
        <input type="submit" value="Editar Post" className='btn' />
      </form>
    </div>
  )
}

export default Edit