import Link from "next/link";

export async function generateMetadata({params}){
  const {id} = await params
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    
  );

 

  const {details={}} = await res.json();
  return {
    title:details.title,
  }


}


const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    
  );

  

  const data = await res.json();
  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-red-500">
          Food Not Found
        </h1>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Details */}
        <div className="p-10 text-white flex flex-col justify-center">

          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full w-fit font-medium">
            {food.category}
          </span>

          <h1 className="text-5xl font-bold mt-5">
            {food.title}
          </h1>

          <p className="mt-5 text-gray-300 leading-7">
            Enjoy this delicious{" "}
            <span className="font-semibold text-green-400">
              {food.category}
            </span>{" "}
            recipe from{" "}
            <span className="font-semibold text-yellow-400">
              {food.area}
            </span>
            .
          </p>

          <div className="mt-8 space-y-4 text-lg">
            <p>
              <span className="font-semibold text-gray-400">
                Category:
              </span>{" "}
              {food.category}
            </p>

            <p>
              <span className="font-semibold text-gray-400">
                Area:
              </span>{" "}
              {food.area}
            </p>

            <p className="text-4xl font-bold text-orange-400">
              ${food.price}
            </p>
          </div>

          <div className="flex gap-4 mt-10">
            <button className="px-7 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold shadow-lg">
              Add to Cart
            </button>

            <Link
              href={food.video}
              target="_blank"
              className="px-7 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold shadow-lg"
            >
              Watch Recipe
            </Link>
          </div>

        </div>
      </div>
    </div>
  </div>
);
};

export default FoodDetails;