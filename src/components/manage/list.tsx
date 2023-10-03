// import { Mark } from '@prisma/client';
import React, { useState, useEffect } from 'react';


function TabComponent() {
    const [visibleItems, setVisibleItems] = useState();
    const [markData, setMarkData] = useState<Mark[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (expandedItemIndex === index) {
            setExpandedItemIndex(null);
        } else {
            setExpandedItemIndex(index);
        }
    };

    

    useEffect(() => {
        fetch('/api/mark')
            .then((response) => response.json())
            .then((data) => {
                // Sort the markData array by date property
                const sortedMarkData = data.mark.sort((b: { date: string | number | Date; }, a: { date: string | number | Date; }) => {
                    // Replace 'date' with your actual date property name
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                });

                setMarkData(sortedMarkData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    }, []);

    return (
       <div >
    {isLoading ? (
        <p>Loading...</p>
    ) : (
        <div className=' my-10'>
            {markData.slice(0, visibleItems).map((mark, index) => (
                <div key={index} className="mb-4 w-[70%] mx-auto">
                    <div className={`border border-t-0  dark:border-dark-color  dark:bg-neutral-800 ${expandedItemIndex === index ? 'rounded-t' : 'rounded'}`}>
                        <h2 className="mb-0" id={`heading${index}`}>
                            <button
                                className={`group relative flex w-full items-center rounded-none border-0 bg-[#8ed562] px-5 py-4 text-left text-base text-neutral-800 transition ${expandedItemIndex === index ? 'bg-[#E3FFD2] text-primary' : ''} hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                type="button"
                                data-te-collapse-init
                                data-te-collapse-collapsed={expandedItemIndex !== index}
                                data-te-target={`#collapse${index}`}
                                aria-expanded={expandedItemIndex === index}
                                aria-controls={`collapse${index}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className='text-2xl'>คิวงานวันที่ : {mark.date}</div>
                                <span
                                    className={`-mr-1 ml-auto h-5 w-5 shrink-0 rotate-${expandedItemIndex === index ? '0' : '-180deg'} fill-${expandedItemIndex === index ? '#212529' : '#336dec'} transition-transform duration-200 ease-in-out group-${expandedItemIndex === index ? '' : '[data-te-collapse-collapsed]'} mr-0 group-${expandedItemIndex === index ? '' : '[data-te-collapse-collapsed]'} rotate-${expandedItemIndex === index ? '0' : '-180deg'} group-${expandedItemIndex === index ? '' : '[data-te-collapse-collapsed]'} fill-${expandedItemIndex === index ? '#212529' : '#336dec'} motion-reduce:transition-none dark:fill-blue-300 dark:group-${expandedItemIndex === index ? '' : '[data-te-collapse-collapsed]'} fill-white`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className={`${expandedItemIndex === index ? 'visible' : 'hidden'}`}
                            data-te-collapse-item
                            aria-labelledby={`heading${index}`}
                        >
                            <div className="px-5 py-4 text-xl mx-10">
                                <div>วันที่จองคิว : {mark.date}</div>
                                <div>เวลา : {mark.time}</div>
                                <div>ชื่องาน : {mark.name}</div>
                                <div>สถานที่ติดตั้งงาน : {mark.location}</div>
                                <div>ชื่อลูกค้า : {mark.cusname}</div>
                                <div>เบอร์ : {mark.tel}</div>
                                <div>ชื่อ AE รับงาน : {mark.nameAE}</div>
                                <div>รายละเอียด : {mark.messages}</div>
                                <div>สถานะ : {mark.status}</div>
                            </div>
                            {/* <div className=' mx-10'>
                                <button className="mx-5 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
                                    ยืนยันการรับงาน
                                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                </button>

                                <button className="mx-5 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-500 text-lg font-bold text-white">
                                    ยกเลิกการรับงาน
                                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )}
</div>

    );
}

export default TabComponent;
