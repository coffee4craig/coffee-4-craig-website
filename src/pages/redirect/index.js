import React, { useEffect } from 'react'
import Layout from '../../components/Layout'


const Redirect = () => {

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const url = urlParams.get('url');
        window.location.replace(url)
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

export default Redirect
