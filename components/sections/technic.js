import { useState, useRef } from "react"
import { BannerFormula } from "../banner"
import { Swiper, SwiperSlide } from 'swiper/react';

const formulas = [
    {
        title: "xxx",
        logo: "/images/formula/logo-2022.png",
        child: [
            {
                img_path: "/images/banner/formula/ex1.png"
            },
            {
                img_path: "/images/banner/formula/ex2.png"
            },
            {
                img_path: "/images/banner/formula/ex3.png"
            },
            {
                img_path: "/images/banner/formula/ex4.png"
            },
        ]
    },
    {
        title: "xxx",
        logo: "/images/formula/logo-fd.png",
        child: [
            {
                img_path: "/images/banner/formula/ex1.png"
            },
            {
                img_path: "/images/banner/formula/ex2.png"
            },
            {
                img_path: "/images/banner/formula/ex3.png"
            },
        ]
    },
    {
        title: "xxx",
        logo: "/images/formula/logo-js.png",
        child: [
            {
                img_path: "/images/banner/formula/ex1.png"
            },
            {
                img_path: "/images/banner/formula/ex2.png"
            },
        ]
    },
]

const Technic = () => {

    const childFormula = useRef(null)
    const [activeVal, setActiveBanner] = useState(0)
    const swiperPartnerConfig = {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

    const renderFormulaSwiper = (formulas, activeVal) => {
        return formulas.map(({ title, logo }, i) => (
            <SwiperSlide key={i} onClick={() => {
                setActiveBanner(i)
                childFormula.current.swiper.slideTo(i)
            }}>
                <BannerFormula status={activeVal == i} title={title} logo={logo} />
            </SwiperSlide>
        ))
    }

    const renderFormulaSwiperChild = (formulas, activeVal) => {
        return formulas.map(({ child }, i) => (
            <SwiperSlide key={i}>
                <div className='lg:relative'>
                    <img src='/images/button/big-board.png' className='w-full hidden sm:block lg:block' />
                </div>
                <div className="xl:absolute md:absolute top-0 w-full h-full lg:py-10 xl:py-10">
                    <div className="flex flex-wrap gap-5 justify-center">
                        {renderFormulaChild(child, activeVal)}
                    </div>
                </div>
            </SwiperSlide>
        ))
    }

    const renderFormulaChild = (child, activeVal) => {
        return child.map(({ img_path }, i) => (
            <div key={i} className="flex-none max-w-100 h-full">
                <img className="mx-auto h-full w-full" src={img_path} />
            </div>
        ))
    }

    return (
        <section className="min-h-screen scroll-mt-24 select-none" id="technic">
            <div className="p-10">
                <img src="/icons/formula.png" className="mx-auto" />
            </div>
            <div className="container pt-10">
                <Swiper
                    spaceBetween={5}
                    breakpoints={swiperPartnerConfig}
                >
                    {renderFormulaSwiper(formulas, activeVal)}
                </Swiper>
            </div>
            <div className="container mx-auto pt-10">
                <div className="flex items-stretch">
                    <div className="flex-auto w-4/5 px-3">
                        <div className="relative w-full h-full">
                            <Swiper
                                ref={childFormula}
                                spaceBetween={0}
                                slidesPerView={1}
                                onSlideChange={(sw) => {
                                    setActiveBanner(sw.activeIndex)
                                }}
                            >
                                {renderFormulaSwiperChild(formulas, activeVal)}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technic