const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Shipment = require('./models/Shipment'); // Import the model we made in Step 2

const app = express();
app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Atlas Database Connected!"))
  .catch(err => console.log("❌ DB Connection Error:", err));

// 2. Base Route
app.get('/', (req, res) => {
  res.send("Atlas Logistics API is running...");
});

// 3. SEED ROUTE: Visit http://localhost:5000/api/seed to add test data
app.get('/api/seed', async (req, res) => {
  try {
    await Shipment.deleteMany(); // Deletes old test data so we start fresh
    await Shipment.create([
      { 
        trackingId: "ATL123", 
        status: "In Transit", 
        currentLocation: "New York, NY", 
        description: "Industrial Spare Parts" 
      },
      { 
        trackingId: "ATL456", 
        status: "Pending Customs", 
        currentLocation: "Houston Port, TX", 
        description: "Medical Equipment" 
      },
      { 
        trackingId: "ATL789", 
        status: "Delivered", 
        currentLocation: "Los Angeles, CA", 
        description: "Consumer Electronics" 
      }
    ]);
    res.send("✅ Success: Database has been seeded with 3 test shipments (ATL123, ATL456, ATL789)!");
  } catch (error) {
    res.status(500).send("❌ Error seeding database: " + error.message);
  }
});

// 4. THE SEARCH ROUTE: This is what the "Track" button will use
app.get('/api/track/:id', async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ trackingId: req.params.id });
    if (!shipment) {
      return res.status(404).json({ message: "Tracking ID not found in our system" });
    }
    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));