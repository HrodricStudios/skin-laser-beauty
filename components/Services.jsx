import Image from 'next/image'

const services = [
  {
    icon: '✨',
    title: 'Depilación Láser',
    description: 'Tecnología de diodo avanzada para eliminación definitiva del vello. Segura para todo tipo de piel.',
    features: ['Tratamiento indoloro', 'Sesiones rápidas', 'Resultados duraderos'],
  },
  {
    icon: '🌟',
    title: 'Rejuvenecimiento Facial',
    description: 'Tratamientos láser revolucionarios para mejorar la textura de la piel, reducir arrugas y devolver la juventud.',
    features: ['Estimula el colágeno', 'Reduce poros', 'Unifica el tono'],
  },
  {
    icon: '💎',
    title: 'Tratamientos Faciales',
    description: 'Faciales de lujo personalizados según tu tipo de piel con productos premium de grado médico.',
    features: ['Limpieza profunda', 'Hidratación intensa', 'Antienvejecimiento'],
  },
  {
    icon: '🌺',
    title: 'Body Contouring',
    description: 'Tratamientos no invasivos de moldeado corporal para eliminar grasa y tensar la piel.',
    features: ['Sin tiempo de recuperación', 'Resultados visibles', 'Aprobado por FDA'],
  },
  {
    icon: '💫',
    title: 'Peeling Químico',
    description: 'Peelings de grado médico para tratar acné, pigmentación y signos de envejecimiento.',
    features: ['Intensidad personalizada', 'Recuperación rápida', 'Piel más luminosa'],
  },
  {
    icon: '🌸',
    title: 'Consultas Personalizadas',
    description: 'Evaluá tu piel con nuestros especialistas y descubrí el tratamiento ideal para vos.',
    features: ['Diagnóstico gratuito', 'Plan a medida', 'Seguimiento personalizado'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">
            Nuestros Servicios
          </p>
          <h2 className="section-title">
            Tratamientos Premium de Belleza
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubrí nuestra gama completa de tratamientos estéticos avanzados, 
            diseñados para realzar tu belleza natural y aumentar tu confianza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Imagen izquierda - ocupa 1 columna y 2 filas */}
          <div className="lg:row-span-2 relative rounded-2xl overflow-hidden shadow-lg group min-h-[400px]">
            <Image
              src="/cuidados.jpg"
              alt="Cuidados antes de tu sesión - SkinLaser & Beauty"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-serif font-bold mb-2">
                Antes de tu sesión
              </h3>
              <p className="text-sm text-gray-200">
                Seguí estos cuidados para obtener los mejores resultados
              </p>
            </div>
          </div>

          {/* Tarjetas derecha - apiladas de a 1 en mobile, 2 en desktop */}
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:border-primary border-2 border-transparent animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}