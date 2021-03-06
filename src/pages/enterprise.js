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

import Plan from "../components/plan"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import partnerLogo from "../images/shopify-partner-logo.png"
import partnerLogos from "../images/partner-logos@4x.png"

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "enterprise-hero@4x.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const EnterprisePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={<span>Your <u>Shopify</u> CTO...as a Service.</span>}
      dek="Focus on building your business. Leave the tech to us."
      hero={
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      }
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
        {
          heading:"Get time to focus on the big stuff",
          text:"Get the tactical work and vendor management noise off your plate and enjoy time back to focus on the strategic initiatives that impact your business."
        },
        {
          heading:"Resolve issues before they impact customers.",
          text:"Save hundreds of thousands of dollars in lost customers with Hawkeye our enterprise grade monitoring platform. Our seasoned on call team will be watching your site 24/7."
        },
        {
          heading:"Always be one step ahead",
          text:"With proactive status updates, enterprise SLAs and weekly checkins you’ll always know the status of hot issues, and be able to reliably make commitments to your stakeholders."
        },
        {
          heading:"Move at the speed of your ideas",
          text:"Make agility your competitive advantage, with our talent network you’ll spend less time searching for the help you need to make your ideas a reality."
        },


      ]}
    />
    <Plan
      headline={<span>Welcome to <u>Managed Commerce</u></span>}
      icon="ti-map-alt"
      dek={<span>
      As one of the fastest growing managed service providers for Shopify we
      understand your problems running a Shopify store at scale are complex –
      multiple app vendors, unclear support channels, flakey integrations,
      non-technical digital agencies, and an unpredictable talent market.<br/><br/>
      The Managed Commerce idea is simple, we take all that off your plate,
      we are your tech team, your “CTO”, and your single point of contact for
      Shopify tech requests. We approach this from the perspective of our
      founders’ deep tech background running sites like Amazon, Groupon, Google
      and Microsoft. You’ll not find a more dependable, responsive, and
      enterprise ready technical partner for your ecommerce business.</span>}
      steps={[
        {heading:'Create your tasks', text:'Send your todo list, wish list, and any ad hoc requests as they come.'},
        {heading:'Work with an expert', text:'Watch your task list disappear with real time updates on progress.'},
        {heading:'Do your thing', text:'Focus on growing your business and keeping your customers happy.'}
      ]}
    />

    <Cards
      headline="Your portfolio of enterprise services"
      dek=""
      cards={[
        {heading:'MC.Staffing', text:'Quickly add full-time and contingent staff with shopify experience to your team.'},
        {heading:'MC.Content', text:'Innovative content solutions for native and branded media campaigns.'},
        {heading:'Research', text:'Fact and science based insights for e-commerce leaders'},
        {heading: 'Labs', text:'Future facing Shopify e-commerce tools and innovations'}
      ]}
    />
  </Layout>
)

export default EnterprisePage
