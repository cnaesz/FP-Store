export default function ProductCard({ title, image }) {

    return (
        <div className="group w-full max-w-70 h-100 border relative">
            <img className="w-full h-full object-cover" src={image} alt="" />
            <div className="bg-[#00000077] absolute top-0 left-0 h-full w-full hidden group-hover:flex justify-center items-center">
                <h1 className="text-white text-center">{title}</h1>
            </div>
        </div>
    )
}
