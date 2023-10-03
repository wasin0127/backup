import Link from "next/link";

export default function Register() {
    return (
        <>

            <div className=" mx-auto">
                <img src="../images/bg1.png" alt="" className=" w-[700px] justify-center mx-auto" />
                <h1 className='text-center text-[#049112] text-6xl'>สมัครใช้งาน</h1>



                <form action="" className="w-[800px] mx-auto">
                    <div id="input" className="flex flex-col w-full my-5 ">
                        <label htmlFor="email" className=" mb-2"
                        >ชื่อ</label>
                        <input
                            type="text"
                            // value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email"
                        
                            className="appearance-none border-2 border-gray-500 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg  "
                        />
                    </div>
                    <div id="input" className="flex flex-col w-full my-5 ">
                        <label htmlFor="email" className=" mb-2"
                        >นามสกุล</label>
                        <input
                            type="text"
                            // value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email"
                           
                            className="appearance-none border-2 border-gray-500 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg  "
                        />
                    </div>
                    <div className="">
                        <label
                            htmlFor="equipment"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            แผนก
                        </label>
                        <select
                            id="equipment"
                            // value={request}
                            // onChange={(e) => setRequest(e.target.value)}
                            className="w-full border-2 border-gray-500 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg"
                        >
                            <option value="computers" id="">
                            
                            </option>
                            <option value="computers" id="ผู้บริหาร">
                            ผู้บริหาร
                            </option>
                            <option value="cpu" id="ฝ่ายบุคคล">
                            ฝ่ายบุคคล
                            </option>
                            <option value="motherboard" id="การตลาด">
                            การตลาด
                            </option>
                            <option value="hdd" id="กราฟิกดีไซน์">
                            กราฟิกดีไซน์
                            </option>
                            <option value="ram" id="การผลิต/ติดตั้ง">
                            การผลิต/ติดตั้ง
                            </option>
                            
                        </select>
                        {/* เพิ่มปุ่มหรือเหตุการณ์เมื่อคลิกเพื่อบันทึกค่าในฐานข้อมูล */}
                    </div>
                    <div id="input" className="flex flex-col w-full my-5 ">
                        <label htmlFor="email" className=" mb-2"
                        >รหัสผ่าน</label>
                        <input
                            type="text"
                            // value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email"
                           
                            className="appearance-none border-2 border-gray-500 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg  "
                        />
                    </div>
                    <div id="input" className="flex flex-col w-full my-5 ">
                        <label htmlFor="email" className=" mb-2"
                        >ยืนยันรหัสผ่าน</label>
                        <input
                            type="text"
                            // value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email"
                          
                            className="appearance-none border-2 border-gray-500 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg  "
                        />
                    </div>



                 
                    {/* <div id="input" className="flex flex-col w-full my-5">
                        <label htmlFor="password" className=" mb-2"
                        >รหัสผ่าน</label>
                        <input
                            type="password"
                            // value={password} onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="รหัสผ่าน"
                            className="appearance-none border-2 border-gray-500 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2  focus:shadow-lg "
                        />
                    </div> */}
                    <div id="button" className="flex flex-col w-full my-5">

                        <div className="flex">
                            <button className="group relative h-12 w-full overflow-hidden rounded-2xl bg-[#049112]  text-1xl font-bold text-white" type="submit" >
                                สมากชิก
                                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                            </button>
                        </div>

                        {/* {loginMessage && <p className={`text-${loginSuccess ? "success" : "danger"}`}>{loginMessage} </p>} */}


                    </div>



                    <div className=" text-white text-center my-6 ">
                        <Link href="../login">
                            <p>ยังไม่มีบัญชีผู้ใช้?</p>
                            <span className="text-[#18BCEB]">เข้าสู่ระบบ</span>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}