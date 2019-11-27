import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        homepageHero={data.homepageHero || {}}
        quote={data.quote || {}}
        video={data.video || {}}
        feature={{
          title: entry.getIn(['data', 'feature', 'title']),
          text: entry.getIn(['data', 'feature', 'text']),
          primaryButtonText: entry.getIn(['data', 'feature', 'primaryButtonText']),
          secondaryButtonText: entry.getIn(['data', 'feature', 'secondaryButtonText']),
          featureImage: {
            image: getAsset(entry.getIn(['data', 'feature', 'featureImage', 'image'])),
            alt: entry.getIn(['data', 'feature', 'featureImage', 'alt']),
          },
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
