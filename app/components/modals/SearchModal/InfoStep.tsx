import React from 'react';

import Heading from '../../Heading';
import Counter from '../../inputs/Counter';

interface InfoStepProps {
  guestCount: number;
  setGuestCount: (value: number) => void;
  roomCount: number;
  setRoomCount: (value: number) => void;
  bathroomCount: number;
  setBathroomCount: (value: number) => void;
}

const InfoStep = ({
  guestCount,
  setGuestCount,
  roomCount,
  setRoomCount,
  bathroomCount,
  setBathroomCount,
}: InfoStepProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading title="More information" subtitle="Find your perfect place!" />
      <Counter
        onChange={(value) => setGuestCount(value)}
        value={guestCount}
        title="Guests"
        subtitle="How many guests are coming?"
      />
      <hr />
      <Counter
        onChange={(value) => setRoomCount(value)}
        value={roomCount}
        title="Rooms"
        subtitle="How many rooms do you need?"
      />
      <hr />
      <Counter
        onChange={(value) => {
          setBathroomCount(value);
        }}
        value={bathroomCount}
        title="Bathrooms"
        subtitle="How many bahtrooms do you need?"
      />
    </div>
  );
};

export default InfoStep;
