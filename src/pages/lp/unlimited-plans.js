import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"

import SEO from "../../components/seo"
import Hero from "../../components/hero"
import Features from "../../components/features"
import Explainer from "../../components/explainer"
import Plan from "../../components/plan"
import FAQ from "../../components/faq"
import CTA from "../../components/cta"
import Footer from "../../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span><u>Unlimited</u> help from a Shopify developer</span>)}
      dek="Focus on building your business. Send us unlimited tasks. One monthly subscription."
      cta="Try for free"/>
    <Features
      nuts={[
        {
          icon: "ti-timer",
          heading: "Blazing fast turnaround",
          text: "Blitz through your list of site tweaks and updates."
        },
        {
          icon: "ti-heart",
          heading: "Help you can depend on",
          text: "No HR issues, interviews, expensive agencies, or flakey contractors."
        },
        {
          icon: "ti-star",
          heading: "All star Shopify experts",
          text: "Work with an awesome team of top Shopify experts."
        }
      ]}
    />
    <Explainer/>
    <Plan/>
    <CTA/>
    <FAQ/>
    <Footer/>
  </Layout>
)

export default IndexPage
