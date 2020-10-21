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

import partnerLogo from "../../images/shopify-partner-logo.png"
import partnerLogos from "../../images/partner-logos@4x.png"
import hero from "../../images/unlimited-hero@4x.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      headline={(<span><u>Unlimited</u> Shopify technical help </span>)}
      dek="Focus on building your business. Send us unlimited tasks. One monthly subscription."
      image={hero}
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
          text: "100% 1 day response rate helps you blitz through your todo list."
        },
        {
          icon: "ti-heart",
          heading: "Help you can depend on",
          text: "0 HR issues, 0 interviews, 0 expensive agencies, 0 flakey contractors."
        },
        {
          icon: "ti-star",
          heading: "All star Shopify experts",
          text: "100% of our team are experts at Shopify and eveyone runs thier own store too."
        }
      ]}
    />
    <SimpleLogos
      logos={partnerLogos}
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
      headline="Check out what you can do"
      dek="Check out these recently completed tasks for happy store owners"
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

export default IndexPage
