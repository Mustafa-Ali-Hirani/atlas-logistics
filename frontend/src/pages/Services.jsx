import { Plane, Ship, Truck, Warehouse, CheckCircle } from 'lucide-react';

function Services() {
  const serviceList = [
    {
      title: "Air Freight",
      desc: "Fastest global delivery via our airline network.",
      icon: <Plane size={40} />,
      image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=800"
    },
    {
      title: "Ocean Freight",
      desc: "Economical sea transport for large international cargo.",
      icon: <Ship size={40} />,
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800"
    },
    {
      title: "Road Transport",
      desc: "Reliable trucking and distribution across North America.",
      icon: <Truck size={40} />,
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800"
    },
    {
      title: "Warehousing",
      desc: "Secure storage and inventory management solutions.",
      icon: <Warehouse size={40} />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Page Header */}
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-5xl font-black uppercase tracking-tight">Our Services</h1>
        <p className="text-red-500 font-bold mt-2 uppercase tracking-widest text-sm underline decoration-white">Reliable Logistics Solutions</p>
      </div>

      <div className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {serviceList.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition">
              <img src={service.image} className="w-full md:w-48 h-48 object-cover rounded-xl shadow-lg" alt={service.title} />
              <div>
                <div className="text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 uppercase">{service.title}</h3>
                <p className="text-slate-600 mt-2 font-medium leading-relaxed">{service.desc}</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle size={16} className="text-red-600"/> 24/7 Tracking</li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle size={16} className="text-red-600"/> Secure Handling</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;