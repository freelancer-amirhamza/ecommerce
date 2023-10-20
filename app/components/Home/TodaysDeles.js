import { DEALS } from '@/app/data/products';
import ProductsCard from '../Products/ProductsCard';
import SectionHeading from '../shared/SectionHeading';


// const OFFERS = [
//     {
//         category: "FOOD POUCH",
//         title: "New Snacks Release",
//         img: "1"
//     },
//     {
//         category: "itea jsc",
//         title: "Happy Tea 100% Organic. From $29.9",
//         img: "2"
//     },
//     {
//         category: "Soda Brand",
//         title: "Soda Can Box 24 Pieces - 30% OFF",
//         img: "3"
//     },
//     {
//         category: "farmart",
//         title: "Fresh Meat Saugage. BUY 2 GET 1!",
//         img: "4"
//     },
//     {
//         category: "Soda Brandt",
//         title: "Soda Can Box 24 Pieces - 30% OF",
//         img: "5"
//     },
// ]

const TodaysDeles = () => {
    return (
        <section className="pt-5 pb-14">
            <div className="container">
            <SectionHeading
                    title="Top Saver Today"
                    moreText="All Offers"
                />
                {/* Products slider */}
                <div className="flex items-start w-full gap-7 overflow-x-auto
                 mt-5 pt-5 pb-14 pl-2 -ml-2 ">
                  {DEALS.map((product, index) => (
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

export default TodaysDeles