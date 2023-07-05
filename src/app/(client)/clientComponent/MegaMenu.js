const MegaMenu = () => {
  return (
    <div className="mega-menu absolute w-full bg-white shadow-lg rounded-lg p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <h3 className="font-medium text-gray-900 mb-4">
                  Shop by Category
                </h3>
                <ul className="-mx-2">
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Category 1
                    </a>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Category 2
                    </a>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Category 3
                    </a>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Category 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h3 className="font-medium text-gray-900 mb-4">
                  Shop by Brand
                </h3>
                <ul className="-mx-2">
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Brand 1
                    </a>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Brand 2
                    </a>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Brand 3
                    </a>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Brand 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h3 className="font-medium text-gray-900 mb-4">
                  Shop by Price
                </h3>
                <ul className="-mx-2">
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Under $25
                    </a>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      $25 to $50
                    </a>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      $50 to $100
                    </a>
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Over $100
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="border-l border-gray-200 pl-4">
              <h3 className="font-medium text-gray-900 mb-4">
                Featured Products
              </h3>
              <ul className="-mx-2">
                <li className="px-2 py-1 hover:bg-gray-100">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Product 1
                  </a>
                </li>
                <li className="px-2 py-1 hover:bg-gray-100">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Product 2
                  </a>
                </li>
                <li className="px-2 py-1 hover:bg-gray-100">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Product 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MegaMenu;
