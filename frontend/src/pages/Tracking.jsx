import { useState } from 'react';
import axios from 'axios';
import { Search, Package, MapPin, Clock, AlertCircle } from 'lucide-react';

function Tracking() {
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingId) return;
    
    setError('');
    setResult(null);
    setLoading(true);

    try {
      // NOTE: We use backticks (`) here, not single quotes (')
      const response = await axios.get(`https://atlas-logistics-backend.onrender.com/api/track/${trackingId}`);
      setResult(response.data);
    } catch (err) {
      setError("Tracking ID not found. Please try ATL123, ATL456, or ATL789.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Header */}
      <div className="bg-blue-900 py-16 text-center text-white">
        <h1 className="text-4xl font-black uppercase tracking-tight">Shipment Tracking</h1>
        <p className="text-blue-200 mt-2 font-medium italic underline decoration-red-600">Real-time updates for your global cargo</p>
      </div>

      {/* Search Box */}
      <div className="container mx-auto px-8 -mt-10">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-4 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Enter Tracking ID (e.g. ATL123)" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 font-bold"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
            </div>
            <button 
              onClick={handleTrack}
              disabled={loading}
              className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition shadow-lg uppercase tracking-widest text-sm disabled:bg-slate-400"
            >
              {loading ? "Searching..." : "Track Now"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg font-bold border border-red-100 text-sm">
              <AlertCircle size={18} /> {error}
            </div>
          )}
        </div>

        {/* RESULTS AREA */}
        {result && (
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
              {/* Status Banner */}
              <div className="bg-blue-900 p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Package size={24} className="text-red-500" />
                  <span className="font-bold uppercase tracking-widest text-sm italic">Shipment Found</span>
                </div>
                <span className="bg-red-600 px-6 py-1 rounded-full text-xs font-black uppercase tracking-tighter">
                  {result.status}
                </span>
              </div>

              {/* Details Content */}
              <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Tracking Number</label>
                    <p className="text-3xl font-black text-blue-900 tracking-tighter">{result.trackingId}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full text-blue-900"><MapPin size={24}/></div>
                    <div>
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Current Location</label>
                      <p className="text-lg font-bold text-slate-800">{result.currentLocation}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 border-l border-slate-100 pl-0 md:pl-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full text-blue-900"><Clock size={24}/></div>
                    <div>
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Last Updated</label>
                      <p className="text-lg font-bold text-slate-800">{new Date(result.lastUpdated).toLocaleString()}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">Contents</label>
                    <p className="text-lg font-bold text-slate-800 italic">"{result.description}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tracking;