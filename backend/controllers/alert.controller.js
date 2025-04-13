const twilio = require('twilio');
const dotenv = require('dotenv');
dotenv.config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

const sendFallAlert = async (req, res) => {
  const { message, location } = req.body;
  const caregiverPhone = '+91XXXXXXXXXX'; // Replace with actual caregiver number

  const alertText = `${message}! Location: https://maps.google.com/?q=${location.lat},${location.lon}`;

  try {
    // 1️⃣ Send SMS
    await client.messages.create({
      body: alertText,
      from: process.env.TWILIO_PHONE,
      to: caregiverPhone,
    });

    // 2️⃣ Make a call
    await client.calls.create({
      twiml: `<Response><Say>${message} detected. Please check the location. This is an automated alert from ElderGuard.</Say></Response>`,
      from: process.env.TWILIO_PHONE,
      to: caregiverPhone,
    });

    res.status(200).json({ success: true, msg: 'SMS and call sent to caregiver' });
  } catch (error) {
    console.error('❌ Twilio Error:', error);
    res.status(500).json({ success: false, msg: 'Failed to send alert' });
  }
};

module.exports = { sendFallAlert };
