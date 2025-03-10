'use client';

const MapComponent = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.5124663435395!2d28.1897863!3d-25.8601565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956608911ce7ed%3A0x3f5c4883e2c33333!2s265%20West%20Ave%2C%20Die%20Hoewes%2C%20Centurion%2C%200157!5e0!3m2!1sen!2sza!4v1624972849559!5m2!1sen!2sza"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
