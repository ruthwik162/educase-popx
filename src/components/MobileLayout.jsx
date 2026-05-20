export default function MobileLayout({ children }) {

    return (
        <div className=" min-h-screen flex justify-center items-center bg-[#F7F8F9] ">
            <div className=" w-[375px] h-[812px] bg-white border border-white/20 rounded-xl relative overflow-hidden ">
                {children}
            </div>
        </div>
    )
}