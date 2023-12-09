import React from 'react';
import { Range } from 'react-date-range';

import Calendar from '../../inputs/Calendar';
import Heading from '../../Heading';

interface DateStepProps {
  dateRange: Range;
  setDateRange: (value: Range) => void;
}

const DateStep = ({ dateRange, setDateRange }: DateStepProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="When do you plan to go?"
        subtitle="Make sure everyone is free!"
      />
      <Calendar
        onChange={(value) => setDateRange(value.selection)}
        value={dateRange}
      />
    </div>
  );
};

export default DateStep;
