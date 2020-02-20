import React from 'react'
import PropTypes from 'prop-types'
import {SupportPageTemplate } from '../../templates/support-page'

const SupportPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <SupportPageTemplate
        hero={data.hero || {}}
        leadText={data.leadText || ""}
        volunteer={data.volunteer || {}}
        donateItems={data.donateItems || {}}
        superheroes={data.superheroes || {}}
        ctaBlock={data.ctaBlock || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

SupportPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SupportPagePreview
