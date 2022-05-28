import React from "react";
import { NavLink } from "react-router-dom";

function Profile({ handleLogOut }) {
   return (
      <div>
         <div className="text-2xl font-bold text-center mb-3">
            Mustafa Hıncal
         </div>
         <div className="flex bg-lacivert py-4  px-5 items-center mb-2 mt-5 w-10/12 m-auto">
            <i class="fa-solid fa-id-card  mr-5 text-buyuksehir text-2xl"></i>

            <div className="flex flex-col">
               <h1 className="text-gray-300">TC Kimlik Numarası</h1>
               <p className="text-white">12312412441</p>
            </div>
         </div>

         <div className="flex bg-lacivert py-4  px-5 items-center my-2 w-10/12 m-auto">
            <i class="fa-solid fa-envelope  mr-5 text-buyuksehir text-2xl"></i>
            <div className="flex flex-col">
               <h1 className="text-gray-300">E-Posta</h1>
               <p className="text-white">abc@gmail.com</p>
            </div>
         </div>

         <div className="bg-lacivert py-4  px-5 items-center my-2 w-10/12 m-auto text-white">
            <div className="flex justify-between">
               <h1>Haftalık Puanınız</h1>
               <p>
                  1231
                  <i class="fa-solid fa-bullseye ml-2"></i>
               </p>
            </div>
         </div>

         <div className="bg-lacivert py-4  px-5 items-center my-2 w-10/12 m-auto text-white">
            <div className="flex justify-between">
               <h1>Genel Puanınız</h1>
               <p>
                  9123
                  <i class="fa-solid fa-bullseye ml-2"></i>
               </p>
            </div>
         </div>

         <div className="text-center mt-5">
            <NavLink to="/">
               <button
                  className="py-2 px-3 bg-white text-red-500 text-sm border-red-500 border-4 hover:bg-red-600 hover:text-white transition-all rounded-md"
                  onClick={() => handleLogOut()}
               >
                  Çıkış Yap
               </button>
            </NavLink>
         </div>
      </div>
   );
}

export default Profile;