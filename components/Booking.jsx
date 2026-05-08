'use client'

import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for booking! We will contact you shortly.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="booking" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form Side */}
          <div>
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">
              Book Appointment
            </p>
            <h2 className="section-title">
              Schedule Your Treatment
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Ready to start your beauty journey? Book a consultation today and let 
              our experts create a personalized treatment plan for you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select service</option>
                    <option value="laser-hair">Laser Hair Removal</option>
                    <option value="skin-rejuvenation">Skin Rejuvenation</option>
                    <option value="facial">Facial Treatments</option>
                    <option value="body-contouring">Body Contouring</option>
                    <option value="tattoo-removal">Laser Tattoo Removal</option>
                    <option value="chemical-peel">Chemical Peels</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about any concerns or special requirements..."
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                Book Appointment
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-serif font-semibold text-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: '📍',
                    title: 'Visit Us',
                    text: '123 Beauty Lane, Suite 100\nLos Angeles, CA 90001',
                  },
                  {
                    icon: '📞',
                    title: 'Llamanos',
                    text: '+54 9 3417 12-1149',
                  },
                  {
                    icon: '📸',
                    title: 'Instagram',
                    text: '@sb.skinlaser',
                  },
                  {
                    icon: '🕐',
                    title: 'Working Hours',
                    text: 'Mon - Fri: 9:00 AM - 7:00 PM\nSat: 10:00 AM - 5:00 PM',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-dark">{item.title}</div>
                      <div className="text-gray-600 whitespace-pre-line">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
              <div className="text-3xl mb-4">🎉</div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                First-Time Client?
              </h3>
              <p className="mb-4 opacity-90">
                Get 20% off your first treatment and a free consultation with our specialists.
              </p>
              <div className="text-3xl font-bold mb-4">
                20% OFF
              </div>
              <button className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}