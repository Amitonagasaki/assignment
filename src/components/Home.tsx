
import "../index.css"
import { IoChevronDownCircleOutline } from "react-icons/io5";
const Home = () => {
  return (
    <>
    <div className="img1  text-white text-center ">
 <h1 className="text-3xl md:text-8xl">Developer Experiences</h1>
 <h3 className="text-xl md:text-4xl mt-5">UI frameworks and app development tools that 2.1 millon developers love</h3>
   
 <div className=" flex items-end justify-center h-36  ">
 <IoChevronDownCircleOutline size={50} color="gray"/>
 </div>
 </div>
   {/* 2nd part */}

<div className="p-10">
    <div className="flex flex-col md:flex-row mt-5 gap-5">
       
       <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg p-6 text-center shadow-sm">
        <h2 className="text-green-600 text-xl font-bold">.NET</h2>
        <h1 className="text-2xl font-bold mt-4">DevCraft<span className="text-sm align-top ml-1">™</span></h1>
        <p className="text-gray-600 mt-4">.NET UI controls, reporting and developer productivity tools</p>
       <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Learn more</button>
       </div>

       <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg p-6 text-center shadow-sm">
        <h2 className="text-blue-600 text-xl font-bold">NATIVE MOBILE</h2>
        <h1 className="text-2xl font-bold mt-4">NativeScript<span className="text-sm align-top ml-1">™</span></h1>
        <p className="text-gray-600 mt-4">Open Source framework for building truly native mobile apps with Angular, TypeScript or Javascript</p>
       <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Learn more</button>
       </div>

       <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg p-6 text-center shadow-sm">
        <h2 className="text-red-600 text-xl font-bold">.HTML5</h2>
        <h1 className="text-2xl font-bold mt-4">Kendo UI<span className="text-sm align-top ml-1">™</span></h1>
        <p className="text-gray-600 mt-4">.NET UI controls, reporting and developer productivity tools</p>
       <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Learn more</button>
       </div>
       

    </div>

    <div className="flex flex-col md:flex-row mt-5 gap-5">
       
       <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg p-6 text-center shadow-sm">
        <h2 className="text-gray-600 text-xl font-bold">.CMS</h2>
        <h1 className="text-2xl font-bold mt-4">Progress SiteFinity<span className="text-sm align-top ml-1">™</span></h1>
        <p className="text-gray-600 mt-4">.NET UI controls, reporting and developer productivity tools</p>
       <button className="mt-6 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">Learn more</button>
       </div>

       <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg p-6 text-center shadow-sm">
        <h2 className="text-gray-600 text-xl font-bold">.MOBLIE</h2>
        <h1 className="text-2xl font-bold mt-4">Telerik Platform<span className="text-sm align-top ml-1">™</span></h1>
        <p className="text-gray-600 mt-4">.NET UI controls, reporting and developer productivity tools</p>
       <button className="mt-6 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">Learn more</button>
       </div>

       <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg p-6 text-center shadow-sm">
        <h2 className="text-green-600 text-xl font-bold">Testing</h2>
        <h1 className="text-2xl font-bold mt-4">Test Studio<span className="text-sm align-top ml-1">™</span></h1>
        <p className="text-gray-600 mt-4">.NET UI controls, reporting and developer productivity tools</p>
       <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Learn more</button>
       </div>
       

    </div>
</div>
</>

  )
}

export default Home