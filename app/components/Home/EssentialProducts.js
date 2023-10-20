import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import { ESSENTIAL } from '@/app/data/products'
import ProductsCard from '../Products/ProductsCard'

const EssentialProducts = () => {
  return (
    <section className="pt-5 pb-14">
    <div className="container">
    <SectionHeading
            title="Essential Products"
            moreText="All Offers"
            categories={["All", "Grocery", "Fruits", "Vegetables", "Meat", "Fish"]}

        />
        {/* Products slider */}
        <div className="flex items-start w-full gap-7 overflow-x-auto
         mt-5 pt-5 pb-14 pl-2 -ml-2 ">
          {ESSENTIAL.map((product, index) => (
             <ProductsCard ductsCard
                    key={index}
                    product={product}
             />    
          ) )}               
        </div>
    </div>
</section>
  )
}

export default EssentialProducts