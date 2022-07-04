import React, { useState, useRef } from 'react';
import { BannerPartner } from "../banner"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const partners = [
    {
        title: "PG Soft",
        logo: "/images/game/PG-SOFT-w.png",
    },
    {
        title: "Askmebet",
        logo: "/images/game/amb-logo.png",
    },
    {
        title: "SimplePlay",
        logo: "/images/game/simpleplay-w.png",
    },
    {
        title: "Microgaming",
        logo: "/images/game/microgaming.png",
    },
]

const Partner = () => {
    const childPartner = useRef(null)
    const swiperPartnerConfig = {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
    }

    const [activeVal, setActiveBanner] = useState(0)
    const [controlledSwiper, setControlledSwiper] = useState(0)

    const renderPartnerSwiper = (partners, activeVal) => {
        return partners.map(({ title, logo }, i) => (
            <SwiperSlide key={i} onClick={() => {
                setActiveBanner(i)
                childPartner.current.swiper.slideTo(i)
            }}>
                <BannerPartner status={activeVal == i} title={title} logo={logo} />
            </SwiperSlide>
        ))
    }

    const renderPartnerSwiperChild = (partners, activeVal) => {
        return partners.map(({ title, logo }, i) => (
            <SwiperSlide key={i} onClick={() => { setActiveBanner(i) }}>
                <div className="lg:relative">
                    <img src="/images/button/big-board.png" />
                </div>

            </SwiperSlide>
        ))
    }

    const nextBanner = () => {
        if (activeVal + 1 === partners.length) {
            setActiveBanner(0)
            childPartner.current.swiper.slideTo(0)

            return
        }

        setActiveBanner(activeVal + 1)
        childPartner.current.swiper.slideTo(activeVal + 1)
        return
    }

    const prevBanner = () => {
        if (activeVal - 1 < 0) {
            setActiveBanner(partners.length - 1)
            childPartner.current.swiper.slideTo(partners.length - 1)
            return
        }

        setActiveBanner(activeVal - 1)
        childPartner.current.swiper.slideTo(activeVal - 1)
        return
    }

    return (
        <section className="min-h-screen scroll-mt-24 select-none" id="partner">
            <div className="p-10">
                <img src="/icons/partner.png" className="mx-auto" />
            </div>
            <div className="container mx-auto pt-10">
                <div className="flex items-stretch">
                    <div className="flex-auto self-center hidden lg:block" onClick={() => { prevBanner() }}>
                        <img src="/images/button/prev-l.png" className="mx-auto ease-in-out duration-200 hover:-translate-x-1" />
                    </div>
                    <div className="flex-auto w-4/5 px-3">
                        <Swiper
                            spaceBetween={5}
                            breakpoints={swiperPartnerConfig}
                        >
                            {renderPartnerSwiper(partners, activeVal)}
                        </Swiper>
                    </div>
                    <div className="flex-auto self-center hidden lg:block" onClick={() => { nextBanner() }}>
                        <img src="/images/button/next-r.png" className="mx-auto ease-in-out duration-200 hover:translate-x-1" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto pt-10">
                <div className="flex items-stretch">
                    <div className="flex-auto self-center hidden lg:block" onClick={() => { prevBanner() }}>
                        <img src="/images/button/big-prev-l.png" className="mx-auto ease-in-out duration-200 hover:-translate-x-1" />
                    </div>
                    <div className="flex-auto w-4/5 px-3">
                        <Swiper
                            ref={childPartner}
                            spaceBetween={0}
                            slidesPerView={1}
                            onSlideChange={(sw) => {
                                setActiveBanner(sw.activeIndex)
                            }}
                        >
                            {renderPartnerSwiperChild(partners, activeVal)}
                        </Swiper>
                    </div>
                    <div className="flex-auto self-center hidden lg:block" onClick={() => { nextBanner() }}>
                        <img src="/images/button/big-next-r.png" className="mx-auto ease-in-out duration-200 hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partner