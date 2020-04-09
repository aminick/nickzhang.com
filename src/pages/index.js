import React from "react";
import Layout from "../layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "../components/Typewriter";
import List from "../components/List";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { formatDate } from "../utils";

const renderArticlePreview = ({ node }) => {
  const {
    id,
    frontmatter: { title, date },
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
    <div className="project-preview-container" key={id}>
      <div className="project-thumbnail">
        <Img
          className="thumbnail-wrapper"
          fluid={thumbnail.childImageSharp.fluid}
        ></Img>
      </div>
      <div className="project-meta">
        <div className="header">
          <h4 className="subtitle-custom">{title}</h4>
          <div className="project-options header">
            <a className="button" href={sourceUrl} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              Source
            </a>
            <a className="button" href={projectUrl} target="_blank">
              View
            </a>
          </div>
        </div>
        <h4 className="description">{description}</h4>
        <div className="project-options bottom">
          <a className="button" href={sourceUrl} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            Source
          </a>
          <a className="button" href={projectUrl} target="_blank">
            View
          </a>
        </div>
      </div>
    </div>
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
        <div className="hero-foot">
          <div className="down-pointer">
            <a href="#main">👇🏻</a>
          </div>
        </div>
      </section>
      <Layout>
        <div id="main"></div>
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
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
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
