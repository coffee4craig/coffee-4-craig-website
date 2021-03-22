import React, { useEffect } from 'react'
import Layout from '../components/Layout';

// This is here as a placeholder for now.
// Need to update the gatsby config so that it doesn't try and create a page
// for every markdown file which means we can have global components each with a dedicated markdown file

const Redirects = ({pathContext: { url }}) => {

  useEffect(() => {
    window.location = url;
  }, [])


  return (
        <Layout noFooter>
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h2 style={{marginTop: "150px"}}>Redirecting you now</h2>
                <h3>Please wait...</h3>
            </div>
        </Layout>
    )
}

export default Redirects;
