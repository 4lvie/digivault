import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../supabase/client";

function Login(){
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await client.auth.signInWithOtp({
                email,
            });
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

/*     useEffect(() => {
        if (client.auth.getUser()) {
            navigate("/");
        }
    }, [navigate]); */


    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="youremail@site.com" className="input input-md" 
                    onChange={e => setEmail(e.target.value)}
                />
                <button className="btn btn-info">
                    Send
                </button>
            </form>
        </div>
    );
}

export default Login;