import React from 'react'
import { Button } from "@/components/ui/button"
import headerimage from "../public/assests/headerimage.svg"
import card1 from "../public/assests/card1.svg"
import card2 from "../public/assests/card2.svg"
import card3 from "../public/assests/card3.svg"
import card4 from "../public/assests/card4.svg"
import card5 from "../public/assests/card5.svg"
import card6 from "../public/assests/card6.svg"
import card7 from "../public/assests/card7.svg"
import card8 from "../public/assests/card8.svg"
import card9 from "../public/assests/card9.svg"
import fbicon from "../public/assests/fbicon.svg"
import linkedin from "../public/assests/linkedinicon.svg"
import youtube from "../public/assests/youtubeicon.svg"
import insta from "../public/assests/instaicon.svg"
import Image from 'next/image'


const page = () => {
  return (
    <div className='flex flex-col '>

      <div className='flex flex-row  w-auto h-[164px] bg[#FFFFFF] justify-between items-center'>
        <div className='flex justify-center ml-[80px] text-xl'>Site name</div>
        <div className='flex flex-row gap-x-[48px] m-x-[48px] text-xl mr-10 justify-center items-center'>
          <div>Page</div>
          <div>Page</div>
          <div>Page</div>
          <Button >Button</Button>
        </div>
      </div>

      <div className='flex mt-2 w-auto h-[597px] ml-[40px]'>
        <Image src={headerimage} alt='HeaderImage' ></Image>
      </div>

      <div className=' flex items-center mt-6 ml-[40px] text-3xl font-bold '>
        Heading
      </div>

      <div className='grid grid-cols-3 items-center justify-center  ml-[40px] mt-2 gap-y-5'>
        <div>
          <Image src={card1} alt='Card1'></Image>
          <div className='font-bold text-3xl'>Product</div>
          <div className='text-lg'>Description of first product</div>
          <div className='text-2xl font-bold'>$10.99</div>
        </div>

        <div>
          <Image src={card2} alt='Card1'></Image>
          <div className='font-bold text-3xl'>Product</div>
          <div className='text-lg'>Description of first product</div>
          <div className='text-2xl font-bold'>$10.99</div>
        </div>

        <div>
          <Image src={card3} alt='Card1'></Image>
          <div className='font-bold text-3xl'>Product</div>
          <div className='text-lg'>Description of first product</div>
          <div className='text-2xl font-bold'>$10.99</div>
        </div>

        <div>
          <Image src={card4} alt='Card1'></Image>
          <div className='font-bold text-3xl'>Product</div>
          <div className='text-lg'>Description of first product</div>
          <div className='text-2xl font-bold'>$10.99</div>
        </div>

        <div>
          <Image src={card5} alt='Card1'></Image>
          <div className='font-bold text-3xl'>Product</div>
          <div className='text-lg'>Description of first product</div>
          <div className='text-2xl font-bold'>$10.99</div>
        </div>

        <div>
          <Image src={card6} alt='Card1'></Image>
          <div className='font-bold text-3xl'>Product</div>
          <div className='text-lg'>Description of first product</div>
          <div className='text-2xl font-bold'>$10.99</div>
        </div>

      </div>

      <div className=' flex items-center mt-4 ml-[40px] text-3xl font-bold '>
        Heading
      </div>
      <div className='grid grid-cols-2 items-center justify-center ml-[40px] mt-2 space-x-12'>

        <div>
          <Image src={card7} alt='Card1'></Image>
          <div className='font-bold text-3xl'>Product</div>
          <div className='text-lg'>Description of first product</div>
          <div className='text-2xl font-bold'>$10.99</div>
        </div>
        <div>

          <div>
            <Image src={card8} alt='Card1'></Image>
            <div className='font-bold text-3xl'>Product</div>
            <div className='text-lg'>Description of first product</div>
            <div className='text-2xl font-bold'>$10.99</div>
          </div>

          <div>
            <Image src={card9} alt='Card1'></Image>
            <div className='font-bold text-3xl'>Product</div>
            <div className='text-lg'>Description of first product</div>
            <div className='text-2xl font-bold'>$10.99</div>
          </div>
        </div>
      </div>

      <div className='flex flex-row w-auto h-[264px] mt-6  bg[#FFFFFF]'>
        <div className='ml-[40px] mt-[52px]'>
          <div>Site name</div>
          <div className='flex flex-row gap-x-[8px] mt-[100px]'>
            <Image src={fbicon} alt='Fbicon'></Image>
            <Image src={linkedin} alt='Fbicon'></Image>
            <Image src={youtube} alt='Fbicon'></Image>
            <Image src={insta} alt='Fbicon'></Image>

          </div>
        </div>

        <div className='mt-[48px] ml-[750px] space-y-[24px]'>
          <div className='font-bold'>Topic</div>
          <div>Page</div>
          <div>Page</div>
          <div>Page</div>
        </div>
        <div className='mt-[48px] ml-[100px] space-y-[24px]'>
          <div className='font-bold'>Topic</div>
          <div>Page</div>
          <div>Page</div>
          <div>Page</div>
        </div>
        <div className='mt-[48px] ml-[100px] space-y-[24px]'>
          <div className='font-bold'>Topic</div>
          <div>Page</div>
          <div>Page</div>
          <div>Page</div>
        </div>

      </div>








    </div>
  )
}

export default page