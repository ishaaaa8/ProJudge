const base = "http://localhost:5000";

export const get_all_submissions = async (obj) => {
    try {
        const res = await fetch(`${base}/submissions/all`, {
            method: 'GET',
            body: JSON.stringify(obj), // Note: GET requests typically do not have a body
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
        console.error("Error in get_all_submissions:", error);
        throw error;
    }
};
