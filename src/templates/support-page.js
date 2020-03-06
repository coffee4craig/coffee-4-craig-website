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
  hero,
  leadText,
  volunteer,
  donateItems,
  superheroes,
  ctaBlock
 }) => (
  <div>
    <Hero {...hero} />
    <LeadText text={leadText} />
    <Volunteer {...volunteer} />
    <DonateItems {...donateItems} />
    <Superheroes {...superheroes} />
    <CtaBlock {...ctaBlock} />
  </div>
)

const SupportPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SupportPageTemplate
        title={frontmatter.title}
        hero={frontmatter.hero}
        leadText={frontmatter.leadText}
        volunteer={frontmatter.volunteer}
        donateItems={frontmatter.donateItems}
        superheroes={frontmatter.superheroes}
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
        volunteer {
          title
          text
          ctaOne {
            url
            label
          }
          ctaTwo {
            url
            label
          }
        }
        donateItems {
          title
          cta {
            url
            label
          }
          text
          list {
            image {
              image {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 64) {
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
          cta {
            url
            label
          }
        }
        ctaBlock {
          title
          link {
            url
            label
          }
        }
        superheroes {
          title
          superheroesList {
            name,
            description
            image {
              image {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 64) {
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
  }
`
