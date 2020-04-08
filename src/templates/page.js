import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layout";

const PageTemplate = ({ data }) => {
  const {
    markdownRemark: { html },
  } = data;

  return (
    <Layout>
      <div className="content-container">
        <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
      fields {
        slug
        date
      }
    }
  }
`;
