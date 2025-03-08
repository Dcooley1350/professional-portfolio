import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

function AboutImg({ filename, alt }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)|(gif)/" } }) {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  gatsbyImageData(width: 350, placeholder: BLURRED, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

        if (!image) return null;
        if (!image.node.childImageSharp) return null;

        return (
          <GatsbyImage
            className="rounded shadow-lg"
            image={image.node.childImageSharp.gatsbyImageData}
            alt={alt || ''}
          />
        );
      }}
    />
  );
}

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
