import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Membership = () => {
  return (
    <div className='w-full h-fit text-primary-dark bg-fourth-green rounded-tl-[15px] rounded-br-[15px] py-4 lg:py-0 pl-8 lg:mb-8 flex justify-between'>
        <div className='flex flex-col lg:w-1/2 justify-center pr-4 lg:pr-0'>
            <h4 className='font-semibold pragmatica-text text-3xl mb-4'>Subscribe to our membership!</h4>
            <p className='mb-4 lg:mr-32'>
            Join us to receive monthly art airdrops, and other special items we have reserved only for you.
            </p>
            <div className='flex'>
                <Link href="https://hypersub.withfabric.xyz/"
                className="h-fit w-fit mr-4 cursor-pointer p-buttons bg-tertiary-purple text-secondary-white hover:bg-fourth-green hover:text-tertiary-purple mb-2 ">
                    Sign up on HyperSub
                </Link>
                <Link href="https://hypersub.withfabric.xyz/"
                className="h-fit w-fit cursor-pointer p-buttons bg-tertiary-purple text-secondary-white hover:bg-fourth-green hover:text-tertiary-purple mb-2 ">
                    Learn More
                </Link>
            </div>
        </div>
        <Image src="/membership.png" alt='Membership' width={800} height={100} className='hidden lg:block aspect-[16/6] object-cover rounded-br-[15px]'/>
    </div>
  )
}

export default Membership