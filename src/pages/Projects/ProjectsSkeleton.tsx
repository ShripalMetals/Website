import React from 'react';
import PhotoSlider from './PhotoSlider';

// Define the type for the props
interface ProjectsSkeletonProps {
  title: string;
  details: string[];
  contractorInfo: string;
  description: string;
}

const ProjectsSkeleton: React.FC<ProjectsSkeletonProps> = ({ title, details, contractorInfo, description }) => {
  return (
    <div className="w-full">
      <h3 className="text-[30px] mt-[5vh] font-bold">{title}</h3>

      <div className="flex justify-around mt-[4vh]">
        {details.map((detail, index) => (
          <p key={index} className="mb-4">
            {detail}
          </p>
        ))}
        <p className="mb-4">{contractorInfo}</p>
      </div>

      <div>
        <PhotoSlider />
      </div>

      <div>
        <p className="mb-4 mt-6 w-[90vw] text-center">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsSkeleton;
