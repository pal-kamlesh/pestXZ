export default function GetInTouch() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white px-6 py-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Find Your Pest Control Services
            </h2>
          </div>
          <form className="text-center mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="col-span-1">
                <select className="form-select p-3 border-0 bg-gray-50 text-gray-800 rounded-md focus:ring-2 focus:ring-yellow-400">
                  <option value="Type Of Service">Type Of Service</option>
                  <option value="Pest Control-2">Pest Control-2</option>
                  <option value="Pest Control-3">Pest Control-3</option>
                  <option value="Pest Control-4">Pest Control-4</option>
                  <option value="Pest Control-5">Pest Control-5</option>
                </select>
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  className="form-control p-3 border-0 bg-gray-50 text-gray-800 rounded-md focus:ring-2 focus:ring-yellow-400"
                  placeholder="Name"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  className="form-control p-3 border-0 bg-gray-50 text-gray-800 rounded-md focus:ring-2 focus:ring-yellow-400"
                  placeholder="Phone"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="email"
                  className="form-control p-3 border-0 bg-gray-50 text-gray-800 rounded-md focus:ring-2 focus:ring-yellow-400"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-yellow-400 text-black py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition">
                GET STARTED
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
