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
  "Mohali",
  "Ludhiana",
  "Jalandhar",
  "Amritsar",
  "Sangrur",
  "Sunam",
  "Mansa",
  "Bathinda",
  "Other Punjab area",
  "Ambala",
  "Karnal",
  "Kaithal",
  "Kurukshetra",
  "Sonipat",
  "Panipat",
  "Other Haryana area",
  "Shimla",
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
    console.log("Form submitted with data:", data); // Debug log

    // First try to find exact route match
    const route = destinations.find(
      (r) =>
        (r.from === data.from && r.to === data.to) ||
        (r.from === data.to && r.to === data.from)
    );

    console.log("Found route:", route); // Debug log

    if (route) {
      // If route exists, go to route details page
      console.log("Navigating to:", `/routes/${route.slug}`); // Debug log
      router.push(`/routes/${route.slug}`);
    } else {
      // If no route found, go to book page with search params
      const query = new URLSearchParams();
      query.set("from", data.from);
      query.set("to", data.to);
      console.log("Navigating to:", `/book?${query.toString()}`); // Debug log
      router.push(`/book?${query.toString()}`);
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left: Simplified Search Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl shadow-md w-full mx-auto"
      >
        <h1 className="text-3xl font-extrabold text-cyan-400 mb-6 text-center lg:text-left">
          Find Your Cab
        </h1>
        <p className="text-gray-300 text-sm mb-6 text-center lg:text-left">
          Select your pickup and destination to find available cabs
        </p>

        {/* From and To Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2 font-medium">
              From
            </label>
            <input
              list="locations-list"
              {...register("from")}
              className="w-full rounded-lg p-3 text-sm bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              placeholder="Type or select Pickup Location"
              autoComplete="off"
            />
            <datalist id="locations-list">
              {locations.map((loc) => (
                <option key={loc} value={loc} />
              ))}
            </datalist>

            {errors.from && (
              <p className="text-red-500 mt-1 text-xs">{errors.from.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2 font-medium">
              From
            </label>
            <input
              list="locations-list"
              {...register("to")}
              className="w-full rounded-lg p-3 text-sm bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              placeholder="Type or select Pickup Location"
              autoComplete="off"
            />
            <datalist id="locations-list">
              {locations.map((loc) => (
                <option key={loc} value={loc} />
              ))}
            </datalist>

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
          <span className="w-full"> Find Cabs</span>
        </button>

        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            ✓ Transparent pricing • ✓ Professional drivers • ✓ 24/7 support
          </p>
        </div>
      </form>

      {/* Right: Car Image - Hidden on mobile */}
      <div className="hidden lg:flex justify-center w-full relative h-full ">
        <Image
          src="/car-caption.png"
          alt="Taxi Car"
          sizes=""
          fill
          className="rounded-2xl shadow-lg object-contain "
          priority
        />
      </div>
    </section>
  );
}
