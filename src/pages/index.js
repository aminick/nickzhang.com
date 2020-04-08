import React from "react";
import Layout from "../layout";
import Typewriter from "../components/Typewriter";
import List from "../components/List";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { formatDate } from "../utils";

const renderArticlePreview = ({ node }) => {
  const {
    id,
    frontmatter: { title, tag, date },
    fields: { slug },
    timeToRead,
  } = node;
  return (
    <div className="preview-container" key={id}>
      <Link className="preview-link" to={slug}>
        <h4 className="article-title subtitle-custom">{title}</h4>
        <p className="article-date subtitle-custom">
          {formatDate(date)} • {timeToRead} min read
        </p>
      </Link>
    </div>
  );
};

const renderProjectPreview = ({ node }) => {
  const {
    id,
    frontmatter: { title, description, thumbnail, date, sourceUrl, projectUrl },
  } = node;
  return (
    <a
      className="project-preview-container"
      href={projectUrl}
      target="_blank"
      key={id}
    >
      <div className="project-thumbnail">
        <Img
          className="thumbnail-wrapper"
          fluid={thumbnail.childImageSharp.fluid}
        ></Img>
      </div>
      <div className="project-meta">
        <h4 className="subtitle-custom">{title}</h4>
        <h4 className="description">{description}</h4>
        {/* <a className="button" href={sourceUrl}>
          Source
        </a>
        <a className="button" href={projectUrl}>
          View
        </a> */}
      </div>
    </a>
  );
};

const IndexPage = ({ data }) => {
  const { projects } = data;

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
        <div className="container">
          <section className="section">
            <div className="section-header">
              <h1 className="title-custom">Latest Articles</h1>
              <Link className="section-option button" to="/blog">
                View all
              </Link>
            </div>
            <List
              items={data.allMarkdownRemark.edges}
              render={renderArticlePreview}
            />
          </section>
          <section className="section">
            <div className="section-header">
              <h1 className="section-title title-custom">Projects</h1>
            </div>
            <List items={projects.edges} render={renderProjectPreview} />
          </section>
        </div>
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
      limit: 2
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
          timeToRead
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fields: { type: { eq: "projects" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
            description
            projectUrl
            sourceUrl
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`;
