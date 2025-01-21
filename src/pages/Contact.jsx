import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Phone, Send, Loader2 } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, value, link }) => (
  <div className="flex items-start gap-4">
    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-3">
      <Icon className="w-6 h-6 text-orange-500" />
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      {link ? (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-orange-500 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-300">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ platform, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg px-6 py-3 flex items-center gap-2"
  >
    <img 
      src={`https://placehold.co/24x24?text=${platform[0]}`} 
      alt={platform}
      className="w-6 h-6 rounded"
    />
    <span>{platform}</span>
  </a>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about Combat Coin? We're here to help. Reach out to our team through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-500">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-500">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg 
                  hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div className="grid gap-6">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  value="contact@combatcoin.io"
                  link="mailto:contact@combatcoin.io"
                />
                <ContactInfo
                  icon={MessageCircle}
                  title="Telegram Support"
                  value="@CombatCoinSupport"
                  link="https://t.me/CombatCoinSupport"
                />
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  value="+1 (555) 123-4567"
                />
                <ContactInfo
                  icon={MapPin}
                  title="Office"
                  value="123 Blockchain Street, Crypto Valley, ZG 6300, Switzerland"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Social Media</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <SocialLink platform="Twitter" link="#" />
                <SocialLink platform="Telegram" link="#" />
                <SocialLink platform="Discord" link="#" />
                <SocialLink platform="Medium" link="#" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Support Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM (UTC)</p>
                <p>Saturday: 10:00 AM - 2:00 PM (UTC)</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}