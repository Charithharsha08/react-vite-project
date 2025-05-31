/*
import "./Contact.css";
*/
import { useForm } from "react-hook-form";

export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    type FormData = {
        name: string;
        email: string;
        message: string;
    };

    const onSubmit = (data: FormData) => {
        console.log("Form data submitted:", data);
        alert(`Submitted form data.`);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100 relative">
            <h1 className="absolute top-8 text-3xl font-bold text-center text-gray-800 w-full">Contact Us</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md flex flex-col gap-4"
            >
                <label htmlFor="name" className="font-semibold">Name:</label>
                <input
                    id="name"
                    type="text"
                    className="p-3 border border-gray-300 rounded text-base"
                    {...register("name", {
                        required: "Name is required",
                        pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: "Name must contain only letters and spaces",
                        },
                    })}
                />
                {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}

                <label htmlFor="email" className="font-semibold">Email:</label>
                <input
                    id="email"
                    type="email"
                    className="p-3 border border-gray-300 rounded text-base"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: "Invalid email format",
                        },
                    })}
                />
                {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}

                <label htmlFor="message" className="font-semibold">Message:</label>
                <textarea
                    id="message"
                    rows={4}
                    className="p-3 border border-gray-300 rounded text-base"
                    {...register("message", { required: true })}
                />
                {errors.message && <span className="text-red-600 text-sm">Message is required</span>}

                <button
                    type="submit"
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-300"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
