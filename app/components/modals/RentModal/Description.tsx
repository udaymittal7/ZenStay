import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import Heading from '../../Heading';
import Input from '../../inputs/Input';

interface DescriptionProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isLoading: boolean;
}

const Description = ({ register, errors, isLoading }: DescriptionProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="How would you describe your place?"
        subtitle="Short and sweet works best!"
      />
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <hr />
      <Input
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
};

export default Description;
