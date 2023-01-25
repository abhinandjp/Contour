import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { axiosUserInstance} from '../../Instance/Axios'

const Activation = () => {
  const [state,setState] = useState()
  const {activation_token} = useParams()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        await axiosUserInstance.post('/activation',{activation_token})
        setState(true)
    }catch(error){
      setState(false)
      console.log(error)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-5 bg-blue-100 min-w-screen">
        <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
          <h3 className="text-2xl">Thanks for signing up</h3>

          <p>We're happy you're here. Let's get your email address verified:</p>
          <div className="mt-4">
            {!state ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-2 py-2 text-blue-200 bg-blue-600 rounded"
              >
                Click to Verify Email
              </button>
            ) : (
              <Link to="/login">
                <button
                  className="px-2 py-2 text-blue-200 bg-blue-600 rounded"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activation