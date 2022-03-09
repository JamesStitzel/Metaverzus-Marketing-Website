import MiamiPalm from '../images//Trademark/MiamiPalm.svg'

function Trademark() {
    return (
        <main>

            {/*Background*/}
            <div class="flex justify-center h-fit w-full very-black">

{/*Size limiter creates equal whitespace*/}
                <div class="md:flex items-center h-fit w-10/12 place-content-between border-t-2 border-gray-800 py-6">

                    {/*Copyright "MetaVersuz 2022" text*/}
                    <div class="flex pt-8 pl-0 md:pl-0 lg:pl-0 md:py-16 lg:py-12 text-gray-300 orbi text-base md:text-sm xl:text-base">METAVERZUS 2022</div>

                    {/*"MINTED IN MIAMI" text and accompanying rising sunshine logo*/}
                    <div class="flex py-8 pl-0 md:py-16 lg:py-12">
                        <div class="text-gray-300 orbi pr-2 text-base md:text-sm xl:text-base">MINTED IN MIAMI</div>
                        <div><img class="w-6 h-6" src={MiamiPalm} alt="Maimi Palm icon" /></div>

                    </div>

                </div>

            </div>

        </main>

    );
}

export default Trademark;