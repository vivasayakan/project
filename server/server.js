const mqtt = require('mqtt');
const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://vivasayakan:<vivasay5#>@cluster0.0amle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema for sensor data
const sensorDataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  soil_moisture: Number,
  nitrogen: Number,
  phosphorus: Number,
  potassium: Number,
  timestamp: { type: Date, default: Date.now },
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

// MQTT Client
const client = mqtt.connect('a45263db9fad4d9e9b4fec7081953d6b.s1.eu.hivemq.cloud', {
  username: 'vivasaykan',
  password: 'Vivasay5#',
});

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('sensor/data');
});

client.on('message', (topic, message) => {
  const data = JSON.parse(message.toString());
  const sensorData = new SensorData(data);
  sensorData.save()
    .then(() => console.log('Data saved to MongoDB'))
    .catch(err => console.error('Error saving data:', err));
});

// Express server
const app = express();
app.get('/data', async (req, res) => {
  const data = await SensorData.find().sort({ timestamp: -1 });
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});