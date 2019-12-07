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
  volunteer
 }) => (
  <div>
    <Hero title="Hero" backgroundImage={{}} />
    <LeadText text="Lead Text" />
    <DonateItems title="Donate Items" text="" list={[]} button={{}} />
    <Superheroes title="Superheros" list={[]} />
    <Volunteer {...volunteer}/>
    <CtaBlock title="CTA Block" button={{}} />
  </div>
)

const SupportPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SupportPageTemplate
        title={frontmatter.title}
        volunteer={frontmatter.volunteer}
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
        volunteer {
          title
          buttonText
        }
      }
    }
  }
`
