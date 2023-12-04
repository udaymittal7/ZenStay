import React from 'react';
import Heading from '../../Heading';
import ImageUpload from '../../inputs/ImageUpload';

interface ImagesProps {
  setCustomValue: (key: string, value: any) => void;
  imageSrc: string;
}

const Images = ({ setCustomValue, imageSrc }: ImagesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Add a photo of your place"
        subtitle="Show guests what your place looks like!"
      />
      <ImageUpload
        onChange={(value) => setCustomValue('imageSrc', value)}
        value={imageSrc}
      />
    </div>
  );
};

export default Images;
