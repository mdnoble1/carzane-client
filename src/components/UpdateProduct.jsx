import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'


const UpdateProduct = () => {

    const product = useLoaderData();

    const {  productName, brandName, type, price, rating, image, description } = product;

    const handleAddProduct = e => {
        e.preventDefault();

        const productName = e.target.productName.value;
        const brandName = e.target.brandName.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const image = e.target.image.value;
        const description = e.target.description.value;

        const newProduct = { productName , brandName , type , price , rating , image , description }


        // console.log(newProduct)

        fetch("http://localhost:5000/products" , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }



  return (
    <div className="lg:pb-12 drop-shadow-2xl">
      <div className="lg:w-3/4 bg-[#ea001e] mx-auto pt-16 lg:pt-32 lg:p-1 lg:rounded-b-md lg:mt-12">
        <h2 className="font-bold text-4xl lg:text-5xl text-white text-center mb-16">
          Update a Car
        </h2>
        <div className="py-12 lg:py-16 bg-white rounded-t-3xl rounded-b-sm lg:mt-12">
          <div className="border border-[#ea001e] w-10/12 mx-auto mb-6"></div>
          <form onSubmit={handleAddProduct} className="card-body lg:w-3/4 mx-auto">
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
                    name="productName"
                    type="text"
                    defaultValue={productName}
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
                    defaultValue={brandName}
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
                    placeholder="'Car'"
                    className="input input-bordered rounded-lg bg-gray-100"
                    defaultValue={type}
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
                    defaultValue={price}
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
                    defaultValue={rating}
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
                    defaultValue={image}
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
                  defaultValue={description}
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

export default UpdateProduct;
