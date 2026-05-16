import useFetch from "./useFetch";
import Cards from "./cards";
import Filter from "./FilterSection/filter";


export default function Products(){
    const{loading, data, error } = useFetch("https://internshala.com/hiring/search");

    if(loading){
        return(
            <p className="text-center h-dvh flex justify-center-safe items-center-safe text-2xl text-[#4696c2]">Loading...</p>
        )
    }
    if(error){
        return (
            <p className="text-center h-dvh flex justify-center-safe items-center-safe text-2xl text-[#ff2121]">{error}...</p>
        )
    }

    const intershipObject = data?.internships_meta
    const internshipsArray = intershipObject ? Object.values(intershipObject):[];
    

    return(
        <>
        <div className="relative mx-5 mt-35 lg:mt-35 lg:mx-35">
            {/* <div className="w-3/6 h-dvh bg-white rounded-2xl p-5 sticky top-24 block lg:hidden">
                    <Filter />
                </div> */}
            <div className="text-center lg:text-right w-full lg:w-3/4 py-5 mb-5">
                <h1 className=" font-semibold text-2xl">{internshipsArray.length} Total Interships</h1>
                <p className="text-xs mt-5">Latest summer Internships in India</p>
            </div>
            <div id="main-content" className="flex gap-5">
                <div className="xl:w-3/6 h-dvh bg-white rounded-2xl p-5 sticky top-24 hidden lg:block">
                    <Filter />
                </div>
                <div className="w-full flex flex-col gap-5">
                    <Cards data = {internshipsArray}/>
                </div>
            </div>
        </div>
        </>
    )
}