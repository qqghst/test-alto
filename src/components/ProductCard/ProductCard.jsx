import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import style from './ProductCard.module.scss'

const ProductCard = ({ image_url, name, price, availability, color, short_desc }) => {
    // const [showDetails, setShowDetails] = useState(false);
    const [bg, setBg] = useState(['']);

    const changeBg = () => {
        if (availability === 0) {
            setBg('#A6C3EE')
        }
        if (availability !== 0) {
            setBg('#76CB22')
        }
    }

    useEffect(() => {
        changeBg()
    }, [])

    if (availability === 0) {
        availability = 'Под заказ'
    } else {
        availability = 'В наличии'
    }

    return (
        <div className={`${style.dropShadow} flex flex-row mx-[16px] lg:mx-0 `}>
            <div className={`${style.cardWrapper}`}>
                <div className=''>
                    <img className='w-[265px] h-[265px]' src={image_url} alt={name} />
                    <hr className='' />
                    <div className='flex flex-col mt-[18px] ml-[20px] gap-[18px]'>
                        <p className={`bg-${bg} w-[84px] h-[27px] text-white text-center`}>{availability}</p>
                        <p className='text-[16px] text-[#4F545F] underline'>{name}</p>
                        <p className='text-[16px] text-[#4F545F] font-bold'>{`${price}P`}</p>
                    </div>
                </div>

                <div className={`pb-[16px]`}>
                    <div className='flex flex-col gap-[12px] mb-[24px] mt-[12px] ml-[20px]'>
                        <p className='text-[12px] text-[#4F545F]'>{`Цвет - ${color}`}</p>
                        <p className='text-[12px] text-[#4F545F] w-[250px]'>{short_desc}</p>
                    </div>
                    <Button type='button' className={`${style.dropShadowButton} bg-[#336EC6] hover:bg-blue-800 rounded-md w-[142px] h-[45px] flex flex-row justify-center items-center gap-[3px] ml-[20px] mb-[20px]`}>
                        <svg className='w-[16px] h-[12px] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h52.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5h328c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zm152 512c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48z" />
                        </svg>
                        <span className='font-bold text-[12px] text-white'>В КОРЗИНУ</span>
                    </Button>
                </div>

            </div>
        </div>
    )

}

export default ProductCard