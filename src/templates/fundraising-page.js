import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LeadText from '../components/LeadText'
import RichText from '../components/RichText'
import Cta from '../components/Cta'

export const FundraisingPageTemplate = ({ 
  hero
 }) => (
  <div className="fundraising">
    <Hero
     {...hero}
    />
    <LeadText text="Join 298 Supporters Who’ve Raised £8,749.74" />
    <RichText text="Rich Text" />
  </div>
)

const FundraisingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <FundraisingPageTemplate
        hero={frontmatter.hero}
      />
    </Layout>
  )
}

FundraisingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FundraisingPage

export const pageQuery = graphql`
  query FundraisingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "fundraising-page" } }) {
      frontmatter {
        hero {
          title
          backgroundImage {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            alt
          }
        }
      }
    }
  }
`
