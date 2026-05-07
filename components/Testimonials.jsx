const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Client',
    image: 'SJ',
    rating: 5,
    text: 'The laser hair removal treatment exceeded my expectations. After just 3 sessions, I saw remarkable results. The staff is professional and made me feel completely comfortable.',
  },
  {
    name: 'Emily Chen',
    role: 'First-time Client',
    image: 'EC',
    rating: 5,
    text: 'I was nervous about my first facial treatment, but the team was incredibly patient and explained everything. My skin has never looked better!',
  },
  {
    name: 'Maria Rodriguez',
    role: 'VIP Member',
    image: 'MR',
    rating: 5,
    text: 'As someone who has tried many clinics, I can confidently say this is the best. Their attention to detail and personalized approach is unmatched.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="section-title">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about 
            their transformative experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card text-center animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-primary">
                  {testimonial.image}
                </span>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-semibold text-dark">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}