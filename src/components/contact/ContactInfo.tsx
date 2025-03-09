const ContactInfo = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <svg className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-medium">Email</h3>
            </div>
            <p className="text-gray-600 ml-7">support@fusiongym.com</p>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <svg className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="font-medium">Phone</h3>
            </div>
            <p className="text-gray-600 ml-7"> +27 (76) 229-0023</p>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <svg className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-medium">Address</h3>
            </div>
            <p className="text-gray-600 ml-7">
              265 West Ave, Die Hoewes<br />
              Centurion, 0157<br />
              South Africa
            </p>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <svg className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-medium">Support Hours</h3>
            </div>
            <p className="text-gray-600 ml-7">
              Monday - Friday: 9AM - 6PM<br />
              Saturday: 10AM - 4PM<br />
              Sunday: Closed
            </p>
          </div>
          </div>
        </div>
    );
};

export default ContactInfo;