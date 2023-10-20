import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import { setBackgroundImage } from '@/app/utils/helpers'
import { HEALTHY } from '@/app/data/products'
import BlogCard from './BlogCard '

const HealthDaily = () => {
    return (
        <section className="pt-5 pb-14">
            <div className="container">
                <div className="flex flex-wrap gap-7">
                    <div className="flex-1">
                        <SectionHeading
                            title="Health Daily"
                            moreText="All Articles"
                            noButton
                        />
                        {/* Products slider */}
                        <div className="flex items-center bg-white border-gray-100 rounded-lg mt-8 md:flex-nowrap flex-wrap ">
                            {HEALTHY.map((blog, index) => (
                                <BlogCard
                                    key={index}
                                    {...blog}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-[35%] w-full ">
                        <div className="mb-5 h-full w-full md:px-12 py-10 md:py-14 px-6 rounded-lg"
                       style={setBackgroundImage('https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-content-bg-2.png',{ backgroundPosition: 'bottom center', backgroundColor: '#e4eaee', backgroundSize: 'unset' })} >
                        <div className="flex flex-col text-center">
                            <h2 className="md:text-4xl sm:text-2xl text-2xl font-bold text-title">
                            Shop faster<br />with Farmart App
                            </h2>
                            <span className="text-color text-base font-semibold md:mt-4 mt-3">Available on both iOS & Android</span>
                            <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/app-while-img.png" alt="" className="object-contain w-64 mx-auto mt-5" />
                        </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HealthDaily