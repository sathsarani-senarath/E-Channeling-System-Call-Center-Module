
"use client";

import Image from "next/image";
import React from "react";
import MainLayout from "@/components/Layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
        {/* Heading */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Hospital Call Agent Portal
          </h1>
          <p className="text-gray-600 mb-8">
            Manage patient appointments, doctor schedules, and channel requests — all in one efficient dashboard.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Get started
            </button>
            <button className="border border-gray-400 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100 transition">
              View Data 
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-4xl">
          <Image
            src="/hospital-staff.jpg" // 👈 put your image in public/ folder with this name
            alt="Hospital Staff"
            width={1000}
            height={500}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
