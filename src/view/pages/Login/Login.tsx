import {useNavigate} from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    return (
        <>
            <div className="login-page w-full h-screen flex items-center justify-center bg-gray-100">
                <div className="login-form bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <button onClick={()=> navigate("/")} type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}