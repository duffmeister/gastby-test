import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"

import SEO from "../../components/seo"
import Hero from "../../components/hero"
import Features from "../../components/features"
import Explainer from "../../components/explainer"
import Plan from "../../components/plan"
import SimpleLogos from "../../components/simplelogos"
import FAQ from "../../components/faq"
import Pricing from "../../components/pricing"
import Tasks from "../../components/tasks"
import Testimonials from "../../components/testimonials"
import CTA from "../../components/cta"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import partnerLogo from "../../images/shopify-partner-logo.png"
import partnerLogos from "../../images/partner-logos@4x.png"

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "unlimited-hero@4x.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    findProblemsImage: file(relativePath: { eq: "find-problems@4x.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    greatJobImage: file(relativePath: { eq: "great-job@4x.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    taskCompletedImage: file(relativePath: { eq: "task-completed@4x.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const UnlimitedPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span><u>Unlimited</u> Shopify technical help </span>)}
      dek="Focus on building your business. Send us unlimited tasks. One monthly subscription."
      hero={
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      }
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
          text: "You can blitz through you todo list with 1 business day response rate 100% of the time."
        },
        {
          icon: "ti-heart",
          heading: "Help you can depend on",
          text: "You don't need to worry about HR issues, interviews, expensive agencies, or flakey contractors."
        },
        {
          icon: "ti-star",
          heading: "Work with Shopify all stars",
          text: "You'll love working with a team that really know's thier Shopify tech and how to make your store amazing."
        }
      ]}
    />
    <SimpleLogos
      logos={partnerLogos}
    />
    <Explainer
      sections={[
        {
          heading:"Get more done",
          image: <Img fluid={data.findProblemsImage.childImageSharp.fluid} />,
          text:"You'll work with developers that can be human, work fast, and are easy to work with. Most of all you'll work with people that are willing to be invested in you and your success. You know that feeling when you work with great people? You just move faster, spend less time discussing things everyone 'gets it'."
        },
        {
          heading:"Move fast",
          image: <Img fluid={data.taskCompletedImage.childImageSharp.fluid} />,
          text:"Talk about the hub, proactive, and real time communications, zoom meetings? image? etc. You'll love working with our developers, they are some of the finest and brightest in the industry (they've worked at some of the largest brands too)"
        },
        {
          heading:"Waste less time",
          image: <Img fluid={data.greatJobImage.childImageSharp.fluid} />,
          text:"You know that feeling when you work with great people? You just move faster, spend less time discussing things everyone 'gets it'."
        }
      ]}
    />
    <Plan
      headline="How it works"
      icon="ti-map-alt"
      steps={[
        {heading:'Create your tasks', text:'Send your todo list, wish list, and any ad hoc requests as they come.'},
        {heading:'Work with an expert', text:'Watch your task list disappear with real time updates on progress.'},
        {heading:'Do your thing', text:'Focus on growing your business and keeping your customers happy.'}
      ]}
    />
    <Testimonials/>
    <Tasks
      icon="ti-check-box"
      headline="What can you get done?"
      dek="Check out these recently completed tasks for happy store owners."
      tasks={[
        {heading:'Add and style gifting options to the checkout', type:'support', time:'2 days', icon:'ti-support', csat:9},
        {heading:'Add description text to the collection pages', type:'support', icon:'ti-support', time:'1 days', csat:10},
        {heading:'Add zoomable images to the theme', type:'support', icon:'ti-support',time:'3 days', csat:8},
        {heading:'Look into lighthouse performance score', type:'investigate', icon:'ti-light-bulb', time:'2 days', csat:9},
        {heading:'Investigate why sales spiked on Friday', type:'report', icon:'ti-write', time:'1 days', csat:10},
        {heading:'Fix spacing below the image carousel', type:'support', icon:'ti-support', time:'1 days', csat:9},
        {heading:'Fix an error with in the theme', type:'support', time:'1 days', icon:'ti-support', csat:10},
        {heading:'Solve the issues with google shopping integration', type:'support', time:'3 days', icon:'ti-support', csat:9},
      ]}
    />
    <FAQ/>
    <CTA/>
  </Layout>
)

export default UnlimitedPage
