import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import Pricing from "../components/pricing"
import Cards from "../components/cards"
import FAQ from "../components/faq"

import heroImage from "../images/gatsby-astronaut.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Pricing/>
    <FAQ/>
  </Layout>
)

export default IndexPage
