import { Target, Eye, Users } from 'lucide-react';

function About() {
  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-5xl font-black uppercase tracking-tight">About Us</h1>
        <p className="text-red-500 font-bold mt-2 uppercase tracking-widest text-sm italic">"Moving the world since 1995"</p>
      </div>

      <div className="container mx-auto px-8 py-20">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-4xl font-black text-blue-900 uppercase mb-6 tracking-tighter">Your Partner in <br/> Global Commerce</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Atlas Logistics was founded on a simple principle: making global trade accessible for everyone. 
              With over 25 years of experience, we have built a network that covers 200+ countries, 
              ensuring your cargo arrives safely and on time.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-50 p-8 rounded-xl border-l-8 border-blue-900">
              <Target className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold uppercase text-slate-900">Our Mission</h3>
              <p className="text-slate-600 mt-2 font-medium">To provide transparent, tech-driven logistics that empower businesses to scale globally.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border-l-8 border-red-600">
              <Eye className="text-blue-900 mb-4" size={32} />
              <h3 className="text-xl font-bold uppercase text-slate-900">Our Vision</h3>
              <p className="text-slate-600 mt-2 font-medium">To be the world's most trusted freight forwarding network through reliability and innovation.</p>
            </div>
          </div>
        </div>

        {/* Team Section Skeleton */}
        <div className="text-center bg-slate-50 py-16 rounded-3xl border border-slate-100">
          <Users className="mx-auto text-red-600 mb-4" size={48} />
          <h2 className="text-3xl font-black text-blue-900 uppercase">Our Global Team</h2>
          <p className="text-slate-500 mt-2 font-medium max-w-xl mx-auto">
            Led by industry veterans in New York, London, and Singapore, our team works 24/7 to monitor your shipments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-8">
             <div className="bg-white p-6 rounded-xl shadow-sm italic text-slate-600 font-medium">"Logistics is about trust, not just trucks."</div>
             <div className="bg-white p-6 rounded-xl shadow-sm italic text-slate-600 font-medium">"Speed is good, but safety is everything."</div>
             <div className="bg-white p-6 rounded-xl shadow-sm italic text-slate-600 font-medium">"We bridge the gap between continents."</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;