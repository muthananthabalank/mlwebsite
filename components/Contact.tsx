import React, { useState } from 'react';
import { MapPin, Mail, Phone, User, FileText, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'VMC Work',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, service, message } = formData;
    
    const subject = `Inquiry via Website: ${service}`;
    const body = `Name: ${name}
Phone: ${phone}
Email: ${email}
Service Required: ${service}

Message:
${message}`;

    const mailtoLink = `mailto:deepamtradeunion@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-brand-blue py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white heading-underline pb-4">
            Contact Us
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 bg-brand-blueLight p-8 border-t-4 border-brand-yellow shadow-xl">
            <h4 className="text-2xl font-display font-bold text-white mb-8">Contact Info</h4>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-brand-blue p-3 rounded-sm border border-brand-yellow/30 text-brand-yellow mr-4 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wider mb-1">Address</p>
                  <p className="text-white font-medium leading-relaxed">
                    SF No. 69/1, Malar Vizhi Thottam,<br/>
                    Chinnavedampatti, Ganapathy,<br/>
                    Coimbatore – 641006
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-blue p-3 rounded-sm border border-brand-yellow/30 text-brand-yellow mr-4 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wider mb-1">Phone</p>
                  <p className="text-white font-medium text-lg">86672 38781</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-blue p-3 rounded-sm border border-brand-yellow/30 text-brand-yellow mr-4 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wider mb-1">Email</p>
                  <a href="mailto:muthalakshmiindustries@gmail.com" className="text-white font-medium hover:text-brand-yellow transition-colors break-all">
                    muthalakshmiindustries@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-blue p-3 rounded-sm border border-brand-yellow/30 text-brand-yellow mr-4 shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wider mb-1">Contact Person</p>
                  <p className="text-white font-medium">K. Manikandan</p>
                </div>
              </div>
              
              <div className="flex items-start border-t border-gray-700 pt-6">
                <div className="bg-brand-blue p-3 rounded-sm border border-brand-yellow/30 text-brand-yellow mr-4 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wider mb-1">GSTIN</p>
                  <p className="text-white font-medium font-mono">33IGCPK6326K1Z8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-2 bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
             <h4 className="text-2xl font-display font-bold text-white mb-2">Request a Quote</h4>
             <p className="text-gray-400 mb-8">Fill out the form below and we will get back to you with a competitive quote.</p>
             
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                   <input 
                     type="text" 
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full bg-brand-blue border border-gray-700 p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-colors" 
                     placeholder="Your Name" 
                     required
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                   <input 
                     type="tel" 
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     className="w-full bg-brand-blue border border-gray-700 p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-colors" 
                     placeholder="Your Phone Number" 
                     required
                   />
                 </div>
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                 <input 
                   type="email" 
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   className="w-full bg-brand-blue border border-gray-700 p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-colors" 
                   placeholder="your@email.com" 
                   required
                 />
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-gray-400 mb-2">Service Required</label>
                 <select 
                   name="service"
                   value={formData.service}
                   onChange={handleChange}
                   className="w-full bg-brand-blue border border-gray-700 p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-colors"
                 >
                    <option>VMC Work</option>
                    <option>DRO Milling Work</option>
                    <option>Jig & Fixture</option>
                    <option>Jig Boring Work</option>
                    <option>Mould & Die Works</option>
                    <option>SPM Works</option>
                    <option>2D & 3D Design</option>
                    <option>Other</option>
                 </select>
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                 <textarea 
                   rows={4} 
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   className="w-full bg-brand-blue border border-gray-700 p-3 text-white focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-colors" 
                   placeholder="Describe your requirements..."
                   required
                 ></textarea>
               </div>
               
               <button 
                 type="submit" 
                 className="w-full bg-brand-yellow text-brand-blue font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
               >
                 <Send className="w-5 h-5" />
                 Send Request via Email
               </button>
               <p className="text-xs text-center text-gray-500 mt-2">
                 This will open your default email client to send the request to deepamtradeunion@gmail.com.
               </p>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};