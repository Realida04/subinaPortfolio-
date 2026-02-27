import React, { useState } from 'react'

const Contact = () => {
const [formData, setFormData] =useState({
    fullname: "",
    email:" ",
    sendMessage:""
})
    const handleClick =async (e)=>{
       console.log(" the button has been clicked!")
       e.preventDefault();  
       if(formData.fullname == " " || formData.email == " "){
        alert("please fill the form");
        return;
       
       }
       console.log(" form has been Submitted", formData)
       alert("form has been submitted")

       await fetch("http://localhost:5000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: formData.fullname,
      email: formData.email,
      sendMessage: formData.sendMessage
    })
  });
    }

    const handleChange =(e)=>{
        const { name,value} = e.target
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
        console.log(value)

    }
  return (
   <div className="bg-gray-100 py-20 px-6" id='contact'>
  <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

    {/* Title */}
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
      Wanna say something?
    </h2>

    <form className="space-y-6">

      {/* Full Name */}
      <div className="flex flex-col">
        <label className="mb-2 font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Your name eg: (Subina Gurung)"
          required
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="mb-2 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="Your email eg: (subinagurung@gmail.com)"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="mb-2 font-medium text-gray-700">
          Message
        </label>
        <textarea
          placeholder="Your message here..."
          name="sendMessage"
          value={formData.sendMessage}
          onChange={handleChange}
          rows="5"
          className="border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        onClick={handleClick}
        className="w-full bg-[#5a855f] text-white font-semibold py-3 rounded-lg hover:bg-[#4a6f4e] transition duration-300 shadow-md hover:shadow-lg"
      >
        Send Message
      </button>

    </form>
  </div>
</div>
  )
}

export default Contact