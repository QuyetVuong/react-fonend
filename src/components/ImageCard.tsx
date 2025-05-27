import React, { useState, useEffect, useRef } from "react";

interface ImageItem {
    url: string;
    description: string;
}

const LOCAL_KEY = "favorite_images";

// Màu chủ đạo
const MAIN_COLOR = "#FFD600"; // vàng
const ACCENT_COLOR = "#FF9800"; // vàng cam (yam)

export default function ImageCard() {
    const [images, setImages] = useState<ImageItem[]>([]);
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editDescription, setEditDescription] = useState("");
    const urlInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_KEY);
        if (stored) setImages(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(images));
    }, [images]);

    const handleAdd = () => {
        if (!url.trim() || !description.trim()) return;
        setImages([...images, { url, description }]);
        setUrl("");
        setDescription("");
        urlInputRef.current?.focus();
    };

    const handleDelete = (idx: number) => {
        setImages(images.filter((_, i) => i !== idx));
    };

    const handleEdit = (idx: number) => {
        setEditIndex(idx);
        setEditDescription(images[idx].description);
    };

    const handleEditSave = (idx: number) => {
        const updated = [...images];
        updated[idx].description = editDescription;
        setImages(updated);
        setEditIndex(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleAdd();
    };

    return (
        <div
            style={{
                maxWidth: 500,
                margin: "0 auto",
                background: MAIN_COLOR,
                borderRadius: 12,
                padding: 24,
                boxShadow: `0 2px 8px ${ACCENT_COLOR}55`
            }}
        >
            <h2 style={{ color: ACCENT_COLOR, textAlign: "center" }}>Danh sách hình ảnh yêu thích</h2>
            <div style={{ marginBottom: 16 }}>
                <input
                    ref={urlInputRef}
                    type="text"
                    placeholder="Nhập URL ảnh"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{
                        width: "100%",
                        marginBottom: 8,
                        border: `1px solid ${ACCENT_COLOR}`,
                        borderRadius: 4,
                        padding: 8
                    }}
                />
                <input
                    type="text"
                    placeholder="Nhập mô tả ảnh"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{
                        width: "100%",
                        marginBottom: 8,
                        border: `1px solid ${ACCENT_COLOR}`,
                        borderRadius: 4,
                        padding: 8
                    }}
                />
                <button
                    onClick={handleAdd}
                    style={{
                        background: ACCENT_COLOR,
                        color: "#fff",
                        border: "none",
                        borderRadius: 4,
                        padding: "8px 16px",
                        cursor: "pointer"
                    }}
                >
                    Thêm
                </button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {images.map((img, idx) => (
                    <li
                        key={idx}
                        style={{
                            marginBottom: 24,
                            border: `2px solid ${ACCENT_COLOR}`,
                            padding: 12,
                            borderRadius: 8,
                            background: "#fffbe7"
                        }}
                    >
                        <img
                            src={img.url}
                            alt={img.description}
                            style={{
                                maxWidth: "100%",
                                height: 150,
                                objectFit: "cover",
                                borderRadius: 6,
                                border: `2px solid ${MAIN_COLOR}`
                            }}
                        />
                        {editIndex === idx ? (
                            <div>
                                <input
                                    type="text"
                                    value={editDescription}
                                    onChange={e => setEditDescription(e.target.value)}
                                    style={{
                                        width: "80%",
                                        marginRight: 8,
                                        border: `1px solid ${ACCENT_COLOR}`,
                                        borderRadius: 4,
                                        padding: 6
                                    }}
                                />
                                <button
                                    onClick={() => handleEditSave(idx)}
                                    style={{
                                        background: ACCENT_COLOR,
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 4,
                                        padding: "6px 12px",
                                        marginRight: 4,
                                        cursor: "pointer"
                                    }}
                                >
                                    Lưu
                                </button>
                                <button
                                    onClick={() => setEditIndex(null)}
                                    style={{
                                        background: "#fff",
                                        color: ACCENT_COLOR,
                                        border: `1px solid ${ACCENT_COLOR}`,
                                        borderRadius: 4,
                                        padding: "6px 12px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Hủy
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p style={{ color: ACCENT_COLOR }}>{img.description}</p>
                                <button
                                    onClick={() => handleEdit(idx)}
                                    style={{
                                        background: MAIN_COLOR,
                                        color: "#333",
                                        border: `1px solid ${ACCENT_COLOR}`,
                                        borderRadius: 4,
                                        padding: "6px 12px",
                                        marginRight: 4,
                                        cursor: "pointer"
                                    }}
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={() => handleDelete(idx)}
                                    style={{
                                        background: "#fff",
                                        color: ACCENT_COLOR,
                                        border: `1px solid ${ACCENT_COLOR}`,
                                        borderRadius: 4,
                                        padding: "6px 12px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Xóa
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
