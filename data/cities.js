// data/cities.js
const cities = [
  {
    slug: 'patiala',
    name: 'Patiala',
    state: 'Punjab',
    description: 'Book reliable taxi service in Patiala with ModgillTravels. Professional drivers, 24/7 availability, transparent pricing for local and outstation trips.',
    popularRoutes: [
  { from: 'patiala', to: 'delhi', distance: '250 km', duration: '4-5 hours', fare: '3400', slug: 'patiala-to-delhi' },
  { from: 'patiala', to: 'chandigarh', distance: '65 km', duration: '1-1.5 hours', fare: '1400', slug: 'patiala-to-chandigarh' },
  { from: 'patiala', to: 'shimla', distance: '180 km', duration: '4-5 hours', fare: '2600', slug: 'patiala-to-shimla' },
  { from: 'patiala', to: 'ludhiana', distance: '110 km', duration: '2 hours', fare: '1500', slug: 'patiala-to-ludhiana' },
],
    localLandmarks: [
      'Qila Mubarak Complex',
      'Sheesh Mahal',
      'Baradari Gardens',
      'Punjabi University',
      'Rajindra Hospital'
    ],
    nearbyAirports: [
      { name: 'Chandigarh Airport', distance: '75 km' },
      { name: 'Delhi Airport', distance: '260 km' }
    ],
    serviceAreas: [
      'Urban Estate',
      'Rajpura Road',
      'Sangrur Road',
      'Leela Bhawan',
      'Tripuri',
      'New Lal Bagh Colony'
    ],
    metaTitle: 'Taxi Service in Patiala | Cab Booking Patiala - ModgillTravels',
    metaDescription: 'Book taxi service in Patiala for local & outstation trips. One way cab, round trip, airport transfers. Call +91-62849-92669 for instant booking. 24/7 available.',
    keywords: ['taxi service patiala', 'cab booking patiala', 'patiala taxi', 'taxi near me patiala', 'one way taxi patiala'],
  },
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh (UT)',
    description: 'Professional taxi service in Chandigarh for city tours, airport transfers, and outstation travel. ModgillTravels offers reliable cab service with experienced drivers.',
    popularRoutes: [
      { from: 'chandigarh', to: 'shimla', distance: '115 km', duration: '3-4 hours', fare: '2500' },
      { from: 'chandigarh', to: 'manali', distance: '310 km', duration: '7-8 hours', fare: '6000' },
      { from: 'chandigarh', to: 'delhi', distance: '245 km', duration: '4-5 hours', fare: '3500' },
      { from: 'chandigarh', to: 'amritsar', distance: '240 km', duration: '4 hours', fare: '3500' },
    ],
    localLandmarks: [
      'Rock Garden',
      'Sukhna Lake',
      'Rose Garden',
      'Capitol Complex',
      'Sector 17 Market'
    ],
    nearbyAirports: [
      { name: 'Chandigarh International Airport', distance: '12 km' }
    ],
    serviceAreas: [
      'Sector 17',
      'Sector 22',
      'Sector 35',
      'Panchkula',
      'Mohali',
      'Zirakpur'
    ],
    metaTitle: 'Taxi Service in Chandigarh | Cab Booking Chandigarh - ModgillTravels',
    metaDescription: 'Book taxi in Chandigarh for city tours, Shimla trips, Manali travel. Airport pickups, local cabs, outstation taxis. Call +91-62849-92669. Available 24/7.',
    keywords: ['taxi service chandigarh', 'cab booking chandigarh', 'chandigarh taxi', 'taxi near me chandigarh'],
  },
  {
    slug: 'ludhiana',
    name: 'Ludhiana',
    state: 'Punjab',
    description: 'Affordable taxi service in Ludhiana for business trips, family travel, and city tours. ModgillTravels provides comfortable cabs with professional drivers.',
    popularRoutes: [
      { from: 'ludhiana', to: 'delhi', distance: '320 km', duration: '5-6 hours', fare: '4500' },
      { from: 'ludhiana', to: 'chandigarh', distance: '100 km', duration: '2 hours', fare: '1800' },
      { from: 'ludhiana', to: 'amritsar', distance: '140 km', duration: '2.5 hours', fare: '2500' },
      { from: 'ludhiana', to: 'patiala', distance: '110 km', duration: '2 hours', fare: '2000' },
    ],
    localLandmarks: [
      'Punjab Agricultural University',
      'Lodhi Fort',
      'Rakh Bagh',
      'Nehru Rose Garden',
      'Maharaja Ranjit Singh War Museum'
    ],
    nearbyAirports: [
      { name: 'Ludhiana Airport', distance: '8 km' },
      { name: 'Chandigarh Airport', distance: '120 km' }
    ],
    serviceAreas: [
      'Civil Lines',
      'Model Town',
      'Sarabha Nagar',
      'PAU Campus',
      'Ferozepur Road',
      'Dugri'
    ],
    metaTitle: 'Taxi Service in Ludhiana | Cab Booking Ludhiana - ModgillTravels',
    metaDescription: 'Book taxi in Ludhiana for Delhi trips, Chandigarh travel, Amritsar visits. One way & round trip cabs. Call +91-62849-92669 for instant booking.',
    keywords: ['taxi service ludhiana', 'cab booking ludhiana', 'ludhiana taxi', 'taxi near me ludhiana'],
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi (NCR)',
    description: 'Reliable taxi service from Delhi to Punjab, Himachal, and nearby destinations. ModgillTravels offers comfortable outstation cabs from Delhi.',
    popularRoutes: [
      { from: 'delhi', to: 'patiala', distance: '250 km', duration: '4-5 hours', fare: '3500' },
      { from: 'delhi', to: 'chandigarh', distance: '245 km', duration: '4-5 hours', fare: '3500' },
      { from: 'delhi', to: 'shimla', distance: '350 km', duration: '7-8 hours', fare: '6000' },
      { from: 'delhi', to: 'manali', distance: '540 km', duration: '12-14 hours', fare: '9000' },
    ],
    localLandmarks: [
      'India Gate',
      'Red Fort',
      'Qutub Minar',
      'Lotus Temple',
      'Connaught Place'
    ],
    nearbyAirports: [
      { name: 'Indira Gandhi International Airport', distance: 'City Center' }
    ],
    serviceAreas: [
      'Connaught Place',
      'Karol Bagh',
      'Dwarka',
      'Rohini',
      'Noida',
      'Gurgaon'
    ],
    metaTitle: 'Taxi Service from Delhi | Delhi to Punjab Cab - ModgillTravels',
    metaDescription: 'Book taxi from Delhi to Patiala, Chandigarh, Shimla. Outstation cab service with professional drivers. Call +91-62849-92669 for booking.',
    keywords: ['taxi service delhi', 'delhi to patiala taxi', 'delhi to chandigarh cab', 'outstation taxi delhi'],
  },
  {
    slug: 'shimla',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    description: 'Book taxi to Shimla from Punjab cities. ModgillTravels provides safe mountain travel with experienced hill drivers for Shimla trips.',
    popularRoutes: [
      { from: 'chandigarh', to: 'shimla', distance: '115 km', duration: '3-4 hours', fare: '2500' },
      { from: 'delhi', to: 'shimla', distance: '350 km', duration: '7-8 hours', fare: '6000' },
      { from: 'patiala', to: 'shimla', distance: '180 km', duration: '4-5 hours', fare: '3000' },
    ],
    localLandmarks: [
      'The Mall Road',
      'Jakhoo Temple',
      'Christ Church',
      'Scandal Point',
      'Kufri'
    ],
    nearbyAirports: [
      { name: 'Shimla Airport (Jubbarhatti)', distance: '23 km' },
      { name: 'Chandigarh Airport', distance: '115 km' }
    ],
    serviceAreas: [
      'Mall Road',
      'Lakkar Bazaar',
      'Sanjauli',
      'Summer Hill',
      'Kufri'
    ],
    metaTitle: 'Taxi to Shimla | Shimla Cab Booking - ModgillTravels',
    metaDescription: 'Book taxi to Shimla from Chandigarh, Delhi, Patiala. Hill station travel with experienced drivers. Call +91-62849-92669 for safe mountain trips.',
    keywords: ['taxi to shimla', 'shimla cab booking', 'chandigarh to shimla taxi', 'delhi to shimla cab'],
  },
  {
    slug: 'amritsar',
    name: 'Amritsar',
    state: 'Punjab',
    description: 'Book taxi service in Amritsar for Golden Temple visits, Wagah Border, and city tours. Reliable cab service with professional drivers.',
    popularRoutes: [
      { from: 'amritsar', to: 'delhi', distance: '450 km', duration: '7-8 hours', fare: '6500' },
      { from: 'amritsar', to: 'chandigarh', distance: '240 km', duration: '4 hours', fare: '3500' },
      { from: 'amritsar', to: 'ludhiana', distance: '140 km', duration: '2.5 hours', fare: '2500' },
      { from: 'amritsar', to: 'patiala', distance: '200 km', duration: '3.5 hours', fare: '3200' },
    ],
    localLandmarks: [
      'Golden Temple',
      'Jallianwala Bagh',
      'Wagah Border',
      'Partition Museum',
      'Gobindgarh Fort'
    ],
    nearbyAirports: [
      { name: 'Sri Guru Ram Dass Jee International Airport', distance: '11 km' }
    ],
    serviceAreas: [
      'Golden Temple Area',
      'Mall Road',
      'Ranjit Avenue',
      'Chheharta',
      'Lawrence Road',
      'City Centre'
    ],
    metaTitle: 'Taxi Service in Amritsar | Cab Booking Amritsar - ModgillTravels',
    metaDescription: 'Book taxi in Amritsar for Golden Temple visits, Wagah Border trips, city tours. Airport transfers available. Call +91-62849-92669. 24/7 service.',
    keywords: ['taxi service amritsar', 'cab booking amritsar', 'amritsar taxi', 'golden temple taxi', 'wagah border cab'],
  },
  {
    slug: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    description: 'Book taxi to Manali from Punjab and Delhi. ModgillTravels offers comfortable mountain travel with experienced hill drivers for Manali trips.',
    popularRoutes: [
      { from: 'chandigarh', to: 'manali', distance: '310 km', duration: '7-8 hours', fare: '6000' },
      { from: 'delhi', to: 'manali', distance: '540 km', duration: '12-14 hours', fare: '9000' },
      { from: 'patiala', to: 'manali', distance: '350 km', duration: '8-9 hours', fare: '6500' },
    ],
    localLandmarks: [
      'Rohtang Pass',
      'Solang Valley',
      'Hadimba Temple',
      'Old Manali',
      'Vashisht Hot Springs'
    ],
    nearbyAirports: [
      { name: 'Bhuntar Airport (Kullu)', distance: '50 km' },
      { name: 'Chandigarh Airport', distance: '310 km' }
    ],
    serviceAreas: [
      'Mall Road',
      'Old Manali',
      'Vashisht',
      'Solang Valley',
      'Naggar'
    ],
    metaTitle: 'Taxi to Manali | Manali Cab Booking - ModgillTravels',
    metaDescription: 'Book taxi to Manali from Chandigarh, Delhi, Patiala. Safe mountain travel with experienced drivers. Call +91-62849-92669 for comfortable trips.',
    keywords: ['taxi to manali', 'manali cab booking', 'chandigarh to manali taxi', 'delhi to manali cab'],
  }
];

export default cities;