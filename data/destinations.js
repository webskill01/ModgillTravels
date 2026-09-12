// data/destinations.js
//
// Distances and durations verified September 2026 against Yatra, Savaari,
// Rome2Rio and distancebetween2. The previous figures were wrong on five
// routes — Amritsar by 68 km, Manali by 56, Jalandhar by 54, Ambala by 32 and
// Delhi by 10 — which matters because distance queries are what this site
// actually ranks for ("patiala to manali distance" alone draws 134
// impressions at position 11.8).
//
// `journey`, `stop` and `tip` carry the per-route detail that makes each page
// genuinely distinct. Do not template them: pages generated from one sentence
// with the names swapped are what Google calls scaled content abuse.

const destinations = [
  {
    "id": "Patiala-to-Delhi",
    "slug": "patiala-to-delhi",
    "from": "Patiala",
    "to": "Delhi",
    "distanceKm": 250,
    "duration": "5-5.5 hours",
    "highway": "NH44",
    "via": [
      "Rajpura",
      "Ambala",
      "Karnal",
      "Panipat",
      "Sonipat"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Patiala to Delhi — 250 km via NH44, about 5-5.5 hours.",
    "journey": "The whole run is on NH44, the old Grand Trunk Road corridor, and it is four to six lanes of well-surfaced highway the entire way. Traffic is the variable, not the road: the stretch around Karnal and again at the Delhi border is where an otherwise five-hour drive turns into seven.",
    "stop": "Murthal, about 40 km short of Delhi, is the traditional stop — a strip of dhabas known across north India for paranthas, open at any hour.",
    "tip": "Leave between 5 and 7 AM. It clears Karnal before the trucks build up and puts you past the Delhi border ahead of the office rush."
  },
  {
    "id": "Delhi-to-Patiala",
    "slug": "delhi-to-patiala",
    "from": "Delhi",
    "to": "Patiala",
    "distanceKm": 250,
    "duration": "5-5.5 hours",
    "highway": "NH44",
    "via": [
      "Sonipat",
      "Panipat",
      "Karnal",
      "Ambala",
      "Rajpura"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Delhi to Patiala — 250 km via NH44, about 5-5.5 hours.",
    "journey": "The whole run is on NH44, the old Grand Trunk Road corridor, and it is four to six lanes of well-surfaced highway the entire way. Traffic is the variable, not the road: the stretch around Karnal and again at the Delhi border is where an otherwise five-hour drive turns into seven. Coming the other way, the Delhi end is the slow part — clearing the city and the Sonipat corridor. Once past Panipat the road opens up.",
    "stop": "Murthal, about 40 km short of Delhi, is the traditional stop — a strip of dhabas known across north India for paranthas, open at any hour.",
    "tip": "Leave between 5 and 7 AM. It clears Karnal before the trucks build up and puts you past the Delhi border ahead of the office rush."
  },
  {
    "id": "Patiala-to-Chandigarh",
    "slug": "patiala-to-chandigarh",
    "from": "Patiala",
    "to": "Chandigarh",
    "distanceKm": 68,
    "duration": "1.5 hours",
    "highway": "NH64 / NH5",
    "via": [
      "Rajpura",
      "Zirakpur"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Patiala to Chandigarh — 68 km via NH64 / NH5, about 1.5 hours.",
    "journey": "A short, flat run on good dual carriageway. The only real bottleneck is Zirakpur, where the Ambala, Panchkula and Chandigarh traffic all meets; the rest moves freely.",
    "stop": "No stop needed on a drive this short, though Rajpura has plenty of roadside options if you want one.",
    "tip": "Avoid 9-10:30 AM and 5-7 PM, when Zirakpur backs up with Chandigarh commuter traffic and can add half an hour on its own."
  },
  {
    "id": "Chandigarh-to-Patiala",
    "slug": "chandigarh-to-patiala",
    "from": "Chandigarh",
    "to": "Patiala",
    "distanceKm": 68,
    "duration": "1.5 hours",
    "highway": "NH64 / NH5",
    "via": [
      "Zirakpur",
      "Rajpura"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Chandigarh to Patiala — 68 km via NH64 / NH5, about 1.5 hours.",
    "journey": "A short, flat run on good dual carriageway. The only real bottleneck is Zirakpur, where the Ambala, Panchkula and Chandigarh traffic all meets; the rest moves freely. In this direction Zirakpur comes early rather than late, so an off-peak start matters more than the rest of the drive.",
    "stop": "No stop needed on a drive this short, though Rajpura has plenty of roadside options if you want one.",
    "tip": "Avoid 9-10:30 AM and 5-7 PM, when Zirakpur backs up with Chandigarh commuter traffic and can add half an hour on its own."
  },
  {
    "id": "Patiala-to-Shimla",
    "slug": "patiala-to-shimla",
    "from": "Patiala",
    "to": "Shimla",
    "distanceKm": 170,
    "duration": "4.5-5 hours",
    "highway": "NH5",
    "via": [
      "Rajpura",
      "Zirakpur",
      "Kalka",
      "Parwanoo",
      "Solan"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Hill-Experienced Driver"
    ],
    "description": "Taxi from Patiala to Shimla — 170 km via NH5, about 4.5-5 hours.",
    "journey": "Two very different halves. The first 90 km to Kalka is flat highway driving. After Kalka the road climbs roughly 83 km through the Shivaliks to Shimla, and that hill section alone takes close to three hours — the altitude gain and the curves set the pace, not the distance. You pass Parwanoo, Dharampur, Barog, Solan and Shoghi on the way up.",
    "stop": "Barog or Solan, both on the climb, are the usual breaks. Solan has proper restaurants; Barog is the more scenic of the two.",
    "tip": "Start early. Afternoon fog and the Shimla ghat traffic both worsen after 3 PM, and the last stretch into town is slow at any hour."
  },
  {
    "id": "Shimla-to-Patiala",
    "slug": "shimla-to-patiala",
    "from": "Shimla",
    "to": "Patiala",
    "distanceKm": 170,
    "duration": "4.5-5 hours",
    "highway": "NH5",
    "via": [
      "Solan",
      "Parwanoo",
      "Kalka",
      "Zirakpur",
      "Rajpura"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Hill-Experienced Driver"
    ],
    "description": "Taxi from Shimla to Patiala — 170 km via NH5, about 4.5-5 hours.",
    "journey": "Two very different halves. The first 90 km to Kalka is flat highway driving. After Kalka the road climbs roughly 83 km through the Shivaliks to Shimla, and that hill section alone takes close to three hours — the altitude gain and the curves set the pace, not the distance. You pass Parwanoo, Dharampur, Barog, Solan and Shoghi on the way up. Downhill first: the descent from Shimla to Kalka is the slow section, and it is easier on passengers who feel the curves. The run from Kalka into Patiala is quick.",
    "stop": "Barog or Solan, both on the climb, are the usual breaks. Solan has proper restaurants; Barog is the more scenic of the two.",
    "tip": "Start early. Afternoon fog and the Shimla ghat traffic both worsen after 3 PM, and the last stretch into town is slow at any hour."
  },
  {
    "id": "Patiala-to-Manali",
    "slug": "patiala-to-manali",
    "from": "Patiala",
    "to": "Manali",
    "distanceKm": 357,
    "duration": "8-9 hours",
    "highway": "NH205 / NH3",
    "via": [
      "Chandigarh",
      "Kiratpur Sahib",
      "Bilaspur",
      "Sundernagar",
      "Mandi",
      "Kullu",
      "Bhuntar"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Hill-Experienced Driver"
    ],
    "description": "Taxi from Patiala to Manali — 357 km via NH205 / NH3, about 8-9 hours.",
    "journey": "The longest route we run, and the one most often underestimated. Chandigarh to Mandi on NH3 is wide and quick, but the Kiratpur Sahib to Bilaspur stretch carries heavy truck traffic and routinely adds an hour. Past Mandi the road enters the Beas valley and climbs through the Pandoh Dam section and the Aut Tunnel before the final run up through Kullu and Bhuntar.",
    "stop": "Sundernagar or Mandi, roughly the halfway mark, is where most drivers break. Beyond Mandi the stops thin out.",
    "tip": "This is a full day. Leaving Patiala by 5 AM gets you into Manali in daylight; leaving after 8 AM usually means arriving after dark on mountain road, which we would rather avoid."
  },
  {
    "id": "Manali-to-Patiala",
    "slug": "manali-to-patiala",
    "from": "Manali",
    "to": "Patiala",
    "distanceKm": 357,
    "duration": "8-9 hours",
    "highway": "NH205 / NH3",
    "via": [
      "Bhuntar",
      "Kullu",
      "Mandi",
      "Sundernagar",
      "Bilaspur",
      "Kiratpur Sahib",
      "Chandigarh"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Hill-Experienced Driver"
    ],
    "description": "Taxi from Manali to Patiala — 357 km via NH205 / NH3, about 8-9 hours.",
    "journey": "The longest route we run, and the one most often underestimated. Chandigarh to Mandi on NH3 is wide and quick, but the Kiratpur Sahib to Bilaspur stretch carries heavy truck traffic and routinely adds an hour. Past Mandi the road enters the Beas valley and climbs through the Pandoh Dam section and the Aut Tunnel before the final run up through Kullu and Bhuntar. The descent through Kullu and Mandi is slower than the map suggests, and the Bilaspur truck traffic is unavoidable in either direction. Starting from Manali by 6 AM gets you into Patiala at a sensible hour.",
    "stop": "Sundernagar or Mandi, roughly the halfway mark, is where most drivers break. Beyond Mandi the stops thin out.",
    "tip": "This is a full day. Leaving Patiala by 5 AM gets you into Manali in daylight; leaving after 8 AM usually means arriving after dark on mountain road, which we would rather avoid."
  },
  {
    "id": "Patiala-to-Amritsar",
    "slug": "patiala-to-amritsar",
    "from": "Patiala",
    "to": "Amritsar",
    "distanceKm": 233,
    "duration": "4-4.5 hours",
    "highway": "NH44",
    "via": [
      "Sirhind",
      "Khanna",
      "Ludhiana",
      "Phagwara",
      "Jalandhar"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Patiala to Amritsar — 233 km via NH44, about 4-4.5 hours.",
    "journey": "Straight up NH44 through the heart of Punjab. It is a longer drive than most people expect — well over 200 km — and the Ludhiana and Jalandhar bypasses are where the time goes if you hit them wrong.",
    "stop": "Phagwara and Jalandhar both have good highway stops around the halfway point.",
    "tip": "For Golden Temple darshan, leaving Patiala around 4 AM puts you in Amritsar for the morning. Add the Wagah Border ceremony and it becomes a full-day round trip."
  },
  {
    "id": "Amritsar-to-Patiala",
    "slug": "amritsar-to-patiala",
    "from": "Amritsar",
    "to": "Patiala",
    "distanceKm": 233,
    "duration": "4-4.5 hours",
    "highway": "NH44",
    "via": [
      "Jalandhar",
      "Phagwara",
      "Ludhiana",
      "Khanna",
      "Sirhind"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Amritsar to Patiala — 233 km via NH44, about 4-4.5 hours.",
    "journey": "Straight up NH44 through the heart of Punjab. It is a longer drive than most people expect — well over 200 km — and the Ludhiana and Jalandhar bypasses are where the time goes if you hit them wrong. The same NH44 run in reverse. Jalandhar and Ludhiana are still the two places the clock gets away from you.",
    "stop": "Phagwara and Jalandhar both have good highway stops around the halfway point.",
    "tip": "For Golden Temple darshan, leaving Patiala around 4 AM puts you in Amritsar for the morning. Add the Wagah Border ceremony and it becomes a full-day round trip."
  },
  {
    "id": "Patiala-to-Ludhiana",
    "slug": "patiala-to-ludhiana",
    "from": "Patiala",
    "to": "Ludhiana",
    "distanceKm": 93,
    "duration": "2 hours",
    "highway": "NH5 / GT Road",
    "via": [
      "Sirhind",
      "Khanna"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Patiala to Ludhiana — 93 km via NH5 / GT Road, about 2 hours.",
    "journey": "An easy two-hour run on the GT Road corridor through Sirhind and Khanna. Flat, direct, and well served by roadside stops the whole way.",
    "stop": "Khanna, roughly two thirds of the way, is the natural break.",
    "tip": "Ludhiana's own city traffic is the slow part. Aim to arrive outside the 9-11 AM and 5-8 PM windows."
  },
  {
    "id": "Ludhiana-to-Patiala",
    "slug": "ludhiana-to-patiala",
    "from": "Ludhiana",
    "to": "Patiala",
    "distanceKm": 93,
    "duration": "2 hours",
    "highway": "NH5 / GT Road",
    "via": [
      "Khanna",
      "Sirhind"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Ludhiana to Patiala — 93 km via NH5 / GT Road, about 2 hours.",
    "journey": "An easy two-hour run on the GT Road corridor through Sirhind and Khanna. Flat, direct, and well served by roadside stops the whole way. Getting clear of Ludhiana is the slow part; after Khanna it is an easy hour into Patiala.",
    "stop": "Khanna, roughly two thirds of the way, is the natural break.",
    "tip": "Ludhiana's own city traffic is the slow part. Aim to arrive outside the 9-11 AM and 5-8 PM windows."
  },
  {
    "id": "Patiala-to-Jalandhar",
    "slug": "patiala-to-jalandhar",
    "from": "Patiala",
    "to": "Jalandhar",
    "distanceKm": 154,
    "duration": "2.5-3 hours",
    "highway": "NH44 / NH5",
    "via": [
      "Sirhind",
      "Khanna",
      "Ludhiana",
      "Phagwara"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Patiala to Jalandhar — 154 km via NH44 / NH5, about 2.5-3 hours.",
    "journey": "North-west along the GT Road through Ludhiana and Phagwara. A comfortable half-day drive on good highway, with the Ludhiana bypass the only stretch that reliably slows things down.",
    "stop": "Khanna early on, or Phagwara closer to the far end.",
    "tip": "Going through rather than around Ludhiana costs time. Ask the driver to take the bypass unless you need a stop in the city."
  },
  {
    "id": "Jalandhar-to-Patiala",
    "slug": "jalandhar-to-patiala",
    "from": "Jalandhar",
    "to": "Patiala",
    "distanceKm": 154,
    "duration": "2.5-3 hours",
    "highway": "NH44 / NH5",
    "via": [
      "Phagwara",
      "Ludhiana",
      "Khanna",
      "Sirhind"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Jalandhar to Patiala — 154 km via NH44 / NH5, about 2.5-3 hours.",
    "journey": "North-west along the GT Road through Ludhiana and Phagwara. A comfortable half-day drive on good highway, with the Ludhiana bypass the only stretch that reliably slows things down. Straightforward in reverse, with the Ludhiana bypass again the stretch worth taking.",
    "stop": "Khanna early on, or Phagwara closer to the far end.",
    "tip": "Going through rather than around Ludhiana costs time. Ask the driver to take the bypass unless you need a stop in the city."
  },
  {
    "id": "Patiala-to-Ambala",
    "slug": "patiala-to-ambala",
    "from": "Patiala",
    "to": "Ambala",
    "distanceKm": 53,
    "duration": "1 hour",
    "highway": "NH44",
    "via": [
      "Rajpura"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Patiala to Ambala — 53 km via NH44, about 1 hour.",
    "journey": "The shortest outstation route we run — barely an hour on NH44 through Rajpura. Common for Ambala Cantt railway station connections and hospital visits.",
    "stop": "Not needed on a drive this short.",
    "tip": "Handy for catching trains at Ambala Cantt that do not stop at Patiala. Allow an extra 20 minutes if you are cutting it fine for a departure."
  },
  {
    "id": "Ambala-to-Patiala",
    "slug": "ambala-to-patiala",
    "from": "Ambala",
    "to": "Patiala",
    "distanceKm": 53,
    "duration": "1 hour",
    "highway": "NH44",
    "via": [
      "Rajpura"
    ],
    "carFeatures": [
      "AC",
      "GPS Tracking",
      "Professional Driver"
    ],
    "description": "Taxi from Ambala to Patiala — 53 km via NH44, about 1 hour.",
    "journey": "The shortest outstation route we run — barely an hour on NH44 through Rajpura. Common for Ambala Cantt railway station connections and hospital visits. A quick hour back through Rajpura.",
    "stop": "Not needed on a drive this short.",
    "tip": "Handy for catching trains at Ambala Cantt that do not stop at Patiala. Allow an extra 20 minutes if you are cutting it fine for a departure."
  }
];

export default destinations;
