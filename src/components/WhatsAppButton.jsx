import React from 'react';
import { UilWhatsapp } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const message = "Hi Adams Academy 👋 I want to enquire about admission for Grade 6-12";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#1ebe57] transition-colors shadow-[#25D366]/40 animate-bounce"
      aria-label="Chat with us on WhatsApp"
    >
      <UilWhatsapp size="28" />
      <span className="hidden md:inline-block font-semibold text-sm">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
