import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      'Thank you for your message! This is a demo form. In a real app, this would send your message to our support team.'
    );
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>Contact Us</h1>
        <p className='text-xl text-gray-600'>We'd love to hear from you</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Contact Information */}
        <div className='space-y-8'>
          <div className='bg-white rounded-2xl shadow-lg p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Get in Touch</h2>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='bg-purple-100 p-3 rounded-lg mr-4'>
                  <span className='text-2xl'>📧</span>
                </div>
                <div>
                  <h3 className='font-bold text-gray-800'>Email</h3>
                  <p className='text-gray-600'>support@shopeasy.com</p>
                  <p className='text-gray-600'>sales@shopeasy.com</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-purple-100 p-3 rounded-lg mr-4'>
                  <span className='text-2xl'>📞</span>
                </div>
                <div>
                  <h3 className='font-bold text-gray-800'>Phone</h3>
                  <p className='text-gray-600'>+1 (555) 123-4567</p>
                  <p className='text-gray-600'>Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-purple-100 p-3 rounded-lg mr-4'>
                  <span className='text-2xl'>📍</span>
                </div>
                <div>
                  <h3 className='font-bold text-gray-800'>Address</h3>
                  <p className='text-gray-600'>123 Shopping Street</p>
                  <p className='text-gray-600'>New York, NY 10001</p>
                  <p className='text-gray-600'>United States</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl p-8'>
            <h3 className='text-xl font-bold mb-4'>Customer Support Hours</h3>
            <ul className='space-y-2'>
              <li className='flex justify-between'>
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM EST</span>
              </li>
              <li className='flex justify-between'>
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM EST</span>
              </li>
              <li className='flex justify-between'>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className='bg-white rounded-2xl shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Send us a Message</h2>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-gray-700 mb-2' htmlFor='name'>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition duration-300'
                required
              />
            </div>

            <div>
              <label className='block text-gray-700 mb-2' htmlFor='email'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition duration-300'
                required
              />
            </div>

            <div>
              <label className='block text-gray-700 mb-2' htmlFor='subject'>
                Subject
              </label>
              <select
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition duration-300'
                required
              >
                <option value=''>Select a subject</option>
                <option value='order'>Order Inquiry</option>
                <option value='product'>Product Question</option>
                <option value='shipping'>Shipping & Delivery</option>
                <option value='return'>Returns & Refunds</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <div>
              <label className='block text-gray-700 mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='6'
                className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition duration-300'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300 transform hover:-translate-y-1'
            >
              Send Message
            </button>
          </form>

          <p className='text-gray-500 text-sm mt-6 text-center'>
            We typically respond within 24 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
