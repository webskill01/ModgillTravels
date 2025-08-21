import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    const {
      customerName,
      customerPhone,
      customerEmail,
      tripType,
      vehicle,
      date,
      time,
      days,
      pickupAddress,
      dropAddress,
      specialRequests,
      totalFare,
      routeInfo
    } = data;

    // Validate required fields
    if (!customerName || !customerPhone || !tripType || !vehicle || !date || !time || !pickupAddress || !dropAddress) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure Gmail SMTP (Free Option)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Email content - matching your SMS format
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `🚗 NEW TAXI BOOKING from ${customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
          <h2 style="color: #0891b2; text-align: center; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
            🚗 NEW TAXI BOOKING
          </h2>
          
          <div style="background-color: #f8fafc; padding: 15px; margin: 15px 0; border-radius: 5px;">
            <h3 style="color: #1f2937; margin-bottom: 10px;">👤 CUSTOMER:</h3>
            <p style="margin: 5px 0;"><strong>${customerName}</strong></p>
            <p style="margin: 5px 0;">📞 ${customerPhone}</p>
            <p style="margin: 5px 0;">✉️ ${customerEmail || 'Not provided'}</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 15px; margin: 15px 0; border-radius: 5px;">
            <h3 style="color: #1f2937; margin-bottom: 10px;">🛣️ TRIP:</h3>
            <p style="margin: 5px 0;"><strong>${routeInfo?.from} to ${routeInfo?.to}</strong></p>
            <p style="margin: 5px 0;">${tripType === 'oneway' ? 'One Way' : `Round Trip (${days} days)`}</p>
            <p style="margin: 5px 0;">🚙 ${vehicle}</p>
          </div>

          <div style="background-color: #f0fdf4; padding: 15px; margin: 15px 0; border-radius: 5px;">
            <h3 style="color: #1f2937; margin-bottom: 10px;">📅 SCHEDULE:</h3>
            <p style="margin: 5px 0;"><strong>${date} at ${time}</strong></p>
            ${days > 1 ? `<p style="margin: 5px 0;">Duration: ${days} days</p>` : ''}
          </div>

          <div style="background-color: #fefce8; padding: 15px; margin: 15px 0; border-radius: 5px;">
            <h3 style="color: #1f2937; margin-bottom: 10px;">📍 ADDRESSES:</h3>
            <p style="margin: 5px 0;"><strong>PICKUP:</strong><br/>${pickupAddress}</p>
            <p style="margin: 5px 0;"><strong>DROP:</strong><br/>${dropAddress}</p>
          </div>

          <div style="background-color: #0891b2; color: white; padding: 15px; margin: 15px 0; border-radius: 5px; text-align: center;">
            <h3 style="margin: 0;">💰 FARE: ₹${totalFare?.toLocaleString() || 'TBD'}</h3>
          </div>

          ${specialRequests ? `
            <div style="background-color: #fdf2f8; padding: 15px; margin: 15px 0; border-radius: 5px;">
              <h3 style="color: #1f2937; margin-bottom: 10px;">📝 NOTES:</h3>
              <p style="margin: 5px 0;">${specialRequests}</p>
            </div>
          ` : ''}

          <div style="background-color: #ef4444; color: white; padding: 15px; margin: 15px 0; border-radius: 5px; text-align: center;">
            <p style="margin: 0; font-weight: bold;">⚠️ Please confirm this booking!</p>
          </div>

          <hr style="margin: 20px 0;">
          <p style="text-align: center; color: #666; font-size: 12px;">
            Booking submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}<br/>
            ModgillTravels Booking System
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Booking request sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request. Please try again.' },
      { status: 500 }
    );
  }
}
