import { Truck, Globe, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [id, setId] = useState('');

  // This function runs when the user clicks the Track Now button
  const handleTrackRedirect = () => {
    if (id.trim()) {
      // This sends the user to the Tracking Page
      navigate('/tracking');
    } else {
      alert("Please enter a tracking ID first!");
    }
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10 text-white">
            <h1 className="text-6xl font-black uppercase leading-tight tracking-tighter">
              Fast, Reliable <br/> 
              <span className="text-red-600">Global Logistics.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-xl italic font-medium">
              "Atlas Logistics is the United States' premier freight forwarding network. We move your cargo with precision."
            </p>

            {/* THE TRACKING BOX (Now Working) */}
            <div className="mt-10 bg-white p-2 rounded-lg flex flex-col md:flex-row max-w-xl border-4 border-white/20 shadow-2xl">
              <input 
                type="text" 
                placeholder="Enter Tracking ID (e.g. ATL123)" 
                className="flex-grow p-4 text-slate-800 focus:outline-none font-bold text-lg"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <button 
                onClick={handleTrackRedirect}
                className="bg-blue-900 text-white px-10 py-4 rounded font-bold uppercase text-sm hover:bg-red-600 transition duration-300 shadow-lg"
              >
                Track Now
              </button>
            </div>
            <p className="mt-4 text-slate-400 text-xs uppercase tracking-widest font-bold">
              Try: ATL123, ATL456, or ATL789
            </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center">
                <div className="bg-slate-50 p-5 rounded-full text-blue-900 mb-6 border-b-4 border-red-600 shadow-sm"><Globe size={40} /></div>
                <h3 className="font-extrabold uppercase text-slate-900 tracking-tighter">Worldwide Shipping</h3>
                <p className="text-slate-500 text-xs mt-2 uppercase font-bold tracking-widest">200+ Countries</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-slate-50 p-5 rounded-full text-blue-900 mb-6 border-b-4 border-red-600 shadow-sm"><Truck size={40} /></div>
                <h3 className="font-extrabold uppercase text-slate-900 tracking-tighter">Ground Transport</h3>
                <p className="text-slate-500 text-xs mt-2 uppercase font-bold tracking-widest">Full USA Coverage</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-slate-50 p-5 rounded-full text-blue-900 mb-6 border-b-4 border-red-600 shadow-sm"><Clock size={40} /></div>
                <h3 className="font-extrabold uppercase text-slate-900 tracking-tighter">On-Time Delivery</h3>
                <p className="text-slate-500 text-xs mt-2 uppercase font-bold tracking-widest">Fast & Efficient</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-slate-50 p-5 rounded-full text-blue-900 mb-6 border-b-4 border-red-600 shadow-sm"><ShieldCheck size={40} /></div>
                <h3 className="font-extrabold uppercase text-slate-900 tracking-tighter">Secure Handling</h3>
                <p className="text-slate-500 text-xs mt-2 uppercase font-bold tracking-widest">Full Cargo Insurance</p>
            </div>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-red-600 font-bold uppercase text-sm tracking-widest">What We Offer</h2>
              <h1 className="text-5xl font-black text-slate-900 mt-2 uppercase tracking-tighter">Core Logistics Solutions</h1>
            </div>
            <div className="hidden md:block">
              <button className="flex items-center gap-2 text-blue-900 font-bold border-b-2 border-red-600 pb-1 uppercase text-xs tracking-widest">
                View All <ArrowRight size={16}/>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {/* Service Card 1 */}
             <div className="group bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-2xl transition duration-500">
                <div className="overflow-hidden h-64">
                   <img src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=800" className="h-full w-full object-cover group-hover:scale-110 transition duration-700"/>
                </div>
                <div className="p-10">
                    <h3 className="text-2xl font-bold uppercase text-blue-900">Air Freight</h3>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">Urgent global delivery solutions via our airline partners.</p>
                    <button className="mt-6 text-red-600 font-bold uppercase text-xs tracking-widest flex items-center gap-2">Read More <ArrowRight size={14}/></button>
                </div>
             </div>
             {/* Service Card 2 */}
             <div className="group bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-2xl transition duration-500">
                <div className="overflow-hidden h-64">
                   <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800" className="h-full w-full object-cover group-hover:scale-110 transition duration-700"/>
                </div>
                <div className="p-10">
                    <h3 className="text-2xl font-bold uppercase text-blue-900">Ocean Freight</h3>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">Reliable sea transport for large international shipping.</p>
                    <button className="mt-6 text-red-600 font-bold uppercase text-xs tracking-widest flex items-center gap-2">Read More <ArrowRight size={14}/></button>
                </div>
             </div>
             {/* Service Card 3 */}
             <div className="group bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-2xl transition duration-500">
                <div className="overflow-hidden h-64">
                   <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800" className="h-full w-full object-cover group-hover:scale-110 transition duration-700"/>
                </div>
                <div className="p-10">
                    <h3 className="text-2xl font-bold uppercase text-blue-900">Road Freight</h3>
                    <p className="mt-4 text-slate-600 font-medium leading-relaxed">Comprehensive trucking solutions across the continent.</p>
                    <button className="mt-6 text-red-600 font-bold uppercase text-xs tracking-widest flex items-center gap-2">Read More <ArrowRight size={14}/></button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;