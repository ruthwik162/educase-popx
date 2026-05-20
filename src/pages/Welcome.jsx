import MobileLayout from "../components/MobileLayout";
import { useNavigate }
    from "react-router-dom";

export default function Welcome() {

    const nav = useNavigate();

    return (

        <MobileLayout>

            <div className="
absolute
bottom-10
px-8
">

                <h1 className="
text-4xl
font-bold
">

                    Welcome to PopX

                </h1>

                <p className="
text-gray-500
mt-3
">

                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.

                </p>


                <button

                    onClick={() => nav("/signup")}

                    className="
w-full
bg-[#6C25FF]
text-white
mt-8
py-3
rounded-md
font-medium
"

                >

                    Create Account

                </button>


                <button

                    onClick={() => nav("/login")}

                    className="
w-full
bg-[#CEBAFB]
mt-3
py-3
rounded-md
font-medium
"

                >

                    Already Registered?
                    Login

                </button>

            </div>

        </MobileLayout>

    )

}