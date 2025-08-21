import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const testGmail = async () => {
  console.log('Testing Gmail configuration...');
  console.log('Gmail User:', process.env.GMAIL_USER);
  console.log('App Password present:', !!process.env.GMAIL_APP_PASSWORD);

  // ✅ CORRECT: createTransport (not createTransporter)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: '🚗 Test Email - ModgillTravels Setup',
      html: `
        <h2>Gmail SMTP Test Successful! ✅</h2>
        <p>Your booking system is ready to send emails.</p>
        <p>Timestamp: ${new Date().toLocaleString()}</p>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('❌ Email test failed:', error);
  }
};

testGmail();
