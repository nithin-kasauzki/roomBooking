export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  capacity: number;
  amenities: string[];
  images: string[];
  isAvailable: boolean;
}

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  checkIn: Date;
  checkOut: Date;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
  bookings?: Booking[];
}