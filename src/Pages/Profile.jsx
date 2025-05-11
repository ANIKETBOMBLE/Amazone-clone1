import React from 'react'

function Profile() {
  return (
	<>
	 <div className="max-w-4xl mx-auto p-6 bg-gray-300 shadow-lg rounded-2xl mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        
        <div className="flex-shrink-0">
          <img
            className="h-32 w-32 rounded-full object-cover border-4 border-indigo-600"
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
          />
        </div>

        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold text-gray-800">John Smith</h2>
          <p className="text-gray-600 mb-2">john.smith@example.com</p>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-500">Shipping Address</h4>
              <p className="text-gray-700">
                1234 Market Street<br />
                San Francisco, CA 94103
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500">Phone</h4>
              <p className="text-gray-700">+1 (123) 456-7890</p>
            </div>
          </div>

          
          <div className="mt-6 flex gap-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Edit Profile
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              Order History
            </button>
          </div>
        </div>
      </div>
    </div>
	</>
  )
}

export default Profile