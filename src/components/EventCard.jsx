import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaEllipsisH, FaEye, FaShareAlt } from 'react-icons/fa';
import card3 from "../assets/card-3.png";
import p3 from "../assets/profile-3.png";
import card2 from "../assets/card-2.png";
import p2 from "../assets/profile-2.png";
import card1 from "../assets/card-1.png";
import p1 from "../assets/profile-1.png";
import p4 from "../assets/profile-4.png";

const EventCard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <section className='flex justify-between w-full '>

    <div className="sm:mr-10  md:w-3/4  w-full flex flex-col gap-4 mt-4">
    <div className="space-y-3 w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <img
        src={card1}// Replace with your image URL
        alt="Event"
        className="w-full h-[250px] object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className=" font-semibold text-lg">✍️ Article</span>
          <div className="relative">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-black">
              <FaEllipsisH />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Edit</button>
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Report</button>
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Option 3</button>
              </div>
            )}
          </div>
        </div>
        <h2 className="text-2xl font-bold my-2">
        What if famous brands had regular fonts? Meet RegulaBrands!       </h2>
        
       <p className='text-gray-500 text-xl'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              src={p1} // Replace with your profile picture URL
              alt="Ronal Jones"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-2 text-gray-700">Sarthak Kamra</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <span className="mr-4">1.4k views</span>
            <FaShareAlt />
          </div>
        </div>
      </div>
    </div>

    <div className="w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <img
        src={card2}// Replace with your image URL
        alt="Event"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-red-600 font-semibold text-lg">🔬️ Education</span>
          <div className="relative">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-black">
              <FaEllipsisH />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Edit</button>
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Report</button>
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Option 3</button>
              </div>
            )}
          </div>
        </div>
        <h2 className="text-2xl font-bold my-2">
        Tax Benefits for Investment under National Pension Scheme launched by Government        </h2>
        
        <p className='text-gray-500'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              src={p2} // Replace with your profile picture URL
              alt="Ronal Jones"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-2 text-gray-700">Sarah West</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <span className="mr-4">1.4k views</span>
            <FaShareAlt />
          </div>
        </div>
      </div>
    </div>


      <div className="w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <img
        src={card3} // Replace with your image URL
        alt="Event"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className=" font-semibold text-lg"><i class="fa-solid fa-calendar-days"></i> Meetup</span>
          <div className="relative">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-black">
              <FaEllipsisH />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Edit</button>
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Report</button>
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Option 3</button>
              </div>
            )}
          </div>
        </div>
        <h2 className="text-2xl font-bold my-2">
          Finance & Investment Elite Social Mixer @Lujiazui
        </h2>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FaCalendarAlt className="mr-2" />
          Fri, 12 Oct, 2018
          <FaMapMarkerAlt className="ml-4 mr-2" />
          Ahmedabad, India
        </div>
        <button className="block w-full text-center text-orange-600 font-semibold text-lg border border-orange-600 rounded-md py-2 hover:bg-orange-50">
          Visit Website
        </button>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              src={p3} // Replace with your profile picture URL
              alt="Ronal Jones"
              className="w-10 h-10 rounded-full object-cover" 
            />
            <span className="ml-2 text-gray-700">Ronal Jones</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <span className="mr-4">1.4k views</span>
            <FaShareAlt />
          </div>
        </div>
      </div>
    </div>


      <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      {/* <img
        src={card3} // Replace with your image URL
        alt="Event"
        className="w-full h-48 object-cover"
      /> */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className=" font-semibold text-lg">💼️ Job</span>
          <div className="relative">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-black">
              <FaEllipsisH />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Edit</button>
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Report</button>
                <button className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 w-full">Option 3</button>
              </div>
            )}
          </div>
        </div>
        <h2 className="text-2xl font-bold my-2">
        Software Developer        </h2>
        <div className="flex items-center text-gray-900 text-sm mb-2">
          <FaCalendarAlt className="mr-2" />
          Innovaccer Analytics Private Ltd.
          <FaMapMarkerAlt className="ml-4 mr-2" />
          Noida, India        </div>
        <button className="block w-full text-center text-green-600 font-semibold text-lg border border-green-600 rounded-md py-2 hover:bg-green-50">
        Apply on Timesjobs
        </button>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              src={p4} // Replace with your profile picture URL
              alt="Ronal Jones"
              className="w-10 h-10 rounded-full object-cover" 
            />
            <span className="ml-2 text-gray-700">Joseph Gray</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <span className="mr-4">1.4k views</span>
            <FaShareAlt />
          </div>
        </div>
      </div>
    </div>
    

    </div>

    <div className="w-1/4 hidden xl:block">
    <div className="py-4   border-b-2 border-gray-400 h-14 flex  w-52 justify-between gap-2 items-center ">
   <div className="flex flex-start ">
   <FaMapMarkerAlt className="ml-4 mr-2" />
   Noida, India 
   </div> 
    <i class="fa-solid fa-pen"></i>
    </div>
    <div className="flex text-gray-400 justify-center text-sm my-4 gap-2">
    <i class="fa-solid fa-circle-info" ></i> Your location will help us serve better and extend a personalised experience.
    </div>
    </div> 

    

    </section>
  );
};

export default EventCard;
