import LayoutPages from "@/components/layout";
import Link from 'next/link';

export default function Seting() {
    return (
        <>
            <LayoutPages>
                <div className=" container w-[80%] mx-auto">
                 <div className=" bg-[#36A741] w-[200px] h-[200px] mx-auto my-10">

                 </div>
                  
                  
                    <div className=" flex justify-between">
                        <Link href={"/"}>
                            <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
                                ย้อนกลับ
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                            </button>
                        </Link>

                    </div>
                </div>

            </LayoutPages>
        </>
    )
}