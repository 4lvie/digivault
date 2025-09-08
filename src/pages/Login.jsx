import { useState } from "react";
import {client} from "../supabase/client";

function Login(){
    const [email, setEmail] = useState("")

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