import React from 'react'
import './notFound.css'
import nFound from '../../assets/img/nFound.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container'>
      <img src={nFound} alt="" />
      <div>
        <button type="button" class="btn btn-success"> <Link to="/" className="link-offset-2 link-underline link-underline-opacity-0 link-light">Back to Home</Link></button>
      </div>
      
    </div>
  )
}

export default NotFound
