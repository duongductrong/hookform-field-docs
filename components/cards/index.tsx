export interface CardProps {
  label: string;
  description: string;
  icon: string;
}

export const Card = ({ label, description, icon }: CardProps) => {
  return (
    <div className="px-6 py-5 border dark:border-neutral-800 border-neutral-200 hover:dark:border-neutral-100 hover:border-neutral-900 rounded-lg">
      <div className="h-6 w-6 fill-gray-800 dark:fill-gray-100 text-gray-800 dark:text-gray-100">
        {icon}
      </div>
      <h2 className="font-semibold text-base text-gray-800 dark:text-white mt-4">
        {label}
      </h2>
      <p className="mt-1 font-normal text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};
