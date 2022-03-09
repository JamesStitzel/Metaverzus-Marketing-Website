import Gallery2Main from '../images/Gallery2/Gallery2Main.png'

function Gallery() {
    return (
        <main>

            {/*Background*/}
            <div class="flex justify-center items-center h-fit w-full less-black">

                {/*Size limiter creates equal whitespace*/}
                <div class="flex flex-col justify-center items-center w-full md:w-10/12 py-16">


                    <div class="w-full lg:w-1/2">
                        <img class="w-full" src={Gallery2Main} alt="Gallery2 Background" />
                    </div>

                    <div class="flex flex-col text-left justify-center w-10/12 lg:w-1/2 py-8">

                        <div class="orbi text-2xl font-bold text-center text-gray-100">
                            PLAY, BUILD, AND REDEFINE THE FUTURE OF FANTASY GAMING.
                        </div>

                        <div class="exo text-xl font-normal text-center text-gray-400 pb-8">
                            Put your skills to the test, compete against other NFT curators, lead your team to the moon and climb the tournament rankings!
                        </div>

                    </div>

                </div>

            </div>

        </main>

    );
}

export default Gallery;