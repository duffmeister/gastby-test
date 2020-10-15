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
import Explainer from "../components/explainer"
import Plan from "../components/plan"

import partnerLogo from "../images/shopify-partner-logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span><u>Unlimited</u> Shopify developer help </span>)}
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
    <Plan
      headline="How it works"
      steps={[
        {heading:'Create your tasks', text:'Send your todo list, wish list, and any ad hoc requests as they come.'},
        {heading:'Work with an expert', text:'Watch your task list disappear with real time updates on progress.'},
        {heading:'Do your thing', text:'Focus on growing your business and keeping your customers happy.'}
      ]}

    />
    <FAQ/>
  </Layout>
)

export default IndexPage
