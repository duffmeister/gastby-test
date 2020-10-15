import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span>Join a team of <u>incredible</u> Shopify experts.</span>)}
      dek=""
      cta="Find a job"/>
    <Features
      headline={(<span>An amazing company<span class="font-weight-bold"></span></span>)}
      dek="Lorem ipsum or some shit"
      nuts={[
        {
          icon: "ti-settings",
          heading: "Test",
          text: "Some text"
        }
      ]}
    />
  </Layout>
)

export default IndexPage
