let carouselDefinition = {
    imageSources: ["Assets/Mars.png","Assets/Mercury.png","Assets/Neptune.png","Assets/Pluto.png"],
    imageLocation: document.getElementById("carouselImage"),
    pagingLocation: document.getElementById("points"),
    pagingClass: "point",
    activePageClass: "active",
}

let firstCarousel = new Carousel (carouselDefinition);
firstCarousel.pagingGenerator();
firstCarousel.imageSetter(firstCarousel.counter);
firstCarousel.rotator();