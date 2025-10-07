"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Image from "next/image";
import destinations from "../data/destinations";

const schema = Yup.object().shape({
  from: Yup.string().required("Pickup is required"),
  to: Yup.string().required("Destination is required"),
});

const locations = [
  "Patiala",
  "Delhi",
  "Chandigarh",
  "Ludhiana",
  "Jalandhar",
  "Amritsar",
  "Ambala",
  "Shimla",
  "Manali"
];

export default function HeroSection() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      from: "",
      to: "",
    },
  });

  function onSubmit(data) {
    console.log("Form submitted with data:", data);

    const route = destinations.find(
      (r) => r.from === data.from && r.to === data.to
    );

    console.log("Found route:", route);

    if (route) {
      console.log("Navigating to:", `/routes/${route.slug}`);
      router.push(`/routes/${route.slug}`);
    } else {
      const query = new URLSearchParams();
      query.set("from", data.from);
      query.set("to", data.to);
      console.log("Navigating to:", `/book?${query.toString()}`);
      router.push(`/book?${query.toString()}`);
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 md:py-6 md:gap-16 items-center">
      {/* Left: Search Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 pb-0 rounded-2xl shadow-md w-full mx-auto"
      >
        {/* SEO-Enhanced H1 - Clean and Minimal */}
        <h1 className="text-3xl font-extrabold text-cyan-400 mb-6 text-center lg:text-left">
          Best Taxi Service in Patiala
        </h1>
        
        {/* Natural Description with Keywords */}
        <p className="text-gray-300 text-sm mb-6 text-center lg:text-left">
          Book reliable cab service with professional drivers. One way or round trip – transparent pricing, 24/7 availability.
        </p>

        {/* From and To Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2 font-medium">
              From
            </label>
            <select
              {...register("from")}
              className="w-full rounded-lg p-3 text-sm bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            >
              <option value="">Select Pickup Location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            {errors.from && (
              <p className="text-red-500 mt-1 text-xs">{errors.from.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2 font-medium">
              To
            </label>
            <select
              {...register("to")}
              className="w-full rounded-lg p-3 text-sm bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            >
              <option value="">Select Destination</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            {errors.to && (
              <p className="text-red-500 mt-1 text-xs">{errors.to.message}</p>
            )}
          </div>
        </div>

        {/* Find Cabs Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full font-bold text-white transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/25"
        >
          <span className="w-full">Find Cabs</span>
        </button>

        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            ✓ Transparent pricing • ✓ Professional drivers • ✓ 24/7 support
          </p>
        </div>
      </form>

      {/* Right: Car Image */}
      <div className="flex justify-center w-full relative h-48 lg:h-full">
        <Image
          src="/car-caption.png"
          alt="ModgillTravels Taxi Service in Patiala - Professional Cab Booking"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="rounded-2xl shadow-lg object-contain"
          priority
        />
      </div>
    </section>
  );
}
