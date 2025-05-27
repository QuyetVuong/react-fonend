import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import '../styles/index.css'


export default function Home() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [navigate, user]);
    const handleLogout = () => {
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");
        navigate("/")
    }

    return (
        <div
            className="min-h-screen min-w-full flex flex-col"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: -1,
                background: "linear-gradient(135deg, #FFD600 0%, #FF9800 100%)"
            }}
        >
            <div className="flex-1 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-orange-700 font-bold">
                        Xin chào, <span className="text-yellow-700">{user}</span>
                    </h2>
                    <button
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-4 py-2 rounded font-semibold shadow transition-colors duration-200 border-2 border-yellow-400 hover:border-orange-600"
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </button>
                </div>
                <ImageCard />
            </div>
        </div>
    )
}
