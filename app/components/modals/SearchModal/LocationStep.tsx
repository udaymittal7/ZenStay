import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

import Heading from '../../Heading';
import CountrySelect, { CountrySelectValue } from '../../inputs/CountrySelect';

interface LocationStepProps {
  location: CountrySelectValue | undefined;
  setLocation: (value: CountrySelectValue) => void;
}

const LocationStep = ({ location, setLocation }: LocationStepProps) => {
  // importing Map like this because of limitation of this package to be used in React.js
  const Map = useMemo(
    () =>
      dynamic(() => import('../../Map'), {
        ssr: false,
      }),
    [location]
  );

  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where do you wanna go?"
        subtitle="Find the perfect location!"
      />
      <CountrySelect
        value={location}
        onChange={(value) => setLocation(value as CountrySelectValue)}
      />
      <hr />
      <Map center={location?.latlng} />
    </div>
  );
};

export default LocationStep;
