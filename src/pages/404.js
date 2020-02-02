import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby';



const NotFoundPage = () => (
  <Layout>
    <div className="container-four-zero-four">
      <h1 className="title-four-zero-four">404</h1>
      <p className="content-four-zero-four">Oh no! It looks like you've taken a wrong turn. Click <Link to="/">here</Link> to return to the homepage.</p>

    </div>
  </Layout>
)

export default NotFoundPage
