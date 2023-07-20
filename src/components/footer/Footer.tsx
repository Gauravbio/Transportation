import React from 'react'
import FooterItem from './FooterItem'

const footer=[
  {
    heading: "Quick Links",
    items:[
      {
        title:"Home",
        link: "/",
      },
      {
        title:"About us",
        link: "/about",
      },
      {
        title:"Tracking",
        link: "/tracking",
      },
      {
        title:"Careers",
        link: "/career",
      },
      {
        title:"Contact us",
        link: "/contact",
      },
    ]
  },

  {
    heading: "Our Services",
    items:[
      {
        title:"Partload",
        link: "/partload",
      },
      {
        title:"Truck load",
        link: "/about",
      },
      {
        title:"Trailers",
        link: "/trailers",
      },
      {
        title:"Containers",
        link: "/containers",
      },
      {
        title:"Warehousing",
        link: "/warehouse",
      },
    ]
  },
  {
    heading: "our Support",
    items:[
      {
        title:"Terms of Services",
        link: "/terms-services",
      },
      {
        title:"Privacy Policy",
        link: "/privacy-policy",
      },
      {
        title:"Refund Policy",
        link: "/refund-policy",
      },
      {
        title:"Shipping Policy",
        link: "/shipping-policy",
      },
    ]
  },
  {
    heading: "Forms",
    items:[
      {
        title:"Tracking",
        link: "/tracking",
      },
      {
        title:"Pickup Request",
        link: "/pickup-request",
      },
      {
        title:"Vendor Registration",
        link: "/vendor-registration",
      },
      {
        title:"Business Associate",
        link: "/business-associate",
      },
      {
        title:"Service Compliant",
        link: "/service-compliant",
      },
    ]
  },
  
]

const Footer = () => {
  return (
    <footer className='bg-green-300 mt-10'>
      <div className='flex justify-center flex-col md:flex-row'>
        {
          footer.map((item)=> (
            <FooterItem key={item.heading} title={item.heading} content={item.items} />
          ))
        }
        </div>
        <div className='mx-auto bg-green-400 text-center'>
            @ Copyrights All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer