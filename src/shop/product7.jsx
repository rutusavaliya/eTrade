import React, { useReducer } from 'react'
import { TopBar } from "../home";
import { Dropdown1, NavBottom } from "../components/navbar1"
import Components from "../Components/components";
import Footer from "../Components/Footer"

const ProductV7 = () => {
    const initialState = {
        firstCounter: 1,
      }
      const reducer = (state, action) => {
        switch (action.type) {
    
          case 'inc1':
            return { ...state, firstCounter: state.firstCounter + action.value }
          case 'dec1':
            return { ...state, firstCounter: state.firstCounter - action.value }
    
          default:
            return state;
        }
      }
      const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <TopBar />
            </div>

            <div>
                <div className=''>
                    <Dropdown1 />

                </div>
            </div>
            <div>
                <NavBottom />
            </div>


            <section className='IMAGES-AND-DISCRIPTION my-[80px]'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-2 '>
                        <div className='h-[630px] sticky top-28'>
                            <img className='rounded-md' src="./src/assets/shop/cartoon1.png" alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold text-4xl text-[#292930] tracking-wide mb-8'>Bored Ape Yacht Club</h1>
                            <h1 className='font-semibold text-2xl text-[#292930] mb-10'>$5000.00</h1>
                            <div className='relative w-full z-10 text-center py-5  rounded-md text-white font-bold'>
                                <a href="" className='
                                before:absolute
                                before:content-[""]
                                before:bg-[#3577F0]
                                before:top-0
                                before:bottom-0
                                before:left-0
                                before:right-0
                                before:hover:scale-105
                                before:duration-300
                                before:rounded-md
                                before:-z-10
                                '>Buy Product</a>
                            </div>
                            <div className='flex justify-between items-center mt-10 border-b pb-10'>
                                <div className='flex items-center'>
                                    <h1 className='font-semibold text-2xl text-[#292930]'>Category : </h1>
                                    <span className='text-gray-800 hover:text-[#3577F0] duration-300 mt-1 ml-2'> Digital Art</span>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='mr-2 text-gray-400 mt-1'>Is this item Authentic?</h1>
                                    <div>
                                        <a href="#" className=" relative px-8 py-4 rounded-md font-semibold text-white bg-[#ff497c] 
                                        before:absolute 
                                        before:content-[''] 
                                        before:w-[110px] 
                                        before:rounded-md 
                                        before:left-0 
                                        before:right-0  
                                        before:top-0 
                                        before:bottom-0 
                                        before:bg-[#ff497c]  
                                        before:-z-10 
                                        before:hover:scale-110  
                                        before:duration-300 ">Verifiy</a>
                                    </div>
                                </div>
                            </div>

                            <div className='FORM bg-[#F9F3F0] p-10 mt-7 rounded-md'>
                                <div className='flex justify-between mb-3'>
                                    <div className='bg-white py-2 px-8 font-semibold text-lg tracking-wide rounded-md text-[#3577F0] '>Description</div>
                                    <div className='bg-white py-2 px-8 font-semibold text-lg tracking-wide rounded-md text-gray-400 hover:text-[#3577F0] duration-300'>Additional Information</div>
                                    <div className='bg-white py-2 px-8 font-semibold text-lg tracking-wide rounded-md text-gray-400 hover:text-[#3577F0] duration-300'>Property</div>
                                </div>

                                <div className='DESCRIPTION bg-white rounded-md p-7'>
                                    <h1 className='font-bold text-gray-500 mb-5'>About this Product</h1>
                                    <p className='text-gray-500 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis culpa error modi tenetur ratione inventore ipsam voluptate praesentium quod nemo.</p>
                                    <div className='mt-7'>
                                        <div className=" flex py-3 px-6 bg-[#F6F7FB] text-[#292930] ">
                                            <h1 className="w-48 font-semibold ">Contract Address</h1>
                                            <h1 className="text-gray-400  font-semibold ml-24">0xd4fio...se520</h1>
                                        </div>
                                        <div className=" flex py-3 px-6 text-[#292930]">
                                            <h1 className="w-48 font-semibold ">Token ID</h1>
                                            <h1 className="text-gray-400  font-semibold ml-24">420</h1>
                                        </div>
                                        <div className=" flex py-3 px-6 bg-[#F6F7FB] text-[#292930] ">
                                            <h1 className="w-48 font-semibold ">Token Standard</h1>
                                            <h1 className="text-gray-400  font-semibold ml-24">Bna-420</h1>
                                        </div>
                                        <div className=" flex py-3 px-6 text-[#292930]">
                                            <h1 className="w-48 font-semibold ">Blockchain</h1>
                                            <h1 className="text-gray-400  font-semibold ml-24">Ethereum</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='ADDITIONAL-INFORMATION bg-white rounded-md p-7 hidden'>
                                    <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Brand</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">eTrade</h1>
                                    </div>
                                    <div className="py-5 flex text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Collection</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">eTrade Capsules</h1>
                                    </div>
                                    <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Creator</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">Arnold Ray</h1>
                                    </div>
                                    <div className="py-5 flex text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Gen</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">1</h1>
                                    </div>
                                    <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Rarity</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">Epic</h1>
                                    </div>
                                    <div className="py-5 flex text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Type</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">Digital Art</h1>
                                    </div>
                                </div>

                                <div className='PROPERTY bg-white rounded-md p-7 hidden'>
                                    <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Brand</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">eTrade</h1>
                                    </div>
                                    <div className="py-5 flex text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Collection</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">eTrade Capsules</h1>
                                    </div>
                                    <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Creator</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">Arnold Ray</h1>
                                    </div>
                                    <div className="py-5 flex text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Gen</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">1</h1>
                                    </div>
                                    <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Rarity</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">Epic</h1>
                                    </div>
                                    <div className="py-5 flex text-[#292930] ">
                                        <h1 className="w-[200px] font-semibold px-10">Type</h1>
                                        <h1 className="text-gray-500 font-normal ml-24">Digital Art</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mx-auto mt-[80px]'>
                    <div>
                        <div className='flex mb-3'>
                            <i className="ri-shopping-basket-2-line h-6 w-6 text-base border bg-[#8C71DB] text-white rounded-full flex items-center justify-center"></i>
                            <h1 className='text-[#8C71DB] font-bold text-sm flex items-center ml-2'>Related</h1>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className="font-bold text-4xl text-[#292930] mb-[30px]">Browse by Category</h1>
                            <div className='text-gray-400'>
                                <div className='hover:scale-110 duration-300 inline-block'>
                                    <a href="#" className=''><i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i></a>
                                </div>
                                <div className='hover:scale-110 duration-300 inline-block '>
                                    <a href="#" className=''><i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='CARTOON-CARD grid grid-cols-4 gap-8 mt-7'>
                        <div className='relative group'>
                            <div className='overflow-hidden' style={{ borderRadius: "6px 6px 0 0" }}>
                                <img className='bg-cover group-hover:scale-125 duration-1000 cursor-pointer' src="./src/assets/shop/cartoon2.png" alt="" />
                            </div>
                            <div className='border-x border-b p-7 group-hover:shadow-xl group-hover:shadow-gray-100 duration-500 hover:border-none overflow-hidden' style={{ borderRadius: " 0 0 6px 6px" }}>
                                <h2 className='absolute top-60 right-7 font-bold text-xl text-white'
                                    style={{
                                        backgroundColor: "rgba(255,255,255,.5)",
                                        border: "1px solid rgba(255,255,255,.5)",
                                        padding: "5px 15px",
                                        backdropFilter: "blur(25px)",
                                        boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                        borderRadius: "6px"
                                    }} >$30
                                </h2>
                                <div>
                                    <h1 className='text-gray-500 font-semibold mr-2 inline-block hover:text-[#3577F0] cursor-pointer'>Bored Ape Yacht Club </h1>
                                    <span><i class="ri-verified-badge-fill text-[#3577F0]"></i></span>
                                </div>
                                <div>
                                    <button className=' mt-3 border px-5 py-2.5 rounded-md text-sm font-semibold text-[#292930] hover:bg-[#3577F0] hover:text-white duration-300'>Buy Product</button>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='overflow-hidden' style={{ borderRadius: "6px 6px 0 0" }}>
                                <img className='bg-cover group-hover:scale-125 duration-1000 cursor-pointer' src="./src/assets/shop/cartoon3.png" alt="" />
                            </div>
                            <div className='border-x border-b p-7 group-hover:shadow-xl group-hover:shadow-gray-100 duration-500 hover:border-none overflow-hidden' style={{ borderRadius: " 0 0 6px 6px" }}>
                                <h2 className='absolute top-60 right-7 font-bold text-xl text-white'
                                    style={{
                                        backgroundColor: "rgba(255,255,255,.5)",
                                        border: "1px solid rgba(255,255,255,.5)",
                                        padding: "5px 15px",
                                        backdropFilter: "blur(25px)",
                                        boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                        borderRadius: "6px"
                                    }} >$3000
                                </h2>
                                <div>
                                    <h1 className='text-gray-500 font-semibold mr-2 inline-block hover:text-[#3577F0] cursor-pointer'>Bored Ape Yacht Club </h1>
                                </div>
                                <div>
                                    <button className=' mt-3 border px-5 py-2.5 rounded-md text-sm font-semibold text-[#292930] hover:bg-[#3577F0] hover:text-white duration-300'>Buy Product</button>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='overflow-hidden' style={{ borderRadius: "6px 6px 0 0" }}>
                                <img className='bg-cover group-hover:scale-125 duration-1000 cursor-pointer' src="./src/assets/shop/cartoon4.png" alt="" />
                            </div>
                            <div className='border-x border-b p-7 group-hover:shadow-xl group-hover:shadow-gray-100 duration-500 hover:border-none overflow-hidden' style={{ borderRadius: " 0 0 6px 6px" }}>
                                <h2 className='absolute top-60 right-7 font-bold text-xl text-white'
                                    style={{
                                        backgroundColor: "rgba(255,255,255,.5)",
                                        border: "1px solid rgba(255,255,255,.5)",
                                        padding: "5px 15px",
                                        backdropFilter: "blur(25px)",
                                        boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                        borderRadius: "6px"
                                    }} >$100
                                </h2>
                                <div>
                                    <h1 className='text-gray-500 font-semibold mr-2 inline-block hover:text-[#3577F0] cursor-pointer'>Bored Ape Yacht Club </h1>
                                    <span><i class="ri-verified-badge-fill text-[#3577F0]"></i></span>
                                </div>
                                <div>
                                    <button className=' mt-3 border px-5 py-2.5 rounded-md text-sm font-semibold text-[#292930] hover:bg-[#3577F0] hover:text-white duration-300'>Buy Product</button>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='overflow-hidden' style={{ borderRadius: "6px 6px 0 0" }}>
                                <img className='bg-cover group-hover:scale-125 duration-1000 cursor-pointer' src="./src/assets/shop/cartoon5.png" alt="" />
                            </div>
                            <div className='border-x border-b p-7 group-hover:shadow-xl group-hover:shadow-gray-100 duration-500 hover:border-none overflow-hidden' style={{ borderRadius: " 0 0 6px 6px" }}>
                                <h2 className='absolute top-60 right-7 font-bold text-xl text-white'
                                    style={{
                                        backgroundColor: "rgba(255,255,255,.5)",
                                        border: "1px solid rgba(255,255,255,.5)",
                                        padding: "5px 15px",
                                        backdropFilter: "blur(25px)",
                                        boxShadow: "0 4px 30px rgba(0,0,0,.1)",
                                        borderRadius: "6px"
                                    }} >$2000
                                </h2>
                                <div>
                                    <h1 className='text-gray-500 font-semibold mr-2 inline-block hover:text-[#3577F0] cursor-pointer'>Bored Ape Yacht Club </h1>
                                    <span><i class="ri-verified-badge-fill text-[#3577F0]"></i></span>
                                </div>
                                <div>
                                    <button className=' mt-3 border px-5 py-2.5 rounded-md text-sm font-semibold text-[#292930] hover:bg-[#3577F0] hover:text-white duration-300'>Buy Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div>
                <Components />
            </div>
            <div className=" container mx-auto">
                <Footer />
            </div>
        </>
    )
}

export default ProductV7