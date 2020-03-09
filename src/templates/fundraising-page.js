import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LeadText from '../components/LeadText'
import NewRichText from '../components/NewRichText'

export const FundraisingPageTemplate = ({ 
  hero,
  leadText,
  newRichText
 }) => (
  <div className="fundraising">
    <Hero
     {...hero}
    />
    <LeadText text={leadText} />
    <NewRichText text={newRichText} />
  </div>
)

const FundraisingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <FundraisingPageTemplate
        hero={frontmatter.hero}
        leadText={frontmatter.leadText}
        newRichText={frontmatter.newRichText}
        // richText={frontmatter.richText}
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
        leadText
        newRichText
      }
    }
  }
`
