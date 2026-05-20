import MobileLayout from "../components/MobileLayout";
import Input from "../components/Input";

import { useState }
    from "react";

import { useNavigate }
    from "react-router-dom";

export default function Login() {

    const nav = useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    function login() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let foundUser = users.find(user => user.email === email && user.password === password);
        if (foundUser) {
            localStorage.setItem(
                "currentUser",
                JSON.stringify(foundUser)
            );
            nav("/profile");
        }
        else {
            alert("Invalid email or password");
        }

    }

    return (

        <MobileLayout>
            <div className="p-8">
                <h1 className="text-4xl font-bold mb-8 ">
                    Signin to your
                    <br />
                    PopX account
                </h1>

                <p className="mt-3 text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum hic eligendi quo assumenda!
                </p>
                <div className="mt-8">
                    <Input
                        label="Email Address"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)} />

                    <button onClick={login} className=" w-full text-white font-semibold bg-black/30 py-3 rounded">
                        Login
                    </button>

                </div>

            </div>

        </MobileLayout>

    )

}