import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import Cards from "../components/cards"
import CTA from "../components/cta"
import FAQ from "../components/faq"
import Footer from "../components/footer"
import Explainer from "../components/explainer"
import Plan from "../components/plan"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span>Get time back to focus on running your business.</span>)}
      dek="Focus on building your business. Send us unlimited tasks. One monthly subscription."
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
    <Explainer/>
    <Cards/>
    <Plan/>
    <FAQ/>
    <CTA/>
    <Footer/>
  </Layout>
)

export default IndexPage
