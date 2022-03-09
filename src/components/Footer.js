import MetaVersuzlogo from '../images/MetaVersuzLogo.svg'
import TwitterIcon from '../images/Footer/TwitterIcon.svg'
import DiscordIcon from '../images/Footer/DiscordIcon.svg'
import InstagramIcon from '../images/Footer/InstagramIcon.svg'

function Footer() {
    return (
        <main>

            {/*Background*/}
            <div class="flex h-fit w-full justify-center very-black border-t-2 border-gray-800 pt-6">

                {/*Size limiter creates equal whitespace*/}
                <div class="md:flex justify-center items-left md:items-center w-10/12">

                    {/*logo and social media icons*/}
                    <div class="flex flex-col w-full md:w-1/2 xl:w-1/4 border-t-gray-200 py-8">

                        {/*MetaVerzus Logo*/}
                        <div class="flex w-full"><img class="w-full" src={MetaVersuzlogo} alt="logo" /></div>

                        {/*Social media buttons*/}
                        <div class="flex w-full">
                            <div class="p-2 pt-4"><img class="w-full h-full" src={TwitterIcon} alt="Twitter logo" /></div>
                            <div class="p-2 pt-4"><img class="w-full h-full" src={DiscordIcon} alt="Discord logo" /></div>
                            <div class="p-2 pt-4"><img class="w-full h-full" src={InstagramIcon} alt="Instagram logo" /></div>
                        </div>

                    </div>

                    {/*Resizable Whitespace*/}
                    <div class="w-0 lg:w-1/2 "></div>

                    {/*Flexbox containing text links*/}
                    <div class="flex border-t-2 border-gray-800 md:ml-16 md:border-t-0 py-4">

                        {/*Flexbox containing text links*/}
                        <div class="flex flex-col md:flex-row font-bold text-xl md:text-sm xl:text-xl orbi text-gray-300 w-3/4 md:1/2 xl:">

                            {/*First group of 2 links forms into a row at :md for responsive design functionality*/}
                            <div class="pl-0 w-1/2">
                                <div class="text-left pt-8">LITEPAPER</div>
                                <div class="text-left pt-8">GM@METAVERZUS.COM</div>
                            </div>

                            {/*Second group of 2 links forms into a row at :md for responsive design functionality*/}
                            <div class="pl-0 w-1/2">
                                <div class="text-left pl-0 md:pl-16 lg:pl-32 pt-8 whitespace-nowrap">PRIVACY POLICY</div>
                                <div class="text-left pl-0 md:pl-16 lg:pl-32 py-8 whitespace-nowrap">TERMS & CONDITIONS</div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>

    );
}

export default Footer;
