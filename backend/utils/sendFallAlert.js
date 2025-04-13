const twilio = require('twilio');
const dotenv = require('dotenv');
dotenv.config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

const sendFallAlert = async ({ message, location, caregiverPhone }) => {
  const alertText = `${message}! Location: https://maps.google.com/?q=${location.lat},${location.lon}`;

  try {
    // Send SMS
    await client.messages.create({
      body: alertText,
      from: process.env.TWILIO_PHONE,
      to: caregiverPhone,
    });

    // Make a call
    await client.calls.create({
      twiml: `<Response><Say>${message} detected. Please check the location. This is an automated alert from ElderGuard.</Say></Response>`,
      from: process.env.TWILIO_PHONE,
      to: caregiverPhone,
    });

    console.log("✅ Alert sent to caregiver");
  } catch (error) {
    console.error("❌ Failed to send alert via Twilio:", error.message);
  }
};

module.exports = sendFallAlert;
