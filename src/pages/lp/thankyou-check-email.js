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
      dek={<span>We've sent an email with a confirmation link.<br/><br/>Here's what's next:</span>}
      bullets={[
        {icon: "ti-arrow-right", text: "Confirm your email address and set a password."},
        {icon: "ti-arrow-right", text: "We'll do a review of your request to clarify any details."},
        {icon: "ti-arrow-right", text: "We'll assign it to an expert and get to work."}
      ]}/>
    />
  </Layout>
)

export default ThanksPage
