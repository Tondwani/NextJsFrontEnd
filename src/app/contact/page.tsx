import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/Contact';
import MapComponent from '@/components/contact/Map';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Contact Info Section */}
        <ContactInfo />
        
        {/* Map Section */}
        <div className="my-12">
          <MapComponent />
        </div>
        
        {/* Contact Form Section */}
        <div className="mt-12 mb-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
