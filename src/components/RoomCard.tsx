import React from 'react';
import { Bed, Users, Wifi, Coffee } from 'lucide-react';
import type { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onBook: (roomId: string) => void;
}

export default function RoomCard({ room, onBook }: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-indigo-600">
          ${room.price}/night
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
            <p className="text-sm text-gray-500">{room.type}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Up to {room.capacity}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center space-x-1">
            <Bed className="h-4 w-4 text-indigo-500" />
            <span className="text-sm text-gray-600">King Bed</span>
          </div>
          <div className="flex items-center space-x-1">
            <Wifi className="h-4 w-4 text-indigo-500" />
            <span className="text-sm text-gray-600">Free Wifi</span>
          </div>
          <div className="flex items-center space-x-1">
            <Coffee className="h-4 w-4 text-indigo-500" />
            <span className="text-sm text-gray-600">Breakfast</span>
          </div>
        </div>

        <button
          onClick={() => onBook(room.id)}
          disabled={!room.isAvailable}
          className={`w-full py-2 px-4 rounded-lg font-medium ${
            room.isAvailable
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {room.isAvailable ? 'Book Now' : 'Not Available'}
        </button>
      </div>
    </div>
  );
}