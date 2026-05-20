export default function Input({

    label,
    placeholder,
    value,
    onChange,
    type = "text"

}) {

    return (

        <div className="mb-4 relative">
            <label className=" text-sm absolute pr-4 -top-1 left-5 bg-white text-[#6C25FF] font-medium ">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border-2 border-black/10 mt-1 rounded-md px-3 py-1.5 outline-none" />
        </div>

    )

}