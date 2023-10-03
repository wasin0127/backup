import LayoutPages from "@/components/layout";
import TabComponent from "@/components/manage/list";



export default function Home() {
    return (
        <>
            <LayoutPages>
                <div className=" my-10 ">
                <h1 className=" text-4xl text-[#ffffff] text-center mt-5 group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500  font-bold mx-auto">คิวงาน</h1>
                    <TabComponent/>
                   



                </div>
            </LayoutPages>
        </>
    )
}