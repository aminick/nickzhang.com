import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

const PostTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, date, category, tags },
    },
  } = data;

  return (
    <Layout>
      <div className="content-container">
        <header className="content-header">
          <h1>{title}</h1>
          <div className="meta-container">
            <p className="date">{date}</p>
            <div className="tags-container">
              {tags.map((tag) => (
                <Link to="/" className="button" key={tag}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </header>
        <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default PostTemplate;
// export default class PostTemplate extends React.Component {
//   render() {
//     const { data, pageContext } = this.props;
//     const { slug } = pageContext;
//     const postNode = data.markdownRemark;
//     const post = postNode.frontmatter;
//     if (!post.id) {
//       post.id = slug;
//     }

//     return (
//       <Layout>
//         <div>
//           <Helmet>
//             <title>{`${post.title} | ${config.siteTitle}`}</title>
//           </Helmet>
//           <SEO postPath={slug} postNode={postNode} postSEO />
//           <div>
//             <h1>{post.title}</h1>
//             <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
//             <div className="post-meta">
//               <PostTags tags={post.tags} />
//               <SocialLinks postPath={slug} postNode={postNode} />
//             </div>
//             <UserInfo config={config} />
//             <Disqus postNode={postNode} />
//             <Footer config={config} />
//           </div>
//         </div>
//       </Layout>
//     );
//   }
// }

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
