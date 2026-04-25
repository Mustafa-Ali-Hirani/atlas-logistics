const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  trackingId: { type: String, required: true, unique: true },
  status: { type: String, required: true }, // e.g., "In Transit", "Delivered"
  currentLocation: { type: String, required: true },
  description: { type: String },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shipment', shipmentSchema);