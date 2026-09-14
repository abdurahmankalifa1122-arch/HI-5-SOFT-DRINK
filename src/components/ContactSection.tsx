import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    inquiryType: 'Retail Order',
    estimatedQuantity: '1 - 10 Crates',
    message: '',
  });

  const [errors, setErrors] = useState<{ fullName?: string; contactInfo?: string; message?: string }>({});
  const [submittedStatus, setSubmittedStatus] = useState<null | {
    summary: string;
    whatsappUrl: string;
    mailtoUrl: string;
  }>(null);

  const validate = () => {
    const errs: { fullName?: string; contactInfo?: string; message?: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name or company name.';
    }
    if (!formData.contactInfo.trim()) {
      errs.contactInfo = 'Please provide a valid phone number or email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details regarding your inquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedMessage = `*HI-5 Soft Drink Commercial Inquiry*\nName/Business: ${formData.fullName}\nContact: ${formData.contactInfo}\nChannel: ${formData.inquiryType}\nQuantity: ${formData.estimatedQuantity}\nDetails: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(formattedMessage)}`;
    const mailtoUrl = `mailto:${encodeURIComponent(BRAND_CONFIG.contact.email)}?subject=${encodeURIComponent('HI-5 Soft Drink Commercial Inquiry - ' + formData.fullName)}&body=${encodeURIComponent(formattedMessage)}`;

    setSubmittedStatus({
      summary: formattedMessage,
      whatsappUrl,
      mailtoUrl,
    });
  };

  return (
    <section 
      id="contact" 
      className="py-24 lg:py-32 bg-[#03170a] relative border-t border-emerald-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
            Get In Touch
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
            CONTACT ELWAD TRADE
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/75 leading-relaxed">
            Reach our wholesale team directly for crate purchases, dealership availability, or retail distribution terms across Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-3xl bg-[#041a0c] border border-emerald-800/50 p-8 shadow-2xl">
              
              <div className="flex items-center gap-3.5 pb-6 border-b border-emerald-800/40 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center border border-emerald-600/30">
                  <img
                    src={BRAND_CONFIG.logoUrl}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== BRAND_CONFIG.localLogoUrl) {
                        target.src = BRAND_CONFIG.localLogoUrl;
                      }
                    }}
                    alt="HI-5 Beverage Brand"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    width="44"
                    height="44"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {BRAND_CONFIG.companyName}
                  </h3>
                  <span className="text-xs text-amber-400 font-medium uppercase tracking-wider">
                    {BRAND_CONFIG.country}
                  </span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="space-y-3.5">
                <a
                  href={`tel:${BRAND_CONFIG.contact.phoneRaw}`}
                  className="p-4 rounded-2xl bg-[#020e05] hover:bg-emerald-950 border border-emerald-800/40 hover:border-amber-400/50 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/60 flex items-center justify-center text-amber-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-emerald-300/70 block">Direct Call</span>
                      <span className="text-sm font-bold text-white font-mono">{BRAND_CONFIG.contact.phone}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:translate-x-0.5 transition-transform">
                    Call →
                  </span>
                </a>

                <a
                  href={`https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent('Hello Elwad Wholesale Trade, I would like to inquire about ordering HI-5 Soft Drink.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#020e05] hover:bg-emerald-950 border border-emerald-800/40 hover:border-emerald-400 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/60 flex items-center justify-center text-emerald-300">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-emerald-300/70 block">WhatsApp Chat</span>
                      <span className="text-sm font-bold text-white font-mono">{BRAND_CONFIG.contact.whatsapp}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 group-hover:translate-x-0.5 transition-transform">
                    Chat →
                  </span>
                </a>

                <a
                  href={`mailto:${BRAND_CONFIG.contact.email}?subject=${encodeURIComponent('HI-5 Soft Drink Wholesale Inquiry')}`}
                  className="p-4 rounded-2xl bg-[#020e05] hover:bg-emerald-950 border border-emerald-800/40 hover:border-amber-400/50 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/60 flex items-center justify-center text-amber-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-emerald-300/70 block">Email</span>
                      <span className="text-sm font-bold text-white font-mono">{BRAND_CONFIG.contact.email}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:translate-x-0.5 transition-transform">
                    Email →
                  </span>
                </a>

                <div className="p-4 rounded-2xl bg-[#020e05] border border-emerald-900/50 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300/70 block">Address</span>
                    <span className="text-sm text-white">{BRAND_CONFIG.contact.address}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Order / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#041a0c] border border-emerald-800/50 p-8 sm:p-10 shadow-2xl">
              
              <div className="mb-8">
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Order & Commercial Inquiry
                </h3>
                <p className="text-sm text-emerald-200/70">
                  Submit your merchant request for pricing, crate minimums, and distribution terms.
                </p>
              </div>

              {submittedStatus ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#021006] border border-emerald-600/50 flex flex-col gap-5">
                  <div className="flex items-center gap-3 text-amber-400">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <span className="font-display font-bold text-lg text-white">
                      Inquiry Ready to Transmit
                    </span>
                  </div>

                  <p className="text-sm text-emerald-200/85">
                    Choose your preferred communication channel to send your inquiry directly to our team:
                  </p>

                  <div className="p-4 rounded-xl bg-black/50 border border-emerald-900/50 font-mono text-xs text-emerald-100 whitespace-pre-wrap">
                    {submittedStatus.summary}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={submittedStatus.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-emerald-950 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-[1.02] transition-transform"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-950" />
                      <span>Send via WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-950" />
                    </a>

                    <a
                      href={submittedStatus.mailtoUrl}
                      className="px-6 py-3.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white font-semibold text-xs border border-emerald-700 flex items-center gap-2 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span>Send via Email</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedStatus(null)}
                      className="px-4 py-3.5 rounded-xl text-xs text-emerald-400 hover:text-white transition-colors"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-2">
                      Full Name / Business Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Abebe Trading"
                      className={`w-full px-4 py-3 rounded-xl bg-[#020e05] border ${
                        errors.fullName ? 'border-red-400' : 'border-emerald-800/60 focus:border-amber-400'
                      } text-white text-sm focus:outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contactInfo" className="block text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-2">
                        Phone or Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="contactInfo"
                        type="text"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        placeholder="+251 9... or email"
                        className={`w-full px-4 py-3 rounded-xl bg-[#020e05] border ${
                          errors.contactInfo ? 'border-red-400' : 'border-emerald-800/60 focus:border-amber-400'
                        } text-white text-sm focus:outline-none transition-colors`}
                      />
                      {errors.contactInfo && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.contactInfo}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-2">
                        Business Type
                      </label>
                      <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#020e05] border border-emerald-800/60 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Retail Order">Retail Store / Kiosk</option>
                        <option value="Wholesale Bulk">Wholesale Distributor</option>
                        <option value="Restaurant/Bar">Restaurant / Café</option>
                        <option value="General Question">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-2">
                      Order Details / Inquiry <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share your estimated quantity, location, and any specific questions..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#020e05] border ${
                        errors.message ? 'border-red-400' : 'border-emerald-800/60 focus:border-amber-400'
                      } text-white text-sm focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-xl shadow-amber-400/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-emerald-950" />
                    <span>Submit Inquiry</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
