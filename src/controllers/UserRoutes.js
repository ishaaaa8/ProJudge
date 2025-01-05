const base = "http://localhost:5000";

export const register_user = async (obj) => {
    try {
        const res = await fetch(`${base}/user/signup`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const ans = await res.json();
        return ans;
    } catch (error) {
        console.error("Error in register_user:", error);
        throw error;
    }
};

export const login_user = async (obj) => {
    try {
        const res = await fetch(`${base}/user/login`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const ans = await res.json();
        return ans;
    } catch (error) {
        console.error("Error in login_user:", error);
        throw error;
    }
};

export const auth_user = async (obj) => {
    try {
        const res = await fetch(`${base}/user/auth`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const ans = await res.json();
        return ans;
    } catch (error) {
        console.error("Error in auth_user:", error);
        throw error;
    }
};

export const get_user_by_id = async (obj) => {
    try {
        const res = await fetch(`${base}/user/get_user_by_id`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const ans = await res.json();
        return ans;
    } catch (error) {
        console.error("Error in get_user_by_id:", error);
        throw error;
    }
};
