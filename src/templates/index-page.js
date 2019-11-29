import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Feature from '../components/Feature'
import Credits from '../components/Credits'
import Quote from '../components/Quote'
import Video from '../components/Video'
import Friends from '../components/Friends'
import HomepageHero from '../components/HomepageHero'

const friends = [
  {
    image: {
      "src": "../img/make-a-dif.png",
      "alt": "profile picture"
    },
    "name": "Peter",
    "bio": "By donating just £10, you can provide two pairs of thermal gloves for those sleeping rough."
  },
  {
    image: {
      "src": "../img/make-a-dif.png",
      "alt": "profile picture"
    },
    "name": "Peter",
    "bio": "By donating just £10, you can provide two pairs of thermal gloves for those sleeping rough."
  },
  {
    image: {
      "src": "../img/make-a-dif.png",
      "alt": "profile picture"
    },
    "name": "Peter",
    "bio": "By donating just £10, you can provide two pairs of thermal gloves for those sleeping rough."
  },
  {
    image: {
      "src": "../img/make-a-dif.png",
      "alt": "profile picture"
    },
    "name": "Peter",
    "bio": "By donating just £10, you can provide two pairs of thermal gloves for those sleeping rough."
  },
  {
    image: {
      "src": "../img/make-a-dif.png",
      "alt": "profile picture"
    },
    "name": "Peter",
    "bio": "By donating just £10, you can provide two pairs of thermal gloves for those sleeping rough."
  },
  {
    image: {
      "src": "../img/make-a-dif.png",
      "alt": "profile picture"
    },
    "name": "Peter",
    "bio": "By donating just £10, you can provide two pairs of thermal gloves for those sleeping rough."
  }
];

const credits = [
  {
      "image": {
        "src": "../img/bbc-news.png",
        "alt": "company logo"
      },
      "link": {
        "url": "https://www.w3schools.com",
        "target": "_blank"
      }
  },
  {
    "image": {
      "src": "../img/bbc-news.png",
      "alt": "company logo"
    },
    "link": {
      "url": "https://www.w3schools.com",
      "target": "_blank"
    }
  },
  {
    "image": {
      "src": "../img/bbc-news.png",
      "alt": "company logo"
    },
    "link": {
      "url": "https://www.w3schools.com",
      "target": "_blank"
    }
  },
  {
    "image": {
      "src": "../img/bbc-news.png",
      "alt": "company logo"
    },
    "link": {
      "url": "https://www.w3schools.com",
      "target": "_blank"
    }
  },
]

export const IndexPageTemplate = ({
  homepageHero,
  quote,
  video,
  feature
}) => (
  <div>
    <HomepageHero 
      {...homepageHero}
    />
    <Quote
      {...quote}
    />
    <Video
      {...video}
    />
    <Feature
      {...feature}
    />
    <Friends friends={friends} title="Here are just a few people we now call our friends." />
    <Credits title="As featured in…" credits={credits} />
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        homepageHero={frontmatter.homepageHero}
        quote={frontmatter.quote}
        video={frontmatter.video}
        feature={frontmatter.feature}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        homepageHero {
          title,
          subtitle,
          donationTitle,
          donationDescription,
          donateButtonText
        }
        quote {
          quoteText,
          quoteSource
        }
        video {
          videoId
        }
        feature {
          title,
          text,
          primaryButtonText,
          secondaryButtonText,
          featureImage {
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
`