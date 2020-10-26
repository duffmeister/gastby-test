import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"

import SEO from "../../components/seo"
import Hero from "../../components/hero"
import Features from "../../components/features"

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <Hero
      headline={<span>Thank you! Check your <u>email</u></span>}
      dek="You are all set. We've sent you an email with some instructions to finish creating your account."
    />
  </Layout>
)

export default ThanksPage
