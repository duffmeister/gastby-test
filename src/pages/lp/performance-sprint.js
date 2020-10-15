import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"

import SEO from "../../components/seo"
import Landing from "../../components/landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing
      headline={(<span>Crush your store <u>performance</u></span>)}
      dek="Focus on building your business. Send us unlimited tasks. One monthly subscription. Lightning fast turnaround"
      cta="Contact us to learn more"
      nuts={[
        {
          icon: "ti-settings",
          heading: "Great lighthouse scores",
          text: "Some text"
        },
        {
          icon: "ti-settings",
          heading: "Better ad performance",
          text: "Some text"
        },
        {
          icon: "ti-settings",
          heading: "Higher conversion rates",
          text: "Some text"
        }
      ]}
      />
  </Layout>
)

export default IndexPage
