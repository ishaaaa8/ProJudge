const base = "http://localhost:5000";

export const get_all_problems = async (obj) => {
    try {
        const res = await fetch(`${base}/problems/all`, {
            method: 'GET',
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
        console.error("Error in get_all_problems:", error);
        throw error;
    }
};

export const get_problem_by_id = async (obj) => {
    try {
        const res = await fetch(`${base}/problems/get_prob_by_id`, {
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
        console.error("Error in get_problem_by_id:", error);
        throw error;
    }
};

export const run_compiler = async (obj) => {
    try {
        const res = await fetch(`${base}/problems/run`, {
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
        console.error("Error in run_compiler:", error);
        throw error;
    }
};

export const submit_compiler = async (obj) => {
    try {
        const res = await fetch(`${base}/problems/submit`, {
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
        console.error("Error in submit_compiler:", error);
        throw error;
    }
};

export const all_submissions = async (obj) => {
    try {
        const res = await fetch(`${base}/problems/run`, {
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
        console.error("Error in all_submissions:", error);
        throw error;
    }
};
