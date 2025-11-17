const About = () => {
  return (
    <>
        <div id="About" className="py-24">
            <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 gap-8 items-center">
                    <div className="text-center">
                        <h2 className='text-3xl font-bold mb-4'>Sobre mi</h2>
                        <p className="text-white/70">Mis intereses y hobbies</p>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="p-6 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-purple-500/20 h-96 hover:shadow-xl hover:border-purple-500/40 flex flex-col justify-center items-center text-center transition-all duration-300">
                                <div className="text-purple-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">  
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Desarrollo</h3>
                                <p className="text-white/80 text-sm">Disfruto crear soluciones tecnológicas que resuelvan problemas reales
                                 y ayuden a empresas y profesionales a mostrar su mejor versión en el mundo digital.</p>
                            </div>
                            <div className="p-6 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-purple-500/20 h-96 hover:shadow-xl hover:border-purple-500/40 flex flex-col justify-center items-center text-center transition-all duration-300">
                                <div className="text-purple-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">  
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Aprendizaje</h3>
                                <p className="text-white/80 text-sm">Soy una persona curiosa; me motiva aprender nuevas tecnologías y 
                                seguir fortaleciendo mis habilidades día a día.</p>
                            </div>
                            <div className="p-6 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-purple-500/20 h-96 hover:shadow-xl hover:border-purple-500/40 flex flex-col justify-center items-center text-center transition-all duration-300">
                                <div className="text-purple-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">  
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Optimización</h3>
                                <p className="text-white/80 text-sm">Busco mejorar constantemente cada proceso, enfocándome en la eficiencia,
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
