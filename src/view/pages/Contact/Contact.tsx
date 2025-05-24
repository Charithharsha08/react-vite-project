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
        $
    }

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" {...register("name", {required: "Name is required", pattern: {value: /^[A-Za-z\s]+$/, message: "Name must contain only letters and spaces"}})} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" {...register("email", {required: "Email is required"})} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" {...register("message", {required:true})} rows={4}> </textarea>

                <button type="submit">Send</button>
            </form>
            {errors.name ? (
                <span className="error">{errors.name.message}</span>
            ) : ''}
            {errors.email ? (
                <span className="error">{errors.email.message}</span>
            ) : ''}
            {errors.message ? (
                <span className="error">{errors.message.message}</span>
            ) : ''}
        </div>
    );
}
