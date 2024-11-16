"use client"; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

function Page() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleGiveFeedback = () => {
    setShowPopup(true);
  };

  const handleConfirm = () => {
    // Construct a mailto link
    const mailtoLink = `mailto:email1@example.com,email2@example.com?subject=Feedback&body=Your feedback here.`;
    window.location.href = mailtoLink;
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
    router.push('/'); // Redirects to the home page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <button onClick={handleGiveFeedback} className="bg-black hover:bg-slate-800 text-white px-6 py-4 rounded-2xl">
        Give Feedback
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md">
            <p>Are you sure you want to give feedback?</p>
            <div className="mt-6 flex justify-end space-x-4">
              <button onClick={handleConfirm} className="bg-black hover:bg-slate-700 text-white px-4 py-2 rounded">
                Confirm
              </button>
              <button onClick={handleCancel} className="bg-gray-200 hover:bg-slate-300 text-black px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
