import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ServicesComponent from '../components/ServicesComponent'
import Hero from '../components/Hero'
import LeadText from '../components/LeadText'
import AddressMap from '../components/AddressMap'
import Partners from '../components/Partner'
import Timeline from '../components/Timeline'

export const AboutPageTemplate = ({
  hero,
  leadText,
  addressMap,
  partners,
  services,
  timeline
}) => {
  return (
  <div>
    <Hero {...hero} />
    <LeadText text={leadText} />
    <AddressMap {...addressMap} />
    <Partners {...partners} />
    <ServicesComponent {...services} />
    <Timeline {...timeline} />
  </div>
)}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        hero={frontmatter.hero}
        leadText={frontmatter.leadText}
        addressMap={frontmatter.addressMap}
        partners={frontmatter.partners}
        services={frontmatter.services}
        timeline={frontmatter.history}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
        addressMap {
          title,
          address {
            title,
            addressLine1,
            addressLine2,
            postcode
          },
          telephone {
            title,
            phoneNumberOne,
            phoneNumberTwo
          },
          openingHours {
            title,
            monFriLabel,
            monFriTime,
            satSunLabel,
            satSunTime
          }
        }
        partners {
          title,
          text
        }
        services {
          title,
          serviceList {
            icon,
            text
          }
        }
        history {
          title,
          timeline {
            year,
            text,
            featuredImage {
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
  }
`
