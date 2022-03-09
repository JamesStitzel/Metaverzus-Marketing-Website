import TwitterButton from '../images/Community/TwitterButton.svg'
import DiscordButton from '../images/Community/DiscordButton.svg'

function Community() {
    return (
        <main>

            {/*Background*/}
            <div class="flex flex-col items-center h-fit w-full very-black">

                {/*Size limiter creates equal whitespace*/}
                <div class="flex flex-col justify-center items-center w-10/12">

                    {/*"JOIN OUR COMMUNITY" glowing text*/}
                    <div class="orbi text-gray-100 pt-24 text-3xl xl:text-5xl font-bold whitespace-nowrap">JOIN OUR COMMUNITY</div>

                    {/*"WE ARE THE PEOPLE'S NFT CHAMPIONS" slight smaller glowing text*/}
                    <div class="orbi text-gray-400 pt-8 pb-4 text-xl font-bold">WE ARE THE PEOPLE'S NFT CHAMPIONS</div>

                    <div class="flex flex-col md:flex-row items-center justify-center h-fit w-full">

                        {/*Twitter button*/}
                        <div class="flex justify-center md:justify-end w-full md:w-1/2 px-2 pt-4 md:pb-32 md:pt-8">
                            <img class="h-36" src={TwitterButton} alt="Twitter logo" />
                        </div>

                        {/*Discord button*/}
                        <div class="flex justify-center md:justify-start w-full md:w-1/2 px-2 pb-24 pt-4 md:pb-32 md:pt-8">
                            <img class="h-36" src={DiscordButton} alt="Discord logo" />
                        </div>

                    </div>

                </div>

            </div>

        </main>

    );
}

export default Community;