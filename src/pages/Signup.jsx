import MobileLayout from "../components/MobileLayout";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate }
    from "react-router-dom";

export default function Signup() {

    const nav = useNavigate();

    const [user, setUser] = useState({

        name: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "Yes"
    })

    function submit() {
        if (!user.name || !user.phone || !user.email || !user.password) {
            alert("Please fill all fields");
            return;
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let exists = users.find(u => u.email === user.email);

        if (exists) {
            alert("User already exists");
            return;
        }
        users.push(user);
        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );
        nav("/profile");
    }

    return (

        <MobileLayout>

            <div className="p-8">

                <h1 className="
text-4xl
font-bold
mb-8
">

                    Create your
                    <br />
                    PopX account

                </h1>

                <Input

                    label="Full Name*"

                    placeholder="Marry Doe"

                    onChange={e =>

                        setUser({

                            ...user,
                            name: e.target.value

                        })

                    }

                />


                <Input
                    label="Phone number*"
                    placeholder="99999999"

                    onChange={e =>

                        setUser({

                            ...user,
                            phone: e.target.value

                        })

                    }
                />

                <Input
                    label="Email address*"
                    placeholder="mail"

                    onChange={e =>

                        setUser({

                            ...user,
                            email: e.target.value

                        })

                    }
                />

                <Input
                    label="Password*"
                    type="password"

                    onChange={e =>

                        setUser({

                            ...user,
                            password: e.target.value

                        })

                    }
                />

                <Input
                    label="Company name"

                    onChange={e =>

                        setUser({

                            ...user,
                            company: e.target.value

                        })

                    }
                />


                <div className="mb-10">

                    <p>Are you an Agency?</p>

                    <div className="flex gap-5 mt-3">

                        <label>

                            <input
                                type="radio"
                                checked
                            />

                            Yes

                        </label>

                        <label>

                            <input
                                type="radio"
                            />

                            No

                        </label>

                    </div>

                </div>


                <button

                    onClick={submit}

                    className="
absolute
bottom-8
left-8
right-8

bg-[#6C25FF]
text-white
py-3
rounded-md
"

                >

                    Create Account

                </button>

            </div>

        </MobileLayout>

    )

}