const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl overflow-hidden">

        {/* Image Skeleton */}
        <div className="bg-gray-300 h-[500px]"></div>

        {/* Content Skeleton */}
        <div className="p-8">

          <div className="h-8 w-24 bg-gray-300 rounded"></div>

          <div className="h-10 w-3/4 bg-gray-300 rounded mt-6"></div>

          <div className="h-4 w-full bg-gray-300 rounded mt-6"></div>

          <div className="h-4 w-5/6 bg-gray-300 rounded mt-3"></div>

          <div className="h-6 w-40 bg-gray-300 rounded mt-8"></div>

          <div className="h-6 w-32 bg-gray-300 rounded mt-4"></div>

          <div className="h-10 w-28 bg-gray-300 rounded mt-6"></div>

          <div className="flex gap-4 mt-10">
            <div className="h-12 w-40 bg-gray-300 rounded-lg"></div>

            <div className="h-12 w-40 bg-gray-300 rounded-lg"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Loading;