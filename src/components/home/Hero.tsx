import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="min-h-screen flex items-center pt-20 pb-12">
        <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
              <Image 
                src="/hero/foto-hero.jpeg" 
                alt="Harold G. Jimenez Castro" 
                width={500} 
                height={500} 
                className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-2">
                <p className="text-purple-400 font-medium text-lg">Bienvenido</p>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Harold G. Jimenez Castro
                </h1>
              </div>
              
              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                Frontend Developer y estudiante de Ingeniería en Sistemas en formación continua. Apasionado por crear experiencias web modernas y accesibles.
              </p>
              
              <div className="flex gap-4 pt-4">
                <Link href="#Contacto">
                  <button className='py-3 px-8 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-purple-500/50'>
                    Hablemos
                  </button>
                </Link>
                <Link href="#About">
                  <button className='py-3 px-8 border-2 border-purple-500/50 hover:border-purple-500 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-purple-500/10'>
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
