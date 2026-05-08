import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-light overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagen de la máquina Soprano */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/soprano.jpg"
                alt="Tecnología Soprano - SkinLaser & Beauty"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain bg-white"
              />
            </div>
            {/* Badge flotante */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 animate-slide-up">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ★
                </div>
                <div>
                  <div className="text-gray-600">Calidad</div>
                  <div className="text-2xl font-bold text-dark">Premium</div>
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <p className="text-primary font-semibold uppercase tracking-wider">
              Sobre Nosotros
            </p>
            <h2 className="section-title">
              Where Science Meets Beauty
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              En SkinLaser & Beauty combinamos tecnología láser de última generación 
              con tratamientos de belleza de lujo. Nuestra clínica está liderada por 
              profesionales certificados con más de una década de experiencia en 
              medicina estética.
            </p>
            <div className="space-y-4">
              {[
                'Tecnología láser Soprano aprobada por FDA',
                'Profesionales certificados y con experiencia',
                'Planes de tratamiento personalizados',
                'Ambiente de lujo e higiene garantizada',
                'Resultados con garantía de satisfacción',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-8">
              Conocé más sobre nosotros
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}