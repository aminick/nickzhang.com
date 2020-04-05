import React from "react";
import Layout from "../layout";
import Typewriter from "../components/Typewriter";
import List from "../components/List";
import { Link, graphql } from "gatsby";

const renderArticlePreview = ({ node }) => {
  const {
    id,
    frontmatter: { title, tag, date },
    fields: { slug },
  } = node;
  return (
    <div className="preview-container">
      <Link className="preview-link" key={id} to={slug}>
        <h3 className="article-title">{title}</h3>
        <p className="article-date">{date}</p>
      </Link>
    </div>
  );
};

const IndexPage = ({ data }) => {
  return (
    <div className="index-page">
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="">Hello.</h1>
            <h3 className="">My name is Nick Zhang.</h3>
            <Typewriter
              data={[
                "I code JavaScript.",
                "I love React.",
                "Something really really long.",
              ]}
            />
          </div>
        </div>
      </section>
      <Layout>
        <section className="section">
          <div className="section-header">
            <h1 className="section-title">Latest Articles</h1>
            <Link className="section-option button" to="/about">
              View all
            </Link>
          </div>
          <List
            items={data.allMarkdownRemark.edges}
            render={renderArticlePreview}
          />
        </section>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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
