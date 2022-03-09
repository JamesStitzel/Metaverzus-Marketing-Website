import LinearVerse1 from '../images/Waitlist/LinearVerse1.svg'
import LinearVerse2 from '../images/Waitlist/LinearVerse2.svg'
import FantasyNFT from '../images/Waitlist/FantasyNFT.svg'
import FantasyNFT2 from '../images/Waitlist/FantasyNFT2.svg'
import WaitlistButton from '../images/Waitlist/WaitlistButton.svg'

function Waitlist() {
    return (
        <main>

            {/*Background*/}
            <div class="h-fit w-full flex flex-col justify-center items-center very-black">

                {/*Background image with all the lines (relative parent)*/}
                <div class="relative flex flex-col justify-center items-center w-full pt-16">
                    <div class="w-full h-full"><img class="w-full hidden md:flex" src={LinearVerse2} alt="Desktop Background" /></div>
                    <div class="w-full h-full"><img class="w-full flex md:hidden" src={LinearVerse1} alt="Mobile Background" /></div>

                    {/*Displays content inside of LinearVerse image (for effective background) (absolute child)*/}
                    <div class="absolute flex flex-col justify-center items-center">

                        {/*"Fantasy NFTS" glowing text, swaps two images for text-wrap functionality on smaller screens*/}
                        <div class="flex flex-col justify-center w-11/12 items-center py-8">
                            <div class="w-full"><img class="hidden md:flex w-full" src={FantasyNFT} alt="FANTASY NFTS Mobile" /></div>
                            <div class="w-full"><img class="flex md:hidden w-full" src={FantasyNFT2} alt="FANTASY NFTS Desktop" /></div>
                        </div>

                        <div class="orbi text-2xl font-bold text-center text-gray-200 px-8">
                            <p>EXPERIENCE THE FANTASY,</p>
                            <p>PREDICT THE REALITY.</p>
                            <p>DECIDE WHICH NFT WILL</p>
                            <p>MOON NEXT.</p>
                        </div>


                        {/*Waitlist button*/}
                        <div class="flex justify-center w-11/12 md:w-1/3 lg:w-1/2 pb-32 py-8">
                            <img class="flex w-full relative" src={WaitlistButton} alt="Waitlist button" />
                        </div>

                    </div>
                </div>
            </div>

        </main>

    );
}

export default Waitlist;