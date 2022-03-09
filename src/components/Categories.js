import Gaming from '../images/Categories/Gaming.svg'
import Art from '../images/Categories/Art.svg'
import VirtualLand from '../images/Categories/VirtualLand.svg'
import Photography from '../images/Categories/Photography.svg'
import Music from '../images/Categories/Music.svg'

function Categories() {
    return (
        <main>

            {/*Background*/}
            <div class="h-fit w-full very-black border-t-2 md:border-0 border-gray-800">

                {/*Main Carousel*/}
                <div class="main-carousel py-8" data-flickity='{ "wrapAround": false, "autoplay": true, "draggable": true}'>

                    <div class="carousel-cell h-64 w-64">
                        <img src={Gaming} alt="gaming" />
                    </div>
                    <div class="carousel-cell h-64 w-64">
                        <img src={Art} alt="art" />
                    </div>
                    <div class="carousel-cell h-64 w-64">
                        <img src={VirtualLand} alt="virtual land" />
                    </div>
                    <div class="carousel-cell h-64 w-64">
                        <img src={Photography} alt="photography" />
                    </div>
                    <div class="carousel-cell h-64 w-64">
                        <img src={Music} alt="music" />
                    </div>
          
                </div>

            </div>

        </main>

    );
}

export default Categories;