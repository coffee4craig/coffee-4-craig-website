import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const DonateWidgetTemplate = ({
  title
}) => (
  <div>
    {title}
  </div>
)

const DonateWidget = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <DonateWidgetTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}

DonateWidget.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default DonateWidget

export const pageQuery = graphql`
  query DonateWidget {
    markdownRemark(frontmatter: { templateKey: { eq: "donate-widget" } }) {
      frontmatter {
        title
      }
    }
  }
`