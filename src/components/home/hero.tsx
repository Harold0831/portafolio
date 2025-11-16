import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
        <div className="pt-32 pb-24">
            <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-[#1a2a3a] leading-tight">Harold G. Jimenez Castro</h1>
                        <p className="text-[#6b7a8a] text-lg leading-relaxed">Desarrollador fullstack especializado en crear experiencias web modernas y performantes. Combinando diseño limpio con funcionalidad robusta.</p>
                        <Link href="#Contacto">
                            <button className='py-3 px-6 bg-[#5eb3ff] hover:bg-[#3d9fff] text-white rounded-lg font-medium transition-colors'>Hablemos</button>
                        </Link>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <Image src="/hero/foto-hero.jpeg" alt="Hero Image" width={500} height={500} className="object-cover w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Hero
