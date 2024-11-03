import React from 'react';
import Navbar from './components/Navbar';
import RoomCard from './components/RoomCard';
import { Search, Calendar, Filter } from 'lucide-react';
import type { Room } from './types';

const sampleRooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe Ocean View Suite',
    type: 'Suite',
    price: 299,
    description: 'Luxurious suite with panoramic ocean views, private balcony, and premium amenities.',
    capacity: 2,
    amenities: ['King Bed', 'Ocean View', 'Free Wifi', 'Breakfast'],
    images: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'],
    isAvailable: true
  },
  {
    id: '2',
    name: 'Garden Villa',
    type: 'Villa',
    price: 499,
    description: 'Spacious villa surrounded by tropical gardens with private pool and outdoor dining area.',
    capacity: 4,
    amenities: ['2 King Beds', 'Private Pool', 'Free Wifi', 'Breakfast'],
    images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'],
    isAvailable: true
  },
  {
    id: '3',
    name: 'Mountain View Room',
    type: 'Standard',
    price: 199,
    description: 'Cozy room with stunning mountain views and modern amenities for a comfortable stay.',
    capacity: 2,
    amenities: ['Queen Bed', 'Mountain View', 'Free Wifi', 'Breakfast'],
    images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80'],
    isAvailable: false
  }
];

function App() {
  const handleBookRoom = (roomId: string) => {
    console.log('Booking room:', roomId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Stay</h1>
          <p className="text-lg text-indigo-100 mb-8">Discover luxury accommodations for your next adventure</p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 shadow-lg flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search locations..."
                className="w-full focus:outline-none text-gray-800"
              />
            </div>
            <div className="flex-1 flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="w-full focus:outline-none text-gray-800"
              />
            </div>
            <div className="flex-1 flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select className="w-full focus:outline-none text-gray-800 bg-transparent">
                <option>All Room Types</option>
                <option>Suite</option>
                <option>Villa</option>
                <option>Standard</option>
              </select>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Room Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleRooms.map((room) => (
            <RoomCard key={room.id} room={room} onBook={handleBookRoom} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;