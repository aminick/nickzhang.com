import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import List from "../components/List";

const renderArticlePreview = ({ node }) => {
  const {
    id,
    frontmatter: { title, tag, date },
    fields: { slug },
  } = node;

  return (
    <div className="preview-container">
      <Link className="preview-link" key={id} to={slug}>
        <h4 className="article-title">{title}</h4>
        <p className="article-date">{date}</p>
      </Link>
    </div>
  );
};

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <section className="section">
          <div className="section-header"></div>
          <List
            items={data.allMarkdownRemark.edges}
            render={renderArticlePreview}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Blog;

export const blogQuery = graphql`
  query BlogsQuery {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "posts" } } }
      sort: { fields: fields___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`;
