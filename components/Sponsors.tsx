import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sponsors = () => {
  return (
    <div className='w-full bg-fifth-purple flex flex-col lg:flex-row items-center justify-between py-5 px-8'>
        <h3 className='text-xl lg:text-2xl pragmatica-text uppercase'>Newtro's supporters</h3>
        <div className='flex items-center pt-8 lg:pt-0'>
        <Link href="https://zora.co/" target='_blank'>
              <Image src="/zora.svg" width={150} height={72} alt='Zora'  className='pr-8 pb-4 lg:pb-0'/>
          </Link>
            <Link href="https://optimism.io/" target='_blank'>
              <Image src="/optimism.svg" width={72} height={72} alt='Optimism' className='pr-8 pb-4 lg:pb-0'/>
            </Link>
          <Link href="https://warpcast.com/~/channel/energy" target='_blank'>
          <p className='pb-4 lg:pb-0 text-2xl lg:text-5xl text-fourth-green pragmatica-text'>ENERGY</p>
          </Link>
        </div>
    </div>
  )
}

export default Sponsors