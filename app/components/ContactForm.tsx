// app/components/ContactForm.tsx
import { Form, redirect } from "@remix-run/react";
import { useTransition } from "react";
import Thankyou from "../routes/Thankyou";
import { Link } from "@remix-run/react";
// Action function to handle form submission
export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  // Process form data (e.g., save to a database)
  console.log(`Received: Name - ${name}, Email - ${email}`);

  // Redirect after successful form submission
  return redirect('/Thankyou')
};
// Component for the contact form
export default function ContactForm() {
  const transition = useTransition();
  const isSubmitting = transition.state === "submitting";

  return (
    <Form method="post" onSubmit={()=>{<h1>thank you for submitting the data</h1>}}>
      <label>
        Name: <input type="text" name="name" required style={{border:'2px solid black'}} />
      </label><p></p><br/>
      <label>
        Email: <input type="email" name="email" required  style={{border:'2px solid black'}}/>
      </label><p></p><br/>
      <button type="submit" disabled={isSubmitting} style={{border:'2px solid black'}} ><p></p>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button><p></p>
    </Form>
  );
}
