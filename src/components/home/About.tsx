const About = () => {
  
  
  
    return (
    <>
        <div id="About" className="py-24">
            <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 gap-8 items-center">
                    <div className="text-center">
                        <h2 className='text-3xl font-bold mb-4'>Sobre mi</h2>
                        <p className="text-black/70">Mis intereses y hobbies</p>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="p-6 bg-white rounded-xl border border-black/5 h-96 hover:shadow-lg justify-center ">
                                <div className="text-4xl mb-4"></div>
                                <h3 className="text-xl font-semibold mb-2">Desarrollo</h3>
                                <p className="text-black/70 text-sm">Disfruto crear soluciones tecnológicas que resuelvan problemas reales
                                 y ayuden a empresas y profesionales a mostrar su mejor versión en el mundo digital.</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl border border-black/5 h-96 hover:shadow-lg">
                                <div className="text-4xl mb-4"></div>
                                <h3 className="text-xl font-semibold mb-2">Aprendizaje</h3>
                                <p className="text-black/70 text-sm">Soy una persona curiosa; me motiva aprender nuevas tecnologías y 
                                seguir fortaleciendo mis habilidades día a día.</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl border border-black/5 h-96 hover:shadow-lg">
                                <div className="text-4xl mb-4"></div>
                                <h3 className="text-xl font-semibold mb-2">Optimización</h3>
                                <p className="text-black/70 text-sm">Busco mejorar constantemente cada proceso, enfocándome en la eficiencia,
                                 la claridad y el rendimiento de los proyectos que desarrollo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default About
