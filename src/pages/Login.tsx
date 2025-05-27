import { useState } from "react";
import { authenticate } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (authenticate(username, password)) {
            const storage = remember ? localStorage : sessionStorage;
            storage.setItem("user", username);
            navigate("/home");
        } else {
            setError("Sai tên đăng nhập hoặc mật khẩu.");
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100vw",
                background: "linear-gradient(135deg, #FFD600 0%, #FF9800 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                className="max-w-md w-full p-4"
                style={{
                    background: "#FFFDE7",
                    color: "#333",
                    borderRadius: "24px",
                    boxShadow: "0 8px 32px 0 rgba(255, 152, 0, 0.25), 0 1.5px 4px 0 rgba(255, 214, 0, 0.15)",
                    border: "2px solid #FFD600",
                }}
            >
                <h1 className="text-xl font-bold mb-4" style={{ color: "#FF6F00" }}>
                    Đăng nhập
                </h1>
                <input
                    className="block w-full p-2 mb-2"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        background: "#FFF8E1",
                        border: "1.5px solid #FFD600",
                        borderRadius: "12px",
                        outline: "none",
                        boxShadow: "0 2px 8px 0 rgba(255, 214, 0, 0.10)",
                        transition: "border 0.2s",
                        marginBottom: "12px",
                    }}
                />
                <input
                    className="block w-full p-2 mb-2"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        background: "#FFF8E1",
                        border: "1.5px solid #FFD600",
                        borderRadius: "12px",
                        outline: "none",
                        boxShadow: "0 2px 8px 0 rgba(255, 214, 0, 0.10)",
                        transition: "border 0.2s",
                        marginBottom: "12px",
                    }}
                />
                <label className="flex items-center mb-2 text-yellow-5on00">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                    />
                    Ghi nhớ đăng nhập
                </label>
                <button
                    className="w-full"
                    onClick={handleLogin}
                    style={{
                        background: "linear-gradient(90deg, #FFD600 0%, #FF9800 100%)",
                        color: "#fff",
                        padding: "5px",
                        border: "none",
                        borderRadius: "12px",
                        fontWeight: "bold",
                        fontSize: "16px",
                        boxShadow: "0 4px 16px 0 rgba(255, 152, 0, 0.18)",
                        cursor: "pointer",
                        transition: "background 0.2s, box-shadow 0.2s",
                        marginBottom: "8px",
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = "linear-gradient(90deg, #FFB300 0%, #FF6F00 100%)")}
                    onMouseOut={e => (e.currentTarget.style.background = "linear-gradient(90deg, #FFD600 0%, #FF9800 100%)")}
                >
                    Đăng nhập
                </button>
                {error && <div className="text-red-500 mt-2">{error}</div>}
            </div>
        </div>
    );
}
