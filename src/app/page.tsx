'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InvitationCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation Variants
  const cardVariants = {
    closed: { scale: 0.9, opacity: 0, rotateY: 90 },
    open: { scale: 1, opacity: 1, rotateY: 0, transition: { duration: 0.7, ease: 'easeInOut' } },
  };

  return (
    <div className="pt-80 flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-200 to-gray-100 px-4">
      {/* Open Card Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
          className="mb-8 bg-gradient-to-r from-green-600 to-orange-600 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          onClick={() => setIsOpen(true)}
        >
          Open Card
        </motion.button>
      )}

      {/* Invitation Card with Motion Animation */}
      {isOpen && (
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 mx-auto max-w-lg w-full transform transition-all duration-300"
          variants={cardVariants}
          initial="closed"
          animate="open"
        >
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">دعوت نامہ</h1>
            <p className="text-md sm:text-lg text-gray-700 mt-2">بہ صد احترام آپ کو شرکت کی دعوت دی جاتی ہے</p>
          </div>

          {/* Event Details */}
          <div className="bg-gradient-to-r from-blue-200 to-green-200 rounded-xl p-4 mb-6 text-center shadow-md">
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">برائے: گیارھویں شریف</p>
            <p className="text-md sm:text-lg text-gray-800 mb-1">اور</p>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">عید میلادالنبی ﷺ</p>
            <p className="text-md sm:text-lg font-semibold text-gray-800 mb-1 mt-2">موقع: والد صاحب کی برسی</p>
          </div>

          {/* Timing and Venue */}
          <div className="bg-white shadow-md rounded-xl p-4 text-right mb-6">
            <p className="text-sm sm:text-md text-gray-600 mb-1">📅 تاریخ: 15 اکتوبر 2024</p>
            <p className="text-sm sm:text-md text-gray-600 mb-1">🕓 وقت: 6 بجے شام</p>
            <p className="text-sm sm:text-md text-green-700 mb-1">کلام کے بعد طعام</p>
            <p className="text-sm sm:text-md text-gray-600 mb-1">📍 مقام: جامع مسجد بیت المکرم</p>
            <p className="text-xs sm:text-sm text-center text-gray-600 mt-4">مغرب کے بعد یٰسین شریف اور عشاء کے بعد میلاد ہوگا، اُس کے بعد طعام کا اہتمام کیا گیا ہے۔</p>
          </div>

          {/* Dua Section */}
          <div className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl p-4 text-center mb-6 shadow-md">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">دعا</h3>
            <p className="text-md sm:text-lg text-gray-800 leading-relaxed">
              یا اللہ! ہمیں اپنے پیارے نبی ﷺ کے صدقے نیک ہدایت، عافیت اور بھلائی عطا فرما۔
              ہمارے مرحومین کو جنت الفردوس میں اعلیٰ مقام عطا فرما۔ آمین۔
            </p>
          </div>

          {/* Organizer Section */}
          <div className="text-center mt-6">
            <p className="text-md sm:text-lg font-semibold text-gray-700">منتظمین: ندیم عطاری اور فیملی</p>
          </div>
        </motion.div>
      )}

      {/* Footer Section */}
      <footer className="w-full text-center py-4 mt-8 bg-gray-100">
        <p className="text-sm text-gray-600">
          Designed with 💡 by <span className="font-semibold text-green-600">Hmoavia.07</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Crafting beautiful experiences, one detail at a time.
        </p>
      </footer>
    </div>
  );
};

export default InvitationCard;
