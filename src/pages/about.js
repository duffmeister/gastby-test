import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span>Providing easy access to the <u>world’s best</u> Shopify experts.</span>)}
      dek="Focus on building your business. Send us unlimited tasks. One monthly subscription. Lightning fast turnaround"
      cta="Try for free"/>
    <Features
      headline={(<span>Our <span class="font-weight-bold">Story</span></span>)}
      dek="Lorem ipsum or some shit"
      nuts={[
        {
          icon: "ti-settings",
          heading: "Test",
          text: "Some text"
        }
      ]}
    />
    <Features
      headline={(<span><span class="font-weight-bold">Values</span> we live by</span>)}
      dek="Lorem ipsum or some shit"
      nuts={[
        {
          icon: "ti-settings",
          heading: "Test",
          text: "Some text"
        }
      ]}
    />

    Explainer.....We giving back, we have global reach, we hire the best

    <Features
      headline={(<span><span class="font-weight-bold">Giving</span> something back</span>)}
      dek="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <Contact/>
  </Layout>
)

export default IndexPage
