import React from "react";
import Layout from "../layout";
import Typewriter from "../components/Typewriter";
import List from "../components/List";
import { Link } from "gatsby";

const dummyData = [
  {
    slug: "/slug1/",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    slug: "/slug2/",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    slug: "/slug3/",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

const renderArticlePreview = ({ slug, title }) => {
  return (
    <Link className="preview" key={slug} to="/">
      <h5 className="subtitle is-size-5">{title}</h5>
    </Link>
  );
};

const IndexPage = () => {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">Hello.</h1>
            <h1 className="title">My name is Nick Zhang.</h1>
            <Typewriter
              data={[
                "I code JavaScript.",
                "I love React.",
                "Something really really long."
              ]}
            />
          </div>
        </div>
      </section>
      <Layout>
        <section className="section">
          <h1 className="title">Latest Content</h1>
          <List items={dummyData} render={renderArticlePreview} />
        </section>
        {/* <section className="section">
          <h1 className="title">Projects</h1>
          <List items={dummyData} render={renderArticlePreview} />
        </section>
        <section className="section">
          <h1 className="title">Playground</h1>
          <List items={dummyData} render={renderArticlePreview} />
        </section> */}
      </Layout>
    </>
  );
};

export default IndexPage;
