import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LeadText from '../components/LeadText'
import Volunteer from '../components/Volunteer'
import DonateItems from '../components/DonateItems'
import Superheroes from '../components/SuperHeroes'
import CtaBlock from '../components/CtaBlock'

export const SupportPageTemplate = ({ 
  ctaBlock
 }) => (
  <div>
    <Hero title="Hero" backgroundImage={{}} />
    <LeadText text="Lead Text" />
    <Volunteer />
    <DonateItems title="Donate Items" text="" list={[]} cta={{}} />
    <Superheroes title="Superheros" list={[]} />
    <CtaBlock {...ctaBlock} />
  </div>
)

const SupportPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SupportPageTemplate
        title={frontmatter.title}
        ctaBlock={frontmatter.ctaBlock}
      />
    </Layout>
  )
}

SupportPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SupportPage

export const pageQuery = graphql`
  query SupportPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "support-page" } }) {
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
        donateItems {
          title
          text
          list {
            label
            image {
              image {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              },
              alt
            }
            cta {
              url
              label
            }
          }
        }
        ctaBlock {
          title
          link {
            url
            label
          }
        }
      }
    }
  }
`
