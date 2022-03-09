import MetaVersuzlogo from '../images/MetaVersuzLogo.svg'
import CaretIcon from '../images/Header/CaretIcon.svg'

function Header() {
    return (
        <main>

            {/*Background*/}
            <div class="flex justify-center h-fit w-full very-black">

                {/*Size limiter creates equal whitespace*/}
                <div class="md:flex justify-center items-center w-10/12">

                    {/*Navbar*/}
                    <nav class="w-full">

                        <div class="flex justify-center w-full">

                            <div class="flex space-x-7 w-full justify-between">

                                {/*Metaverzus Logo*/}
                                <div class="w-full md:w-1/3">
                                    <a href="" class="flex w-fit items-center py-4 px-2">
                                        <img class="w-full h-20 md:justify-self-start border-0 md:border-r-2 md:border-gray-900" src={MetaVersuzlogo} alt="MetaVersuz Logo" />
                                        
                                    </a>
                                </div>

                                {/*Navbar links for larger screens*/}
                                <div class="hidden w-full md:flex justify-start items-center space-x-1">
                                    <a href="" class="orbi py-4 px-2 text-gray-200 font-bold text-base md:text-sm lg:text-base tracking-widest hover:text-purple-500 transition duration-300">LitePaper</a>
                                    <a href="" class="orbi py-4 px-2 text-gray-200 font-bold tracking-widest hover:text-purple-500 transition duration-300">Community</a>
                                </div>

                                {/*Profile pill for larger screens*/}
                                <div class="justify-end self-center w-1/4 h-16 hidden md:flex">
                                    <div class="flex flex-none justify-end w-0 md:w-1/4">
                                        <div class="flex border-2 rounded-tl-lg rounded-br-lg pl-4 border-gray-400 orbi text-lg text-gray-100">
                                            <div class="flex">
                                                <div class="flex-column">
                                                    <div>OX...345</div>
                                                    <div class="flex">
                                                        <div class="flex">
                                                            <div class="mt-3 mr-2 w-2 h-2 bg-green-400 rounded-full"></div>
                                                            <div>Phantom</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="w-8">
                                                    <div class="w-8">
                                                        <img class="h-10 w-10 pt-2" src={CaretIcon} alt="Caret icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/*Navbar items for smaller screens*/}
                            <div class="hidden md:flex items-center space-x-3 ">

                            </div>

                            {/*Hamburger button for smaller screens*/}
                            <div class="md:hidden flex items-center">
                                <button class="outline-none mobile-menu-button">
                                    <svg class=" w-6 h-6 text-gray-500 hover:text-purple-500 transition duration-300"
                                        x-show="!showMenu"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="3"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M4 8h18M4 16h18M4"></path>
                                    </svg>
                                </button>

                            </div>

                        </div>



                        {/*Usually hidden menu for smaller screens*/}
                        <div class="flex w-full justify-end">
                            <div class="hidden mobile-menu justify-self-end">
                                <ul class="">
                                    <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-gray-200 bg-purple-500 font-semibold">Litepaper</a></li>
                                    <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-purple-500 transition duration-300">Community</a></li>
                                </ul>

                            </div>

                        </div>

                    </nav>

                </div>

            </div>

        </main>

    );
}

export default Header;