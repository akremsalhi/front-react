function Dashboard() {
  return (
    <div className="bg-white p-4 rounded">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-bold">Users</h3>

        <div>
          <a href="#" className="px-4 py-1.5 cursor-pointer text-white bg-blue-600 rounded-md text-md">
            Add
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Jane Cooper
                          </div>
                          <div className="text-sm text-gray-500">
                            jane.cooper@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Regional Paradigm Technician
                      </div>
                      <div className="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                      Admin
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* <div className="flex space-x-1 text-coolGray-800">
          <button
            title="previous"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-coolGray-50 border-coolGray-100"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            type="button"
            title="Page 1"
            className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-coolGray-50 text-violet-600 border-violet-600"
          >
            1
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-coolGray-50 border-coolGray-100"
            title="Page 2"
          >
            2
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-coolGray-50 border-coolGray-100"
            title="Page 3"
          >
            3
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-coolGray-50 border-coolGray-100"
            title="Page 4"
          >
            4
          </button>
          <button
            title="next"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-coolGray-50 border-coolGray-100"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
