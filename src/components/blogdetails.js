import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Blogdetails() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <section className='header'>

                <div
                    className="bg-cover bg-center h-[15vh] items-center justify-center"
                    style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/staging/img/hero/hero-1.jpg)' }}
                >
                    <div className="relative z-10 w-full bg-transparent">
                        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">

                            {/* Left side logo and "Staging" */}
                            <div className="flex items-center space-x-2 mb-4 -ml-48 md:mb-0 sm:ml-0">
                                <Link
                                    to="/"
                                    className="text-3xl  md:text-5xl font-bold text-white mt-2 md:mt-6   md:-ml-20"
                                    style={{ fontFamily: "Aldrich, sans-serif" }}
                                >
                                    Staging
                                </Link>
                                <span className="w-2 h-2 bg-[#dfa667] rounded-full mt-4 md:mt-10"></span>


                                {/*  Menu for Mobile */}
                                <div className="md:hidden">
                                    <button
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="text-white text-2xl focus:outline-none ml-auto"
                                    >
                                        <FontAwesomeIcon icon={faBars} className='mt-4 ' style={{ marginRight: "-320px" }} />

                                    </button>
                                </div>
                            </div>

                            {/* Centered navigation links */}
                            <div
                                className={`flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-9 mt-2 md:mt-6 md:-ml-10 ${isMenuOpen ? "block" : "hidden"
                                    } md:flex`}
                            >
                                <a
                                    href="#"
                                    className="hover:text-[#dfa667] border-b-2 border-yellow-500 text-base md:text-xl font-semibold text-white"
                                >
                                    Home
                                </a>
                                <Link
                                    to="/projects"
                                    className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                                >
                                    Projects
                                </Link>
                                <Link
                                    to="/about"
                                    className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                                >
                                    Pages
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                                >
                                    Blog
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:border-b-2 hover:border-yellow-500 text-base md:text-xl font-semibold text-white"
                                >
                                    Contact
                                </Link>
                            </div>

                            {/* Right side contact information */}
                            <div className="hidden md:flex flex-col text-sm md:text-lg text-white -mb-4 md:-mb-10 mt-4 md:mt-0 text-center md:text-right">
                                <span>Call us for any questions</span>
                                <span className="text-[#dfa667] text-lg md:text-2xl font-semibold">
                                    +01 123 456 789
                                </span>
                            </div>
                        </div>

                        {/* shown only when menu is open */}
                        {isMenuOpen && (
                            <div className="flex md:hidden flex-col text-center mt-4 text-white">
                                <span>Call us for any questions</span>
                                <span className="text-[#dfa667] text-lg font-semibold">+01 123 456 789</span>
                            </div>
                        )}
                    </div>
                </div>


            </section>

            <section className='flex justify-center'>
                <div className="w-full    md:w-[60%]  mt-10" style={{ alignContent: "center" }}>
                    <p className="text-[#b7b7b7] mb-2 ml-6 " style={{ fontSize: "15px", fontWeight: "500", letterSpacing: "2px", textTransform: "uppercase" }}>December 20, 2019 • <span className='ml-16 mr-16'> By John Doe</span> • Planning</p>
                    <h1 className="text-4xl font-bold ml-6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", lineHeight: "48px" }}>Target and Amazon Shopping List for <br /> Home Stagers</h1>
                    <div className="bg-transparent  shadow-lg rounded-lg p-6 shadow shadow-t-0 shadow-left-0 shadow-r-0 outline-none" >
                        <img
                            src="https://preview.colorlib.com/theme/staging/img/project/project-3.jpg"
                            alt="Get Shit Done"
                            className="w-[100%] h-[65vh]  mb-6 "
                        />
                        <p className=" text-[#7d8184]  mt-10 " style={{ fontFamily: "Poppins, sans-serif", fontsize: "20px", fontWeight: "400", lineHeight: "32px", fontSize: "17px" }}>Forget Ebay and other forms of advertising for your property that costs you hard earned money. Properties have ready several locations around the world to take your free listings for any luxury property you have. <br />
                            <br />

                            Each location web site is purpose built so every Search Engine will pick up new listings within minutes. This way your customers only have to type in keywords relating to their search for a luxury home and the Search Engine will show the Invest Asset web site applicable to their location they are looking for. <br />
                            <br />

                            Most real estate companies are way too busy with selling their client’s properties to put any effort forth to their web site. Hence, making it difficult for web surfers to find their listings. <br /></p>


                    </div>

                    <div className=' bg-[#dfa667] mt-10 mb-10 h-[30vh] flex items-center justify-center text-center  '>
                        <div>
                            <h3 className='text-[#fff] text-left ' style={{ fontFamily: "Aldrich, sans-serif", fontSize: "24px", lineHeight: "32px", marginLeft: "50px", textTransform: "uppercase", marginRight: "50px" }}>“Without question this is the stager you want to use! Jennifer staged a hard to sell home for me and we sold it fast! …. Jennifer made it possible.”</h3>
                            <p className='text-[#fff] mt-4 text-left' style={{ fontFamily: "Aldrich, sans-serif", fontSize: "22px", letterSpacing: "4px", marginLeft: "50px", marginTop: "-10px" }}>Martin Lockhart
                                <FontAwesomeIcon className='text-[#ffffff] text-5xl ' style={{ marginLeft: "470px" }} icon={faQuoteLeft} />

                            </p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#7d8184]' style={{fontFamily:"Poppins, sans-serif",fontSize:"20px", lineHeight:"32px"}}>Now times have changed and we at Investment Assets Properties are thinking of the customer before the business. If you have a property in a location not listed at Investment Assets Properties. Don’t worry. A quick email to us will ensure your location is built to accommodate your listing. <br />
                            <br />

                            Selling your luxury home, condominium or property should not be a painstaking event. It should be easy and stress free and it should be able to be advertised on a global scale for free. Investment Assets Properties can and will do this for you in a hassle free way. <br /></p>
                    </div>
                    <div className='flex gap-6 mb-20 mt-10'>

                        <img src="https://preview.colorlib.com/theme/staging/img/blog/details/bi-1.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/details/bi-2.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/details/bi-3.jpg" alt="" />

                    </div>
                    <div className='flex justify-between gap-6 mb-10'>
                        <p> Tags:
                            <Link className='text-[#b7b7b7]' style={{ letterSpacing: "1px", fontWeight: "600", marginRight: "12px", marginLeft: "12px" }}>BRANDING</Link>
                            <Link className='text-[#b7b7b7]' style={{ letterSpacing: "1px", fontWeight: "600", marginRight: "12px", marginLeft: "12px" }}>OFFICE</Link>
                            <Link className='text-[#b7b7b7]' style={{ letterSpacing: "1px", fontWeight: "600", marginRight: "12px", marginLeft: "12px" }}>CREATIVE</Link>
                        </p>
                        <div className='flex gap-6'>
                            <Link>
                                <FontAwesomeIcon icon={faFacebook}
                                    className='text-2xl' />
                            </Link>
                            <Link>
                                <FontAwesomeIcon icon={faTwitter}
                                    className='text-2xl' />
                            </Link>
                            <Link>
                                <FontAwesomeIcon icon={faInstagram}
                                    className='text-2xl' />
                            </Link>
                            <Link>
                                <FontAwesomeIcon icon={faLinkedin}
                                    className='text-2xl' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex mb-20 ml-10 mt-32'
                    >
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/blog-about.png" alt="" />
                        <div className='ml-10'>
                            <h3 className='text-[#111111] text-xl' style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", marginBottom: "12px" }}>Dana Vaughn</h3>
                            <h4 className='text-[#7d8184] text-xl' style={{ lineHeight: "32px" }}>Now times have changed and we at Investment Assets Properties are <br />thinking of the customer before the business. If you have a property in a <br /> location not listed at Investment Assets Properties.</h4>
                        </div>
                    </div>

                    <div className='flex justify-between mb-10'>
                        <div className='flex'>
                            <img src="https://preview.colorlib.com/theme/staging/img/blog/details/prev.jpg"
                                alt=""
                                className='h-[13vh]' />
                            <div className='ml-6'>
                                <Link>
                                    <h4 className='text-[#8d8d8d]' style={{ fontFamily: "Poppins, sans-serif", fontsize: "20px", marginBottom: "6px" }}> Previous Post</h4>
                                    <h2 className='text-[#353535] ' style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: "600" }}>Popular Uses of the Internet</h2>
                                </Link>
                            </div>
                        </div>

                        <div className='flex '>
                            <div className='mr-6'>
                                <Link>
                                    <h4 className='text-right text-[#8d8d8d]' style={{ fontFamily: "Poppins, sans-serif", fontsize: "20px" }}>Next Post </h4>
                                    <h2 className='text-[#353535] ' style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: "600" }}>Help Finding Information Online</h2>
                                </Link>
                            </div>
                            <img src="https://preview.colorlib.com/theme/staging/img/blog/details/next.jpg"
                                alt=""
                                className='h-[13vh]'
                            />
                        </div>
                    </div>

                    <div className='mb-20'>
                        <h2 className='text-[#111111] mt-20 ' style={{ fontFamily: "Aldrich, sans-serif", marginBottom: "35px", fontSize: "26px", fontWeight: "450" }}>LEAVE A REPLY</h2>
                        <div className='flex gap-4'>
                            <input type="text"
                                placeholder='Name'
                                className='border w-[25%] h-[6vh] pl-3' />

                            <input type="text"
                                placeholder='Email Address'
                                className=' border w-[25%] pl-3'
                            />

                            <input type="number"
                                placeholder='Phone Number'
                                className='border w-[25%] pl-3 '
                            />

                        </div >
                        <div className='mt-10 '>
                            <textarea name="Your Comment"
                                placeholder='Your Comment'
                                className='border w-[78%] h-[20vh] pl-3 '
                            ></textarea>
                        </div>

                        <div className='bg-[#111111] w-[18%] h-[8vh] text-center mt-6' >

                        <button className='text-[#ffffff] mt-4' style={{fontSize:"19px", fontWeight:"600",}}>Submit Now</button>
                        </div>
                    </div>






                </div>
            </section>
        </>

    )
}