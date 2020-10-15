import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import Explainer from "../components/explainer"
import Cards from "../components/cards"
import Contact from "../components/contact"

import partnerLogo from "../images/shopify-partner-logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span>World class managed services for <u>Shopify</u> stores.</span>)}
      dek="Focus on building your business. Send us unlimited tasks. One monthly subscription."
      cta="Try for free"
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
    <Explainer
      sections={[
        {heading:"Get more done", text:"You'll love working with our developers, they are some of the finest and brightest in the industry (they've worked at some of the largest brands too)."},
        {heading:"Move fast", text:"Talk about the hub, proactive, and real time communications, zoom meetings? image? etc."},
        {heading:"Waste less time", text:"You'll work with developers that can be human, work fast, and are easy to work with. Most of all you'll work with people that are willing to be invested in you and your success."}
      ]}
    />
    <Cards
      icon="ti-layout-grid3"
      headline={(<span>Flexible support for your <u>Shopify</u> business.</span>)}
      dek="Enterprise grade services specifically designed to work with Shopify stores"
      cards={[
        {heading:"MC.Tech", class:"large", text:"Unlimited technical help for your store"},
        {heading:"MC.Content", class:"large", text:"Content creation that delights your customers"},
        {heading:"Bell+South", text:"Shopify design studio"},
        {heading:"MC.Studio", text:"High converting photography and video for your products"},
        {heading:"MC.Service", text:"12/5 and 24/7 outsourced customer support for Shopify stores"},
        {heading:"MC.Staffing", text:"Headhunting and recruiting for world class shopify talent"}
      ]}

    />

    <Contact/>
  </Layout>
)

export default IndexPage
