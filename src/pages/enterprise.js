import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import Cards from "../components/cards"
import Explainer from "../components/explainer"
import SimpleLogos from "../components/simplelogos"

import partnerLogo from "../images/shopify-partner-logo.png"
import partnerLogos from "../images/partner-logos@4x.png"
import hero from "../images/hero-test@4x.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span>A <u>trusted</u> technical partner for your Shopify store</span>)}
      dek="Focus on building your business. Send us unlimited tasks. One monthly subscription."
      image={hero}
      cta="Find out more"
      ctaLink="/lp/unlimited-plans"
      bullets={[
        {icon: "ti-bar-chart", text: "Improve your conversion rates and performance"},
        {icon: "ti-check-box", text: "Fix bugs and design issues"},
        {icon: "ti-settings", text: "Intall apps an configure integration"}
      ]}/>
    <Features
      logo={partnerLogo}
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
    <SimpleLogos
      logos={partnerLogos}
    />

    <Explainer
      sections={[
        {heading:"MC.Ventures", text:"You'll love working with our developers, they are some of the finest and brightest in the industry (they've worked at some of the largest brands too)."},
        {heading:"MC.Labs", text:"Talk about the hub, proactive, and real time communications, zoom meetings? image? etc."}
      ]}
    />

    <Cards
      headline="Access to the bleeding edge of ecommerce"
      cards={[
        {heading:'MC.Ventures', class:'large', text:'Seed stage investment in innovative ecommerce technology products.'},
        {heading:'MC.Labs', class:'large', text:'Pre-launch early access program'},
      ]}
    />
  </Layout>
)

export default IndexPage
