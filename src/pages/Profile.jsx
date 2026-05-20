import MobileLayout
    from "../components/MobileLayout";

export default function Profile() {

    const user =

        JSON.parse(
            localStorage.getItem("currentUser")
        )

    return (
        <MobileLayout>
            <div className="bg-[#FFFFFF] h-full w-full">
                <div className=" bg-white p-5 font-medium text-xl ">
                    Account Settings
                </div>
                <div className="flex gap-4 p-6 ">
                    <img src="https://i.pravatar.cc/100" className="w-20 h-20 rounded-full " />
                    <div>
                        <h2 className="font-bold text-lg "> {user?.name} </h2>
                        <p className="text-[14px] tracking-tight font-medium">  {user?.email} </p>
                    </div>
                </div>
                <p className=" px-6 text-gray-600 border-b border-dotted font-medium text-[14px] pb-5 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur, iste reiciendis, quos vel facilis, modi totam vitae corporis omnis aperiam recusandae minus? Nostrum, illum provident vero cumque et magnam?
                </p>

            </div>

        </MobileLayout>

    )

}