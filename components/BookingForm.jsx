"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import destinations from "@/data/destinations";
import { VEHICLE_TYPES } from "@/data/vehicles";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LocalPhoneOutlined } from "@mui/icons-material";
import PricingInfoTooltip from "./PricingTooltip";

const schema = Yup.object().shape({
  tripType: Yup.string().oneOf(["oneway", "roundtrip"]).required(),
  vehicle: Yup.string().required("Please select a vehicle"),
  date: Yup.date()
    .required("Pickup date is required")
    .typeError("Please enter a valid date")
    .min(new Date(), "Date cannot be in the past"),
  time: Yup.string().required("Pickup time is required"),
  days: Yup.number()
  .typeError("Please enter a valid number of days")
  .when("tripType", {
    is: "roundtrip",
    then: (schema) =>
      schema
        .required("Days required for round trip")
        .min(1, "At least 1 day")
        .max(30, "Maximum 30 days"),
    otherwise: (schema) => schema.notRequired(),
  }),
  customerName: Yup.string()
    .required("Your name is required")
    .min(2, "Name too short"),
  customerPhone: Yup.string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Enter valid Indian mobile number"),
  customerEmail: Yup.string().email("Enter valid email").notRequired(),
  pickupAddress: Yup.string()
    .required("Exact pickup address is required")
    .min(10, "Please provide detailed pickup address"),
  dropAddress: Yup.string()
    .required("Exact drop address is required")
    .min(10, "Please provide detailed drop address"),
  specialRequests: Yup.string().max(500, "Maximum 500 characters"),
});

const vehicleOptions = Object.values(VEHICLE_TYPES);

export default function BookingForm() {
  const searchParams = useSearchParams();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const routeSlug = searchParams?.get("route");
  const preselectedVehicle = searchParams?.get("vehicle");
  const route = destinations.find((r) => r.slug === routeSlug);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      tripType: "oneway",
      vehicle: preselectedVehicle || "",
      date: "",
      time: "",
      days: 1,
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      pickupAddress: "",
      dropAddress: "",
      specialRequests: "",
    },
  });

  const watchedValues = watch(["tripType", "vehicle", "days", "time"]);
  const [tripType, vehicle, days,] = watchedValues;

  const getFare = () => {
    if (!vehicle || !route) return 0;

    const isRoundTrip = tripType === "roundtrip";
    let fare;

    if (isRoundTrip) {
      fare = route.roundTripFare?.[vehicle] || 0;
      // Add extra days cost (₹1000 per additional day)
      if (days > 1) {
        fare += 1000 * (days - 1);
      }
    } else {
      fare = route.fare?.[vehicle] || 0;
    }

    return fare;
  };

  const totalFare = getFare();

  const sendEmailNotification = async (data) => {
    try {
    // Super simple approach - just combine as strings
    const formatDateTime = (date, time) => {
      if (!date || !time) return 'Date/Time not provided';
      return `${String(date)} at ${String(time)}`;
    };

    const readableDateTime = formatDateTime(data.date, data.time);
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          readableDateTime,
          totalFare,
          routeInfo: {
            from: route.from,
            to: route.to,
            distance: route.distanceKm + " km",
            duration: route.duration,
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send booking request");
      }

      return result;
    } catch (error) {
      console.error("Email sending failed:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (submitStatus === "success") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [submitStatus]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email notification instead of SMS
      await sendEmailNotification(data);

      // Show success message
      setSubmitStatus("success");
    } catch (error) {
      console.error("Booking error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!route) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 text-center w-full max-w-md flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-14 h-14 bg-green-500/20 rounded-full mx-auto mb-4">
            <span className="text-green-400 text-2xl">
              <LocalPhoneOutlined />
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Call To Book</h1>
          <p className="text-gray-400 mb-8">
            Sorry, the requested route could not be found. Tap On this Number To
            Book Cab For This Route.
          </p>
          <div className="flex flex-col justify-center items-center gap-3 mb-4">
            <a
              href="tel:+916284992669"
              className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                <LocalPhoneOutlined className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <span className="text-sm text-white">+91-62849-92669</span>
              </div>
            </a>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg font-medium transition text-sm"
          >
            <ArrowBackIcon className="w-4 h-4" />
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  // Update the success message in your existing code
  if (submitStatus === "success") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 text-center w-full max-w-md">
          <div className="flex items-center justify-center w-14 h-14 bg-green-500/20 rounded-full mx-auto mb-4">
            <span className="text-green-400 text-2xl">✓</span>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-white mb-4">
            Booking Request Sent!
          </h2>
          <p className="text-gray-300 mb-6 text-sm">
            Your booking request has been sent. Our team will contact you within
            2 hours to confirm your booking and collect the advance payment.
          </p>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={() => {
                setSubmitStatus(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded-lg font-medium transition"
            >
              <span className="text-center w-full">Submit Another Booking</span>
            </button>
            <Link
              href="/"
              className="block w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (submitStatus === "error") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 text-center w-full max-w-md">
          <div className="flex items-center justify-center w-14 h-14 bg-red-500/20 rounded-full mx-auto mb-4">
            <span className="text-red-400 text-2xl">✗</span>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-300 mb-6 text-sm">
            Unable to send booking request. Please try again or contact us
            directly at
          </p>
          <div className="flex flex-col justify-center items-center gap-3 mb-4">
            <a
              href="tel:+916284992669"
              className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-cente">
                <LocalPhoneOutlined className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <span className="text-sm text-white">+91-62849-92669</span>
              </div>
            </a>
          </div>
          <button
            onClick={() => setSubmitStatus(null)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition text-sm"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8"
      >
        {/* Route Display */}
        <div className="mb-2 sm:mb-4 p-3 sm:p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex flex-col gap-2">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2 ">
                <DirectionsCarIcon className="text-cyan-400" />
                {route.from} to {route.to}
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                {route.distanceKm} km • {route.duration}
              </p>
            </div>
            <Link
              href={`/`}
              className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm flex items-center gap-1"
            >
              <ArrowBackIcon className="w-4 h-4" />
              Change Route
            </Link>
          </div>
        </div>

        {/* Trip Type */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
            Trip Type
          </label>
          <div className="flex gap-2 sm:grid sm:grid-cols-2 sm:gap-3">
            <label className="cursor-pointer flex-1">
              <input
                type="radio"
                {...register("tripType")}
                value="oneway"
                className="sr-only"
              />
              <div
                className={`w-full py-2 sm:py-3 px-2 sm:px-4 text-center rounded-lg border-2 transition text-xs sm:text-sm
                  ${
                    watch("tripType") === "oneway"
                      ? "border-cyan-400 bg-cyan-400/10 text-white"
                      : "border-gray-600 bg-gray-700 text-gray-200 hover:border-gray-500"
                  }`}
              >
                One Way
              </div>
            </label>
            <label className="cursor-pointer flex-1">
              <input
                type="radio"
                {...register("tripType")}
                value="roundtrip"
                className="sr-only"
              />
              <div
                className={`w-full py-2 sm:py-3 px-2 sm:px-4 text-center rounded-lg border-2 transition text-xs sm:text-sm
                  ${
                    watch("tripType") === "roundtrip"
                      ? "border-cyan-400 bg-cyan-400/10 text-white"
                      : "border-gray-600 bg-gray-700 text-gray-200 hover:border-gray-500"
                  }`}
              >
                Round Trip
              </div>
            </label>
          </div>
        </div>

        {/* Vehicle Selection */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
            Select Vehicle
          </label>
          <div className="grid grid-cols-1 gap-2 sm:gap-3">
            {vehicleOptions.map((v) => {
              // Get hardcoded fare from route data instead of calculating
              const isRoundTrip = tripType === "roundtrip";
              let vehiclePrice;

              if (isRoundTrip) {
                vehiclePrice = route?.roundTripFare?.[v.name] || 0;
                // Add extra days cost for round trips
                if (days > 1) {
                  vehiclePrice += 1000 * (days - 1);
                }
              } else {
                vehiclePrice = route?.fare?.[v.name] || 0;
              }

              return (
                <label key={v.name} className="cursor-pointer">
                  <input
                    type="radio"
                    {...register("vehicle")}
                    value={v.name}
                    className="sr-only"
                  />
                  <div
                    className={`p-3 rounded-md border-2 transition flex flex-col gap-2 ${
                      watch("vehicle") === v.name
                        ? "border-cyan-400 bg-cyan-400/10"
                        : "border-gray-600 bg-gray-700 hover:border-gray-500"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{v.icon}</span>
                      <span className="text-white font-medium text-xs md:text-sm">
                        {v.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">
                        {v.capacity} seats • {v.luggage}
                      </span>
                      <div className="text-cyan-400 font-bold text-sm flex flex-row gap-2 justify-center items-center">
                        ₹{vehiclePrice.toLocaleString()}
                        <PricingInfoTooltip
                          perKmRate={
                            tripType === "roundtrip"
                              ? v.perKmRateRound
                              : v.perKmRate
                          }
                          tripType={tripType}
                          days={days}
                        />
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">{v.description}</div>
                    <div className="text-gray-400 text-xs">
                      {v.models ? (
                        <span className="text-white">
                          Models:{" "}
                          <span className="text-gray-400">{v.models}</span>{" "}
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                    {/* <div className="text-xs text-gray-400">
                      {tripType === "roundtrip"? `₹${v.perKmRateRound}/km •${" "}`:`₹${v.perKmRate}/km •${" "}`}
                      {tripType === "roundtrip" ? `${days} days` : "one way"}
                    </div> */}
                  </div>
                </label>
              );
            })}
          </div>
          {errors.vehicle && (
            <p className="text-red-400 text-xs mt-1">
              {errors.vehicle.message}
            </p>
          )}
        </div>

        {/* Schedule Section */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
            Schedule
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Pickup Date
              </label>
              <input
                type="date"
                {...register("date")}
                className="w-full rounded-lg p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 text-xs sm:text-sm"
              />
              {errors.date && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Pickup Time
              </label>
              <input
                type="time"
                {...register("time")}
                className="w-full rounded-lg p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 text-xs sm:text-sm"
              />
              {errors.time && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.time.message}
                </p>
              )}
            </div>
            {tripType === "roundtrip" && (
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                  Days
                </label>
                <input
                  type="number"
                  min="1"
                  defaultValue={1}
                  max="30"
                  {...register("days")}
                  className="w-full rounded-lg p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 text-xs sm:text-sm"
                />
                <span className="text-center text-xs text-gray-500 h-10">
                  Note* A Day Means a Single Calender Day (From 12AM To 12AM)
                </span>
                {errors.days && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.days.message}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Customer Details */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4 flex items-center gap-2">
            <PersonIcon className="text-cyan-400" />
            Customer Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-2">
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                {...register("customerName")}
                placeholder="Enter your full name"
                className="w-full rounded-lg p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 placeholder-gray-400 text-xs sm:text-sm"
              />
              {errors.customerName && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.customerName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register("customerPhone")}
                placeholder="Enter 10-digit mobile number"
                className="w-full rounded-lg p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 placeholder-gray-400 text-xs sm:text-sm"
              />
              {errors.customerPhone && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.customerPhone.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-xs sm:text-sm text-gray-300 mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              {...register("customerEmail")}
              placeholder="Enter your email address"
              className="w-full rounded-lg p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 placeholder-gray-400 text-xs sm:text-sm"
            />
            {errors.customerEmail && (
              <p className="text-red-400 text-xs mt-1">
                {errors.customerEmail.message}
              </p>
            )}
          </div>
        </div>

        {/* Location Details */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4 flex items-center gap-2">
            <LocationOnIcon className="text-cyan-400" />
            Exact Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-2">
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Exact Pickup Address *
              </label>
              <textarea
                {...register("pickupAddress")}
                rows="3"
                placeholder="Enter complete pickup address with landmarks..."
                className="w-full rounded-lg p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 placeholder-gray-400 resize-none text-xs sm:text-sm"
              ></textarea>
              {errors.pickupAddress && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.pickupAddress.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1">
                Exact Drop Address *
              </label>
              <textarea
                {...register("dropAddress")}
                rows="3"
                placeholder="Enter complete drop address with landmarks..."
                className="w-full rounded-lg p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 placeholder-gray-400 resize-none text-xs sm:text-sm"
              ></textarea>
              {errors.dropAddress && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.dropAddress.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-xs sm:text-sm text-gray-300 mb-1">
              Special Requests (Optional)
            </label>
            <textarea
              {...register("specialRequests")}
              rows="2"
              placeholder="Any special requirements or instructions..."
              className="w-full rounded-lg p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 placeholder-gray-400 resize-none text-xs sm:text-sm"
            ></textarea>
            {errors.specialRequests && (
              <p className="text-red-400 text-xs mt-1">
                {errors.specialRequests.message}
              </p>
            )}
          </div>
        </div>

        {/* Fare Display */}
        {totalFare > 0 && (
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Total Fare
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {tripType === "roundtrip"
                    ? `Round trip (${days} days)`
                    : "One way"}{" "}
                  • {vehicle}
                </p>
              </div>
              <div className="sm:text-right">
                <div className="text-lg sm:text-2xl font-bold text-cyan-400">
                  ₹{totalFare.toLocaleString()}
                </div>
                <p className="text-xs text-gray-400">*Parking Charges extra</p>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:scale-100 text-xs sm:text-base text-center mx-auto"
        >
          {isSubmitting ? (
            <span className="w-full text-center"> Sending Request...</span>
          ) : (
            <span className="w-full text-center">Book Now</span>
          )}
        </button>

        <p className="text-center text-xs text-gray-500 pt-6 sm:pt-4">
          By clicking "Book Now", you agree to our terms and conditions. A
          booking request will be to our team.
        </p>
      </form>
    </div>
  );
}
