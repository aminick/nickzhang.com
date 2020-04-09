import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import { formatDate } from "../utils";
import Disqus from "../components/Disqus/Disqus";
import SEO from "../components/SEO/SEO";
import("./prism-dracula.css");

const PostTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: { title, date, category, tags },
    },
  } = data;

  return (
    <Layout>
      <div className="content-container">
        <header className="content-header">
          <h2 className="subtitle-custom">{title}</h2>
          <p className="date">
            {formatDate(date)} • {timeToRead} min read
          </p>
          <div className="tags-container">
            {tags &&
              tags.map((tag) => (
                <Link to="/" className="button" key={tag}>
                  {tag}
                </Link>
              ))}
          </div>
        </header>
        <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default PostTemplate;
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
