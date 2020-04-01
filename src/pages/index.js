import React from "react";
import Layout from "../layout";
import Typewriter from "../components/Typewriter";
const IndexPage = () => {
  return (
    <>
      <Layout>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-light is-size-1">Hello.</h1>
              <h1 className="title has-text-light">My name is Nick Zhang.</h1>
              <Typewriter />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;
