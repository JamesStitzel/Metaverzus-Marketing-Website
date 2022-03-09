import GalleryMain from '../images/Gallery/GalleryMain.png'

function Gallery() {
    return (
        <main>

            {/*Background*/}
            <div class="flex justify-center items-center h-fit w-full very-black">

                {/*Size limiter creates equal whitespace*/}
                <div class="flex flex-col-reverse lg:flex-row-reverse justify-center items-center w-full md:w-10/12 pb-16">

                    <div class="flex flex-col text-left justify-center w-10/12 lg:w-1/2 py-8 lg:pr-32">

                        <div class="orbi text-2xl font-bold text- text-gray-100 md:px-56">
                            THE FUTURE OF FANTSAY GAMING IS NFT DRIVEN
                        </div>

                        <div class="exo text-xl font-normal text-left text-gray-400 md:px-40">
                            Join a web3 fantasy gaming reality where on-chain scoring is based on real-world stats of NFT projects.
                        </div>

                    </div>

                    <div class="w-full lg:w-1/2">
                        <img class="w-full" src={GalleryMain} alt="Gallery Background" />
                    </div>

                </div>

            </div>

        </main>

    );
}

export default Gallery;