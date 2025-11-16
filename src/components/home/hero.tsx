import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <>

        <div className="py-24">
            <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold ">Harold G. Jimenez Castro</h1>
                        <p className="text-black/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit praesentium, vel laboriosam voluptatibus a 
                            expedita omnis dicta hic corporis recusandae iusto ipsam quod placeat. Ipsum voluptate magnam quos voluptas?</p>
                        <Link href="/" >
                            <button className='py-3 px-4 bg-black text-white rounded-2xl'>Hablemos</button>
                        </Link>
                    </div>
                    <div className="rounded">
                        <Image src="/hero/foto-hero.jpeg" alt="Hero Image" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Hero
