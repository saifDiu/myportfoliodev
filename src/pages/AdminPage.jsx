import { useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";
import AdminPanel from "../components/Admin/AdminPanel";

const AdminPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = async () => {
            try {
                await account.get(); // Check if the user is logged in
                setIsLoggedIn(true);
            } catch (error) {
                navigate("/site/admin/login"); // Redirect to login if not logged in
            }
        };
        checkLogin();
    }, [navigate]);

    if (!isLoggedIn) return null; // Show nothing until login status is confirmed

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Admin Panel</h1>
            <AdminPanel />
        </div>
    );
};

export default AdminPage;