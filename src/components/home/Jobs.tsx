import React from 'react'
import Image from 'next/image'

interface JobCard {
  id: string
  title: string
  description: string
  image: string
  color: string
  url: string
}

const Jobs = () => {
  const projects: JobCard[] = [
    {
      id: '1',
      title: 'Swatex',
      description: 'Pagina web y CRM interno para gestión de clientes para Swatex que es una agencia de intercambio cultural.',
      image: '/hero/swatex.png',
      color: 'indigo',
      url: 'https://swatex.vercel.app/'
    },
    {
      id: '2',
      title: 'Grupo Chavón',
      description: 'Pagina web para Grupo Chavón, una empresa dedicada a la construcción y venta de bienes raíces en La Romana.',
      image: '/hero/grupochavon.png',
      color: 'emerald',
      url: 'https://www.grupochavon.com/'
    },
    {
      id: '3',
      title: 'LRomana Real Estate',
      description: 'Pagina web con catalogo de propiedades para LRomana Real Estate, una inmobiliaria en La Romana que ofrece propiedades exclusivas en la zona.',
      image: '/hero/lromana.png',
      color: 'amber',
      url: 'https://www.lromanarealestate.com/'
    }
  ]

  return (
    <>
      <div id='Proyectos' className="py-24">
        <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">Proyectos</h2>
              <p className="text-lg text-black/60">Proyectos recientes</p>
            </div>
            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <article
                    key={project.id}
                    className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm h-auto p-5 flex flex-col cursor-pointer"
                    role="link"
                    tabIndex={0}
                    aria-label={`Abrir ${project.title} en una nueva pestaña`}
                    onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        window.open(project.url, "_blank", "noopener,noreferrer")
                      }
                    }}
                  >
                    <div className="relative h-64 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-black/70 flex-grow">{project.description}</p>
                      <div className="mt-4">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
                        >
                          Ir al sitio
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jobs
