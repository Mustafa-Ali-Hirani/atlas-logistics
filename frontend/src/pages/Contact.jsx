import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

function Contact() {
  return (
    <div className="bg-white font-sans text-slate-900">
      {/* Page Header */}
      <div className="bg-slate-900 py-20 text-center text-white uppercase">
        <h1 className="text-5xl font-black tracking-tight">Contact Us</h1>
        <p className="text-red-500 font-bold mt-2 tracking-widest text-sm">Get a Freight Quote Today</p>
      </div>

      <div className="container mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Information */}
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-black text-blue-900 uppercase tracking-tighter">Ready to move <br/> your cargo?</h2>
            <p className="mt-6 text-slate-600 text-lg font-medium leading-relaxed">
              Our team of logistics experts is standing by 24/7 to help you with your shipping needs. Contact us via phone, email, or visit our Houston headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-4 rounded-xl text-red-600"><Phone size={24}/></div>
              <div>
                <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest">Call Us</h4>
                <p className="font-bold text-slate-700">+1 (800) ATLAS-LOG</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-4 rounded-xl text-red-600"><Mail size={24}/></div>
              <div>
                <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest">Email Us</h4>
                <p className="font-bold text-slate-700">quote@atlas.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-4 rounded-xl text-red-600"><MapPin size={24}/></div>
              <div>
                <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest">Headquarters</h4>
                <p className="font-bold text-slate-700">123 Logistics Way, TX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-4 rounded-xl text-red-600"><Clock size={24}/></div>
              <div>
                <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest">Hours</h4>
                <p className="font-bold text-slate-700">24/7 Operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Quote/Contact Form */}
        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl">
          <h3 className="text-2xl font-black text-blue-900 uppercase mb-8">Request a Quote</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 font-medium" />
              <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 font-medium" />
            </div>
            <select className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 font-medium bg-white">
              <option>Select Service</option>
              <option>Air Freight</option>
              <option>Ocean Freight</option>
              <option>Road Transport</option>
            </select>
            <textarea placeholder="Your Message / Shipping Details" rows="4" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 font-medium"></textarea>
            <button className="w-full bg-red-600 text-white py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-700 transition shadow-lg">
              SEND MESSAGE <Send size={20}/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;