import site from "@/data/site";
import Button from "./Button";
import { WhatsAppIcon, PhoneIcon } from "@/components/Icons";

// The booking interaction for the whole site. Replaces ~1,838 lines of form,
// fare calculator, vehicle picker and summary — customers were sending a
// WhatsApp message anyway, and /book drew 3 impressions in 90 days.
//
// `route` prefills the message so the driver gets pickup and drop without
// another round trip.
export default function BookCta({
  route,
  size = "md",
  align = "start",
  className = "",
}) {
  const message = route
    ? `Hi, I'd like to book a taxi from ${route.from} to ${route.to}.`
    : "Hi, I'd like to book a taxi.";

  const waHref = `${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={[
        "flex flex-wrap gap-3",
        align === "center" ? "justify-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Button variant="whatsapp" size={size} href={waHref} external>
        <WhatsAppIcon className="w-5 h-5" />
        Book on WhatsApp
      </Button>
      <Button variant="call" size={size} href={`tel:${site.callPhone}`}>
        <PhoneIcon className="w-5 h-5" />
        Call Now
      </Button>
    </div>
  );
}
