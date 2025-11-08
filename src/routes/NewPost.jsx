import React from 'react'
import api from '../services/api'

import { useState } from 'react';

import { useNavigate } from 'react-router-dom'

import './NewPost.css'

const NewPost = () => {

  const navigate = useNavigate()
  const [title, setTitle] = useState();
  const [body, setBody] = useState();


  const createPost = async (e) => {
    e.preventDefault();

    const post = () => { title, body, userId; 1}
    
    await api.post('/posts', {
      status: 201,
      body: post
    })

    navigate('/')
  }

  return (
    <div className='NewPost'>
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
          <label htmlFor='titulo'>Titulo:</label>
          <input type="text"
            name="titulo"
            id="titulo"
            placeholder='Digite o titulo'
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder='Digite o conteúdo'
            onChange={(e) => setBody(e.target.value)}>
          </textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn' />
      </form>
    </div>
  )
};

export default NewPost;