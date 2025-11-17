import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
    <>
        <div id='Contacto' className="py-24">
            <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="rounded-xl bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 p-8 text-center hover:border-purple-500/40 max-w-[1080px] justify-center mx-auto transition-all duration-300">
                    <div className="space-y-4 mb-6">
                    <h2 className='text-4xl font-bold text-white'>Contacto</h2>
                    <p className="text-white/70">Hablemos de tu proyecto</p>
                    <p className="text-white/60 text-base max-w-3xl mx-auto text-center leading-relaxed">
                        Estoy interesado en escuchar sobre nuevas oportunidades y proyectos desafiantes. 
                        Si tienes algo en mente, no dudes en contactarme a través de cualquiera de mis redes sociales. 
                        Respondo rápidamente y estoy disponible para discutir sobre desarrollo web, tecnología y nuevas ideas.
                    </p>
                </div>
                <div className="gap-4 flex justify-center flex-wrap">
                    <Link href="https://www.linkedin.com/in/harold-gabriel-jimenez-castro-24a6a2214/">
                            <button type='button' className='py-4 px-6 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors cursor-pointer flex items-center gap-2'>
                                <Image src="/contacto/linkedin-logo.png" alt="LinkedIn" width={20} height={20} />
                                LinkedIn
                            </button>
                    </Link>
                    <Link href="https://github.com/Harold0831">
                            <button type='button' className='py-4 px-6 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors cursor-pointer flex items-center gap-2'>
                                <Image src="/contacto/github-logo.png" alt="GitHub" width={20} height={20} />
                                Github
                            </button>
                    </Link>
                    <Link href="mailto:harold3112@gmail.com">
                            <button type='button' className='py-4 px-6 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors cursor-pointer flex items-center gap-2'>
                                <Image src="/contacto/gmail-logo.png" alt="Gmail" width={20} height={20} />
                                Gmail
                            </button>
                    </Link>
                </div>
                </div>
                
            </div>
        </div> 
    </>
  )
}

export default Contact
