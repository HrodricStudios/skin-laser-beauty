const services = [
  {
    icon: '✨',
    title: 'Laser Hair Removal',
    description: 'Advanced diode laser technology for permanent hair reduction. Safe for all skin types.',
    price: 'From $89',
    features: ['Painless treatment', 'Quick sessions', 'Long-lasting results'],
  },
  {
    icon: '🌟',
    title: 'Skin Rejuvenation',
    description: 'Revolutionary laser treatments to improve skin texture, reduce wrinkles, and restore youth.',
    price: 'From $149',
    features: ['Collagen boost', 'Pore reduction', 'Even skin tone'],
  },
  {
    icon: '💎',
    title: 'Facial Treatments',
    description: 'Luxurious facials customized to your skin type using premium medical-grade products.',
    price: 'From $119',
    features: ['Deep cleansing', 'Hydration boost', 'Anti-aging'],
  },
  {
    icon: '🌺',
    title: 'Body Contouring',
    description: 'Non-invasive body sculpting treatments to eliminate fat and tighten skin.',
    price: 'From $199',
    features: ['Zero downtime', 'Visible results', 'FDA approved'],
  },
  {
    icon: '💫',
    title: 'Laser Tattoo Removal',
    description: 'Advanced picosecond laser technology for effective tattoo removal with minimal sessions.',
    price: 'From $159',
    features: ['All colors treated', 'Minimal discomfort', 'Fast healing'],
  },
  {
    icon: '🌸',
    title: 'Chemical Peels',
    description: 'Medical-grade peels to address acne, pigmentation, and signs of aging.',
    price: 'From $99',
    features: ['Customized strength', 'Quick recovery', 'Brighter skin'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="section-title">
            Premium Beauty Treatments
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of advanced aesthetic treatments designed 
            to enhance your natural beauty and boost your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-bold text-primary">
                  {service.price}
                </span>
                <button className="text-sm font-semibold text-primary hover:text-secondary transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}