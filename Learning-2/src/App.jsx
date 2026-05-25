import React from 'react'
import Section1 from './Components/Section1/Section1.jsx'
import Section2 from './Components/Section2/Section2.jsx'

const App = () => {

const imageContainerContent = [

  {
    mainline: "Prime Customers, that have access to bank credit and are satisfied with the current product",

    buttonText: "Satisfied",

    contentUrl: "https://plus.unsplash.com/premium_photo-1674055047975-70b79b84d871?w=600&auto=format&fit=crop&q=60"
  },

  {
    mainline: "Established Customers having full banking access and satisfaction with existing financial solutions",

    buttonText: "Growing",

    contentUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&auto=format&fit=crop&q=60"
  },

  {
    mainline: "Customers with limited access to financial services who need simple and affordable banking solutions",

    buttonText: "Emerging",

    contentUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60"
  },

  {
    mainline: "Young entrepreneurs exploring digital banking tools for faster payments and smarter investments",

    buttonText: "Innovative",

    contentUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&auto=format&fit=crop&q=60"
  },

  {
    mainline: "Frequent online shoppers seeking secure transactions and rewarding cashback banking experiences",

    buttonText: "Active",

    contentUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60"
  },

  {
    mainline: "Small business owners requiring flexible financial support and reliable banking infrastructure",

    buttonText: "Business",

    contentUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&auto=format&fit=crop&q=60"
  }

]

  return (
    <div>
      <Section1 contentData = {imageContainerContent}/>
      <Section2/>
    </div>
  )
}

export default App