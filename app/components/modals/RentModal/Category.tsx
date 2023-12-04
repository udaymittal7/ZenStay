import React from 'react';
import Heading from '../../Heading';
import CategoryInput from '../../inputs/CategoryInput';
import { categories } from '../../navbar/Categories';

interface CategoryProps {
  setCustomValue: (key: string, value: any) => void;
  category: string;
}

const Category = ({ setCustomValue, category }: CategoryProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
