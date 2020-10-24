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
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import partnerLogo from "../images/shopify-partner-logo.png"
import partnerLogos from "../images/partner-logos@4x.png"

export const query = graphql`
  query {
    unlimitedImage: file(relativePath: { eq: "unlimited-hero@4x.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    enterpriseImage: file(relativePath: { eq: "enterprise-hero@4x.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={<span>Your <u>trusted</u> Shopify technical partner</span>}
      dek="Focus on building your business. Let us handle the tech."
      stackImage={partnerLogo}
      bullets={[
        {icon: "ti-bar-chart", text: "Improve your conversion rates and performance"},
        {icon: "ti-check-box", text: "Fix bugs and design issues"},
        {icon: "ti-settings", text: "Intall apps an configure integration"}
      ]}/>
    <SimpleLogos
      logos={partnerLogos}
    />

    <Explainer
      headline={<>Managed Commerce <u>Services</u></>}
      dek="Discover a range of sevices for your business, be it just starting up or growing like crazy"
      sections={[
        {
          heading:"Unlimited Shopify technical help",
          text:"Quickly fix your shopify technical issues with simple access to on demand technical help, all for one monthly fee.",
          image: <Img fluid={data.unlimitedImage.childImageSharp.fluid} />,
          ctaLink:"/lp/unlimited-plans",
          cta:"Read more"
        },
        {
          heading:"Shopify CTO as a Service",
          text:"If you are running a large Shopify store and need a partner to help manage the tech side of your business.",
          image: <Img fluid={data.enterpriseImage.childImageSharp.fluid} />,
          ctaLink: "/enterprise",
          cta:"Enterprise"
        },
        {
          heading:"Shopify headhunting",
          text:"Quickly scale your team with our prevetted hourly and full time staffing services specifically for Shoppify businesses.",
          ctaLink: "/lp/staffing",
          cta:"Read more"
        },
      ]}
    />

    <Cards
      headline="Tap into a broad network of expertise"
      dek="You'll have access to an exceptional talent pool and a broad network of industry experts there for you when you need a little extra support for all aspects of your Shopify business."
      cards={[
        {heading:'MC.Ventures', class:'large', text:'Seed stage investment in innovative ecommerce technology products.'},
        {heading:'MC.Labs', class:'large', text:'Pre-launch early access program'},
      ]}
    />
  </Layout>
)

export default IndexPage
