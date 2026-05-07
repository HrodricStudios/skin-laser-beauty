export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 z-10" />
        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
              Premium Laser & Beauty Clinic
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Reveal Your 
              <span className="text-primary"> Natural Beauty</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Experience the perfect blend of advanced laser technology and luxurious 
              beauty treatments. Transform your skin with our expert care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg">
                Book Free Consultation
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-dark text-lg">
                View Our Services
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '5000+', label: 'Happy Clients' },
              { number: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}