import policyimg from '../assets/page/policyimg.png'
import Footer from '../Components/Footer'
import { English, USD } from "../components/navbar"
import { Dropdown1, NavBottom } from "../components/navbar1"
function Policy() {
    return (
        <>
        <div className=' container mx-auto'>
            <div className=" flex justify-between h-8 text-xs pt-1 bg-black">
                <div className=" flex">
                    <English />
                    <USD />
                </div>
                <div className=" flex justify-between  text-gray-400 font-semibold">
                    <div>
                        <a href="#" className="py-1.5 px-3 flex  items-center cursor-pointer hover:text-blue-600 duration-500 ">Help</a>
                    </div>
                    <div>
                        <a href="#" className="py-1.5 px-3 flex items-center cursor-pointer hover:text-blue-600 duration-500 ">Join US</a>
                    </div>
                    <div>
                        <a href="#" className="py-1.5 px-3 flex items-center cursor-pointer hover:text-blue-600 duration-500 ">Sign In</a>
                    </div>
                </div>

            </div>
</div>
            <div>
                <div>
                    <Dropdown1 />

                </div>
            </div>
            <div>
                <NavBottom />
            </div>
            <div className=' container mx-auto'>
            <div className='bg-gray-100 flex justify-between h-52 '>
                <div className=' mt-20'>
                    <h1 className='text-4xl font-semibold'>Privacy Policy</h1>
                </div>
                <div className='mt-10 mr-10'>
                    <img src={policyimg} alt="">
                    </img>
                </div>
            </div>

            <div className=' mt-10'>
                <p className='font-semibold border-b-[2px] border-blue-600 w-[39%]  py-5 text-base'>This Privacy policy was published on February 26th, 2022.</p>
            </div>

            <div className='  mt-10'>
                <div className=''>
                    <h1 className='text-2xl font-medium'>GDPR compliance</h1>
                    <p className='text-gray-500 mt-5'>Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius<br></br> congue magna tempus vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id<br></br> ligula ut faucibus. Aenean convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum <br></br>velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus<br></br> fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl font-medium'>About eTrade</h1>
                    <p className='text-gray-500 mt-5'>In dapibus, nibh sit amet pulvinar convallis, massa nunc tincidunt nunc, a pretium risus nulla ut dui. Ut ut condimentum<br></br> tellus, dapibus volutpat est. Integer ullamcorper iaculis blandit. Pellentesque id tempus urna. Quisque luctus cursus<br></br> imperdiet. </p>
                </div>
            </div>
            <div className='mt-10 '>
                <h1 className='text-2xl font-medium'>When we collect personal data about you</h1>
                <ul className='text-gray-500 mt-5 ml-3 space-y-3 text-xl'>
                    <li>Email is a crucial channel in any marketing.</li>
                    <li>Curious what to say? How to say it?</li>
                    <li>Whether you’re kicking off a new campaign.</li>
                    <li>Habitasse per feugiat aliquam luctus accumsan curae</li>

                </ul>
            </div>

            <div className='mt-10 '>
                <h1 className='font-medium text-2xl'>Why we collect and use personal data</h1>
                <p className='mt-5 text-gray-500'>Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius<br></br> congue magna tempus vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id<br></br> ligula ut faucibus. Aenean convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum<br></br> velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus<br></br> fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>
                <ul className='mt-5 space-y-3 text-gray-500 ml-3'>
                    <li>Nulla facilisi. Sed pulvinar nec purus eu sollicitudin. Quisque ut tempus quam, in cursus eros.</li>
                    <li>Fusce malesuada luctus velit eu tempor. Pellentesque habitant morbi tristique senectus et netus et.</li>
                    <li>Pellentesque ornare nulla est, non blandit sapien lacinia nec. Nulla ac velit id est mattis faucibus.</li>
                    <li>Aliquam lacus nisi, lobortis non diam eget, malesuada bibendum justo. Praesent fringilla sagittis ex, ac molestie ipsum<br></br> ullamcorper a.</li>
                    <li>Vestibulum nulla tortor, aliquam at porta in, hendrerit sed nibh.</li>
                </ul>
            </div>
            <div className='mt-10 '>
                <h1 className='font-medium text-2xl'>Type of personal data collected</h1>
                <p className='text-gray-500 mt-5'>In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis<br></br> in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.</p>
            </div>
            <div className='mt-10 '>
                <h1 className='font-medium text-2xl'>Information we collect automatically</h1>
                <p className='text-gray-500 mt-5'>Etiam vel mi vel neque mattis iaculis. Proin vitae consequat augue, vel porta tellus. Nullam tincidunt ac lorem eu lacinia.<br></br> Praesent ac diam id odio elementum efficitur. Suspendisse sit amet urna vitae neque tempor pellentesque. Aenean ut<br></br> dapibus urna. Pellentesque neque nulla, interdum vitae rhoncus at, pretium id arcu. Etiam sodales lectus at convallis<br></br> vestibulum. Quisque non neque augue. Nullam condimentum nulla felis, nec suscipit augue congue ac.</p>
            </div>
            <div className='mt-10 '>
                <h1 className='font-medium text-2xl'>The use of cookies and web beacons</h1>
                <p className='text-gray-500 mt-5'>We may log information using "cookies." Cookies are small data files stored on your hard drive by a website. Cookies help us<br></br> make our Site and your visit better.<br></br>
                    <br></br>
                    We may log information using digital images called web beacons on our Site or in our emails.<br></br>
                    <br></br>
                    This information is used to make our Site work more efficiently, as well as to provide business and marketing information to<br></br> the owners of the Site, and to gather such personal data as browser type and operating system, referring page, path through <br></br>site, domain of ISP, etc. for the purposes of understanding how visitors use our Site. Cookies and similar technologies help us<br></br> tailor our Site to your personal needs, as well as to detect and prevent security threats and abuse. If used alone, cookies and<br></br> web beacons do not personally identify you.</p>
            </div>
            <div className='mt-10 '>
                <h1 className='font-medium text-2xl'>How long we keep your data</h1>
                <p className='text-gray-500 mt-5'>We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected,<br></br> while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal<br></br> requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.<br></br>
                    <br></br>
                    This means that we may retain your personal data for a reasonable period after your last interaction with us. When the<br></br> personal data that we have collected is no longer required, we will delete it securely. We may process data for statistical<br></br> purposes, but in such cases, data will be anonymized.</p>
            </div>
            <div className='mt-10 '>
                <h1 className='font-medium text-2xl'>Your rights to your personal data</h1>
                <p className='text-gray-500 mt-5'>We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected,<br></br> while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal<br></br> requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
            </div>
            <div className='mt-10 '>
                <h1 className='font-medium text-2xl'>Hotjar’s privacy policy</h1>
                <p className='text-gray-500 mt-5'>Pellentesque vestibulum venenatis iaculis. Aliquam viverra sodales ultrices. Quisque sed purus id massa consequat<br></br> consectetur eu vel lorem. Maecenas lectus velit, cursus quis orci non, laoreet hendrerit mi. Nulla vitae ipsum fringilla,<br></br> placerat metus eu, malesuada velit. Quisque viverra risus ex. Aenean commodo vestibulum efficitur. Nullam ligula orci,<br></br> aliquet sed luctus vel, luctus vel dui. Sed pulvinar, ipsum at mattis imperdiet, diam augue tempor diam, sed porttitor odio elit<br></br> ut ante. In posuere mi at mi pellentesque ornare sit amet gravida nisi. Praesent ac blandit odio. Curabitur iaculis ante elit, et<br></br> imperdiet leo mollis at.</p>
            </div>
            <div className='mt-10 '>
                <h1 className='font-medium text-2xl'>Changes to this Privacy Policy</h1>
                <p className='text-gray-500 mt-5'>Integer eu ornare lectus, ornare ullamcorper tellus. Morbi in urna a justo dignissim luctus. Nam sagittis ante ut lorem feugiat,<br></br> sed consectetur ligula lacinia. Vestibulum quis mauris sed lectus pretium dictum sed vitae orci. Vestibulum facilisis<br></br> facilisis mauris non maximus. Nam tristique ipsum egestas, suscipit orci sit amet, rutrum ante. Proin in felis pellentesque,<br></br> ullamcorper enim vel, molestie ipsum.

                </p>
            </div>
            </div>
            <div className=' container mx-auto'>
                <Footer />

            </div>
        </>
    )
}

export default Policy