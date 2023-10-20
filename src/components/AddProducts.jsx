const AddProducts = () => {
  return (
    <div className="lg:pb-12 drop-shadow-2xl">
      <div className="lg:w-3/4 bg-[#ea001e] mx-auto pt-16 lg:pt-32 lg:p-1 lg:rounded-b-md lg:mt-12">
        <h2 className="font-bold text-4xl lg:text-5xl text-white text-center mb-16">
          Add a New Car
        </h2>
        <div className="py-12 lg:py-16 bg-white rounded-t-3xl rounded-b-sm lg:mt-12">
          <div className="border border-[#ea001e] w-10/12 mx-auto mb-6"></div>
          <form className="card-body lg:w-3/4 mx-auto">
            <div className="lg:flex gap-10">
              {/* left side */}
              <div className="lg:w-1/2">
                {/* 1 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-black">
                      Product Name
                    </span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Product Name"
                    className="input input-bordered rounded-lg bg-gray-100"
                    required
                  />
                </div>
                {/* 2 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-black">
                      Brand Name
                    </span>
                  </label>
                  <input
                    name="brandName"
                    type="text"
                    placeholder="Enter Brand Name"
                    className="input input-bordered rounded-lg bg-gray-100"
                    required
                  />
                </div>

                {/* 3 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-black">
                      Product Type
                    </span>
                  </label>
                  <input
                    name="type"
                    type="text"
                    placeholder="Enter Product Type"
                    className="input input-bordered rounded-lg bg-gray-100"
                    required
                  />
                </div>
              </div>
              {/* right side */}
              <div className="lg:w-1/2">
                {/* 4 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-black">
                      Product Price
                    </span>
                  </label>
                  <input
                    name="price"
                    type="text"
                    placeholder="Enter Product Price"
                    className="input input-bordered rounded-lg bg-gray-100"
                    required
                  />
                </div>
                {/* 5 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-black">
                      Product Rating
                    </span>
                  </label>
                  <input
                    name="rating"
                    type="text"
                    placeholder="Enter Brand Rating"
                    className="input input-bordered rounded-lg bg-gray-100"
                    required
                  />
                </div>

                {/* 6 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg text-black">
                      Product Image URL
                    </span>
                  </label>
                  <input
                    name="image"
                    type="text"
                    placeholder="Enter Image Url"
                    className="input input-bordered rounded-lg bg-gray-100"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black mx-auto">
                    Product Description
                  </span>
                </label>
                <input
                  name="description"
                  type="text"
                  className="input input-bordered rounded-lg bg-gray-100 h-24"
                  required
                />
              </div>
              <div className="form-control mt-6">
              <button className="btn rounded-lg font-semibold text-xl normal-case text-white bg-[#ea001e] hover:bg-red-400 hover:text-black">
                Add Product
              </button>
            </div>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
