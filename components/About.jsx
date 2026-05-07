export default function About() {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/40" />
              <div className="w-full h-full bg-gradient-to-tr from-accent to-primary/10" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 animate-slide-up">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  10+
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark">Years</div>
                  <div className="text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-primary font-semibold uppercase tracking-wider">
              About Our Clinic
            </p>
            <h2 className="section-title">
              Where Science Meets Beauty
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At SkinLaser & Beauty, we combine cutting-edge laser technology with 
              luxurious beauty treatments. Our clinic is led by certified professionals 
              with over a decade of experience in aesthetic medicine.
            </p>
            <div className="space-y-4">
              {[
                'FDA-approved advanced laser technology',
                'Certified and experienced practitioners',
                'Personalized treatment plans',
                'Luxurious and hygienic environment',
                'Satisfaction guaranteed results',
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
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}