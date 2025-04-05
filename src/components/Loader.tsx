import { Heart } from "lucide-react";

export const Loader = () => {
  return (
    <div className="absolute inset-0  flex items-center justify-center h-screen w-screen bg-gray-200 dark:bg-gray-900 ">
      <div className="flex flex-col items-center ">
        <Heart
          size={74}
          fill="#f0547a"
          strokeWidth={1.5}
          className="text-[#f0547a] animate-pulse backdrop-blur-sm opacity-40"
        />
        <p className="mt-2 text-2xl  text-gray-600">Loading....</p>
      </div>
    </div>
  );
};
