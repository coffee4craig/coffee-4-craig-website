import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const SiteSettings = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <h1>{frontmatter.siteTitle}</h1>
  )
}

SiteSettings.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SiteSettings;

export const pageQuery = graphql`
  query SiteSettings {
    markdownRemark(frontmatter: { templateKey: { eq: "site-settings" } }) {
      frontmatter {
          siteTitle
      }
    }
  }
`