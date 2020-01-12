import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Feature from '../components/Feature';
import Credits from '../components/Credits';
import Quote from '../components/Quote';
import Video from '../components/Video';
import Friends from '../components/Friends';
import HomepageHero from '../components/HomepageHero';
import FullWidthImage from '../components/FullWidthImage';
import FriendsModal from '../components/FriendsModal';

export const IndexPageTemplate = ({
	homepageHero,
	fullWidthImage,
	quote,
	video,
	feature,
	friends,
	credits,
}) => {
	const [modalActive, setModalActive] = useState(false);
	const [activeFriend, setActiveFriend] = useState({});
	return (
		<div>
			<HomepageHero {...homepageHero} />
			<FullWidthImage {...fullWidthImage} />
			<Quote {...quote} />
			<Video {...video} />
			<Feature {...feature} />
			<Friends
				{...friends}
				toggleModal={setModalActive}
				toggleFriend={setActiveFriend}
			/>
			{modalActive ? (
				<FriendsModal {...activeFriend} toggleModal={setModalActive} />
			) : null}
			<Credits {...credits} />
		</div>
	);
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				homepageHero={frontmatter.homepageHero}
				fullWidthImage={frontmatter.fullWidthImage}
				quote={frontmatter.quote}
				video={frontmatter.video}
				feature={frontmatter.feature}
				friends={frontmatter.friends}
				credits={frontmatter.credits}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				homepageHero {
					title
					subtitle
					donationTitle
					donationDescription
					donateButtonText
				}
				fullWidthImage {
					image {
						childImageSharp {
							fluid(maxWidth: 1200, quality: 64) {
								...GatsbyImageSharpFluid
							}
						}
					}
					alt
				}
				quote {
					quoteText
					quoteSource
				}
				video {
					videoId
				}
				feature {
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
					featureImage {
						image {
							childImageSharp {
								fluid(maxWidth: 1200, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						alt
					}
				}
				friends {
					title
					friendsList {
						profileImage {
							image {
								childImageSharp {
									fluid(maxWidth: 1200, quality: 64) {
										...GatsbyImageSharpFluid
									}
								}
							}
							alt
						}
						name
						bio
					}
				}
				credits {
					title
					creditList {
						logo {
							image {
								childImageSharp {
									fluid(maxWidth: 1200, quality: 64) {
										...GatsbyImageSharpFluid
									}
								}
							}
							alt
						}
						link {
							url
							target
						}
					}
				}
			}
		}
	}
`;
