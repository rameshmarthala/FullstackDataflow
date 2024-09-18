// routes/form.jsx
import { Form, useActionData } from "@remix-run/react";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    return { message: `Welcome, ${name}!` };
};

export default function FormPage() {
    const actionData = useActionData();
    return (
        <div>
            <h1>Submit Your Name</h1>
            <Form method="post">
                <input type="text" name="name" placeholder="Your Name" />
                <button type="submit">Submit</button>
            </Form>
            {actionData?.message && <p>{actionData.message}</p>}
        </div>
    );
}
