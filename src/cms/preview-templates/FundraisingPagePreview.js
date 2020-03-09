import React from 'react'
import PropTypes from 'prop-types'
import {FundraisingPageTemplate } from '../../templates/fundraising-page'

const FundraisingPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <FundraisingPageTemplate
        hero={data.hero || {}}
        leadText={data.leadText || ""}
        newRichText={data.newRichText || {}}
        cta={data.cta || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

FundraisingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FundraisingPagePreview
