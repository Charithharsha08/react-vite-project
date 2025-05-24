import "./Contact.css";
import {useForm} from "react-hook-form";

export function Contact() {

    const{register, handleSubmit, formState: {errors}} = useForm<FormData>();

    type FormData = {
        name: string;
        email: string;
        message: string;
    };

    const onSubmit = (data: FormData) => {
        console.log("Form data submitted:", data);
        alert(`Submitted form data.`);
    }

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" {...register("name", {required: "Name is required", pattern: {value: /^[A-Za-z\s]+$/, message: "Name must contain only letters and spaces"}})} />
                {errors.name ? (
                    <span className="error">{errors.name.message}</span>
                ) : ''}
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" {...register("email", {required: "Email is required",pattern: {value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, message: "Invalid email format"}})} />
                {errors.email ? (
                    <span className="error">{errors.email.message}</span>
                ) : ''}

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <span className="error">Message is required</span>
                )}

                <button type="submit">Send</button>
            </form>

        </div>
    );
}
