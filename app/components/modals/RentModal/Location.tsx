import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

import Heading from '../../Heading';
import CountrySelect from '../../inputs/CountrySelect';

interface LocationProps {
  setCustomValue: (key: string, value: any) => void;
  location: any;
}

const Location = ({ setCustomValue, location }: LocationProps) => {
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
        title="Where is your place located?"
        subtitle="Help guests find you!"
      />
      <CountrySelect
        value={location}
        onChange={(value) => setCustomValue('location', value)}
      />
      <Map center={location?.latlng} />
    </div>
  );
};

export default Location;
