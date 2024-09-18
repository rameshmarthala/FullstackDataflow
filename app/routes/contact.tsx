// app/routes/contact.tsx
import ContactForm, { action as contactAction } from "~/components/ContactForm";
// Export the action to be used in this route
export { contactAction as action };

export default function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <ContactForm  />
      
    </div>
  );
}
