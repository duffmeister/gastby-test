import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"

import SEO from "../../components/seo"
import Hero from "../../components/hero"
import Features from "../../components/features"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span>Crush your store <u>performance</u></span>)}
      dek="Focus on building your business. Send us unlimited tasks. One monthly subscription. Lightning fast turnaround"
      cta="Try for free"/>
    <Features
      headline={(<span>Everything you need to <span class="font-weight-bold">run your business</span></span>)}
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
