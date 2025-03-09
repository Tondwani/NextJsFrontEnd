const ContactInfo = () => {
  return (
    <div className="bg-white rounded-md shadow-sm p-2 max-w-3xl mx-auto">
      <h2 className="text-sm font-bold text-gray-800 mb-1">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        <div className="flex items-center p-0.5">
          <svg className="h-[10px] w-[10px] text-indigo-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div>
            <h3 className="text-[10px] font-medium text-gray-800">Email</h3>
            <p className="text-[10px] text-gray-600">support@fusiongym.com</p>
          </div>
        </div>

        <div className="flex items-center p-0.5">
          <svg className="h-[10px] w-[10px] text-indigo-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
            <h3 className="text-[10px] font-medium text-gray-800">Phone</h3>
            <p className="text-[10px] text-gray-600">+27 (76) 229-0023</p>
          </div>
        </div>

        <div className="flex items-center p-0.5">
          <svg className="h-[10px] w-[10px] text-indigo-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <div>
            <h3 className="text-[10px] font-medium text-gray-800">Address</h3>
            <p className="text-[10px] text-gray-600">265 West Ave, Die Hoewes, Centurion</p>
          </div>
        </div>


     

        <div className="flex items-center p-0.5">
          <svg className="h-[10px] w-[10px] text-indigo-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-[10px] font-medium text-gray-800">Hours</h3>
            <p className="text-[10px] text-gray-600">Mon-Fri: 9AM - 6PM, Sat: 10AM - 4PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;