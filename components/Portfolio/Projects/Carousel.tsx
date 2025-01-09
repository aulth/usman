'use client'
import { Button } from '@/components/ui/button'
import React, { useRef, useEffect, useState } from 'react'
import Swiper from '@/lib/swiper';
import { Slide } from '@/models/project';

export default function Carousel({ images }: { images: Slide[] }) {
    const swiperRef = useRef<Swiper | null>(null);
    const sliderBox = useRef<HTMLDivElement | null>(null);
    const sliderDot = useRef<HTMLDivElement | null>(null);
    const [slideCounter, setSlideCounter] = useState(0);

    const updateSliderPosition = (slide: number): void => {
        if (sliderBox.current) {
            sliderBox.current.style.transform = `translateX(-${sliderBox.current.clientWidth * slide}px)`;
        }
        if (sliderDot.current) {
            sliderDot.current.scrollLeft = sliderDot.current.children[0].clientWidth * slide;
        }
    }
    const slideNext = (): void => {
        setSlideCounter(prev => {
            const nextSlide = (prev + 1) % images.length;
            updateSliderPosition(nextSlide);
            return nextSlide;
        })

    }

    const slidePrev = (): void => {
        setSlideCounter(prev => {
            const prevSlide = (prev - 1 + images.length) % images.length;
            updateSliderPosition(prevSlide);
            return prevSlide;
        })
    }

    const goToSlide = (index: number): void => {
        setSlideCounter(index);
        updateSliderPosition(index);
    }

    useEffect(() => {
        if (sliderBox.current) {
            const swiper = new Swiper(sliderBox.current);
            swiper.onLeft(() => {
                slideNext();
            })
            swiper.onRight(() => {
                slidePrev();
            })
            swiper.run();
            swiperRef.current = swiper;
        }

        return () => {
            if (sliderBox.current) {
                swiperRef.current = null;
            }
            if(swiperRef.current){
                swiperRef.current.destroy();
            }
        }
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            slideNext();
        }, 3000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <>
            <div className="w-full rounded-[8px] overflow-hidden">
                <div ref={sliderBox} className={`slider slide-box flex  transition-transform duration-300 ease-out`}>
                    {
                        images.map((_, index) => (
                            <img key={index + Math.random() * 1000} src={_.link} draggable={false} className='!rounded-[8px] cursor-grab aspect-video object-fit flex-grow flex-shrink-0 basis-full' alt="slide-1" />
                        ))
                    }
                </div>

                <div ref={sliderDot} className="flex overflow-x-auto  justify-center gap-2 mt-2 no-scrollbar">
                    {
                        images.map((_, index) => (
                            <Button key={index + 1} onClick={() => { goToSlide(index) }} className={`w-[8%] max-w-[50px] h-full  flex-none   aspect-square p-0 rounded-[8px] ${slideCounter == index ? 'border-2' : ''}`}>
                                <img src={_.link} className='w-full aspect-square object-cover !rounded-[8px]' alt="slide-1" />
                            </Button>
                        ))
                    }
                </div>
            </div>
        </>

    )
}
