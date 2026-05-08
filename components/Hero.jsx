import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto izquierda */}
          <div className="animate-fade-in">
            <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
              Premium Laser & Beauty Clinic
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-secondary mb-6 leading-tight">
              Revela tu <span className="text-primary">Belleza Natural</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Combinamos tecnología láser de última generación con tratamientos 
              de belleza de lujo. Transformá tu piel con nuestro cuidado experto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg">
                Reservá tu cita
              </button>
              <button className="btn-secondary text-lg">
                Nuestros Servicios
              </button>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="relative animate-slide-up">
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpeg"
                alt="SkinLaser & Beauty - Tratamientos de belleza"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Borde decorativo estilo revista */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  )
}