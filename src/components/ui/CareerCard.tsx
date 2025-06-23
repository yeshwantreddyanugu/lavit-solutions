import React from 'react';
import { CareerPosition } from '../../types';
import { MapPin, Briefcase } from 'lucide-react';

export const CareerCard: React.FC<Omit<CareerPosition, 'id'>> = ({
  title,
  department,
  location,
  type
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:border-primary-600 hover:shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-primary-600">{title}</h4>
          <p className="text-gray-600 text-sm">{department}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-1" />
              {type}
            </div>
          </div>
        </div>
        <button className="bg-primary-600 text-white text-sm px-4 py-2 rounded-md hover:bg-primary-700 transition-colors duration-300">
          Apply
        </button>
      </div>
    </div>
  );
};