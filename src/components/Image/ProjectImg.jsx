import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

function ProjectImg({ filename, alt }) {
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
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 90)
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

        return <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={alt || ''} />;
      }}
    />
  );
}

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
