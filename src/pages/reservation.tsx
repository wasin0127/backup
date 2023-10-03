import React, { useState } from "react";
import LayoutPages from '../components/layout';
import useAxios from 'axios-hooks';
import Link from "next/link";

export default function Home() {
    const [{ error: errorMessage, loading: IndexActivityLoading }, executeIndexActivity] = useAxios(
        { url: '/api/mark', method: 'POST' },
        { manual: true }
    )

    const [date, setdate] = useState<string>("");
    const [time, settime] = useState<string>("");
    const [name, setname] = useState<string>("");
    const [location, setlocation] = useState<string>("");
    const [cusname, setcusname] = useState<string>("");
    const [tel, settel] = useState<string>("");
    const [nameAE, setnameAE] = useState<string>("");
    const [messages, setmessages] = useState<string>("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMissingModalOpen, setIsMissingModalOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // ตรวจสอบว่าข้อมูลถูกกรอกครบถ้วน
        if (
            !date || !time || !name || !location || !cusname || !tel || !nameAE || !messages
            
        ) {

            // ถ้าข้อมูลไม่ครบถ้วน ให้แสดง modal แจ้งเตือน
            setIsMissingModalOpen(true);
            return;
        }

        // ส่งข้อมูลไปยัง API
        try {
            setIsLoading(true);
            const response = await executeIndexActivity({
                data: {
                    date, time, name, location, cusname, tel, nameAE, messages,
                    // เพิ่มข้อมูลอื่น ๆ ตามที่ต้องการ
                },
            });
            // ประมวลผลเมื่อสำเร็จ
            setIsLoading(false);
            setIsSuccess(true);
            setMessage("สำเร็จ! คุณได้ทำการจองคิวเรียบร้อยแล้ว");

            // setIsDataSent(true); 
            // สร้าง state isDataSent และตั้งค่าเป็น true
            setIsModalOpen(true);
        } catch (error) {
            // ประมวลผลเมื่อเกิดข้อผิดพลาด
            setIsLoading(false);
            setIsSuccess(false);
            setMessage("เกิดข้อผิดพลาดในการจองคิว");
        }
    };

    // เรียกใช้งานฟังก์ชันเมื่อกดปุ่ม "จองคิว"
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // เรียกใช้งานฟังก์ชันเมื่อกดปุ่ม "ยกเลิก"
    const handleCloseModal = () => {

        window.location.reload();
        setIsModalOpen(false);
    };
    const handleConfirm = () => {

        window.location.reload();
        // ทำสิ่งที่คุณต้องการเมื่อยืนยัน
        // ตัวอย่าง: ปิด Modal
        setIsModalOpen(false);

    };

    return (
        <>
            <LayoutPages>
                <form className=" container w-[80%] mx-auto">
                    <h1 className=" text-4xl text-[#ffffff] text-center mt-5 group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500  font-bold mx-auto">จองคิว</h1>

                    <div className=" flex flex-wrap  my-5">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="date"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    วัน/เดือน/ปี ที่ติดตั้ง
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                     value={date} onChange={(e) => setdate(e.target.value)}
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="time"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    เวลา
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    value={time} onChange={(e) => settime(e.target.value)}
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-wrap  my-5">
                        <div className=" sm:w-1/2 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    ชื่องาน
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name} onChange={(e) => setname(e.target.value)}
                                    placeholder="ชื่องาน"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className=" px-3 sm:w-1/2 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="location"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    สถานที่ติดตั้งงาน
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={location} onChange={(e) => setlocation(e.target.value)}
                                    placeholder="สถานที่ติดตั้งงาน"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-wrap  my-5">
                        <div className=" px-3 sm:w-1/2 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="cusname"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    ชื่อลูกค้า
                                </label>
                                <input
                                    type="text"
                                    name="cusname"
                                    id="cusname"
                                    value={cusname} onChange={(e) => setcusname(e.target.value)}
                                    placeholder="ชื่อลูกค้า"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className=" px-3 sm:w-1/2 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="tel"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    เบอร์ติดต่อ
                                </label>
                                <input
                                    type="text"
                                    name="tel"
                                    id="tel"
                                    value={tel} onChange={(e) => settel(e.target.value)}
                                    placeholder="เบอร์ติดต่อ"
                                    className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" px-3 sm:w-1/2 ">
                        <div className="mb-5">
                            <label
                                htmlFor="nameAE"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                ชื่อ AE รับงาน
                            </label>
                            <input
                                type="text"
                                name="nameAE"
                                id="nameAE"
                                value={nameAE} onChange={(e) => setnameAE(e.target.value)}
                                placeholder="ชื่อ AE รับงาน"
                                className="bg-[#F0FFE7] w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="messages"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            รายละเอียดงาน
                        </label>
                        <textarea
                            name="messages"
                            id="messages"
                            value={messages} onChange={(e) => setmessages(e.target.value)}
                            placeholder="รายละเอียดงาน"
                            className="bg-[#F0FFE7] w-full resize-none rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div className=" flex justify-between">
                        <Link href={"/manage"}>
                        <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
                            ย้อนกลับ
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>
                        </Link>
                        <button disabled={isLoading}
                            onClick={handleSubmit} className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
                            ยืนยัน
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>
                    </div>
                    {isMissingModalOpen && (
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
                            <div className="bg-white p-6 rounded-lg text-center">
                                <p className="text-red-500 text-lg mb-4">กรุณากรอกข้อมูลให้ครบถ้วน</p>
                                <button
                                    onClick={() => setIsMissingModalOpen(false)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none"
                                >
                                    ปิด
                                </button>
                            </div>
                        </div>
                    )}
                    {isModalOpen && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                            <div className="bg-white p-6 rounded-lg mx-auto">
                                <p className="text-2xl font-semibold mb-4">ยืนยันการสมัคร</p>
                                <p>คุณต้องการจองคิวหรือไม่?</p>
                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={handleCloseModal} // เรียกใช้งานเมื่อกดปุ่ม "ยกเลิก"
                                        className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                                    >
                                        ยกเลิก
                                    </button>
                                    <button
                                        onClick={handleConfirm} // เรียกใช้งานเมื่อกดปุ่ม "ยืนยัน"
                                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                                    >
                                        ยืนยัน
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </form>




            </LayoutPages>

        </>
    )
}