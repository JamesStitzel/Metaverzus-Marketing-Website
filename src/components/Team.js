import Asher from '../images/Team/Asher.svg'

function Team() {
    return (
        <main>

            {/*Background*/}
            <div class="flex justify-center h-fit less-black border-t-2 md:border-0 border-gray-800">

                {/*Main image container*/}
                <div class="flex flex-col justify-center">

                    <div class="flex justify-center text-center orbi text-gray-100 pt-20 pb-16 text-3xl xl:text-5xl font-bold whitespace-nowrap">
                        Team and Advisors
                    </div>

                    <div class="flex pb-20">

                        <div class="w-fit p-4">
                            <div class=""><img src={Asher} alt="logo" /></div>
                        </div>

                        <div class="w-fit p-4">
                            <div class=""><img src={Asher} alt="logo" /></div>
                        </div>

                        <div class="w-fit p-4">
                            <div class=""><img src={Asher} alt="logo" /></div>
                        </div>

                    </div>


                </div>

            </div>

        </main>

    );
}

export default Team;