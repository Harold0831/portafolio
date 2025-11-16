import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <>
        <div id='Contacto' className="py-24">
            <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="rounded-xl bg-gray-100 p-8 text-center">
                    <div className="space-y-2 mb-6">
                    <h2 className='text-4xl font-bold'>Contacto</h2>
                    <p>Hablemos de tu proyecto</p>
                </div>
                <div className="gap-4 flex justify-center">
                    <Link href="/">
                        <button className='py-4 px-6 rounded-full bg-black text-white'>LinkedIn</button>
                    </Link>
                    <Link href="/">
                        <button className='py-4 px-6 rounded-full bg-black text-white'>Github</button>
                    </Link>
                    <Link href="/">
                        <button className='py-4 px-6 rounded-full bg-black text-white'>Gmail</button>
                    </Link>
                </div>
                </div>
                
            </div>
        </div> 
    </>
  )
}

export default Contact
