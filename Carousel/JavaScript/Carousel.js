function Carousel (carouselDefinition){
    
    {
        this.default = false;
        this.counter = 0;
        this.interval = 0;
        if (carouselDefinition.imageSources != undefined && carouselDefinition.imageSources.length>0){
            this.imageSources = carouselDefinition.imageSources;
        }
        else {
            console.error("The Carousel component cannot be displayed as there are no images defined for it.")
            return;
        }
        if (carouselDefinition.imageLocation != undefined){
            this.imageLocation = carouselDefinition.imageLocation;
        }
        else {
            this.default = true;
            let CarouselDOMNode = document.createElement("div")
            CarouselDOMNode.innerHTML = `<div 
                                            style="display:flex; flex-wrap: wrap; align-items: center; 
                                            justify-content: center; margin:50px; width:400px; height:530px; 
                                            background-color:#ffffff; border: 1px solid #ffffff;">
                                            
                                            <div>
                                                <div 
                                                    style="display:flex; align-items: center; 
                                                    justify-content: center; width:400px; height:430px;">
    
                                                    <img id="carouselImage"/>
                                                </div>
                                            </div>
                                            <nav id="points" 
                                                style="display:flex; align-items: center; 
                                                justify-content: center; width:400px; height:70px;">
    
                                            </nav>
                                        </div>`
            document.body.appendChild(CarouselDOMNode);
            this.imageLocation = document.getElementById("carouselImage");
        }
        if(carouselDefinition.pagingLocation != undefined){
            this.pagingLocation = carouselDefinition.pagingLocation;
        }
        else if (this.default === true){
            this.pagingLocation = document.getElementById("points");
        }
        if (carouselDefinition.pagingClass != undefined){
            this.pagingClass = carouselDefinition.pagingClass;
        }
        else {
            this.pagingClass = "page";
        }
        if (carouselDefinition.activePageClass != undefined){
            this.activePageClass = carouselDefinition.activePageClass;
        }
        if (carouselDefinition.rotationInterval !=undefined){
            this.rotationInterval = carouselDefinition.rotationInterval;
        }
        else {
            this.rotationInterval = 4000;
        }
    }

    this.imageSetter = function(clickedPage){
        this.counter = clickedPage;
        this.imageLocation.setAttribute("src",this.imageSources[this.counter]);
        if (this.pagingLocation != undefined){
            let pages = this.pagingLocation.getElementsByClassName(this.pagingClass);
            if (this.activePageClass != undefined){
                for(page of pages){
                    page.classList.remove(this.activePageClass);
                }
                pages[this.counter].classList.add(this.activePageClass);
            }
            else if (this.default === true){
                for(page of pages){
                    page.setAttribute("style","");
                }
                pages[this.counter].setAttribute("style",`background-color:#118833; border:1px solid #118833;`);
            }
    
        }
        this.counter++;
    }

    this.imageRotator = function (){
        if (this.counter === this.imageSources.length){
            this.counter = 0;
        }
        this.imageSetter(this.counter);
    }

    this.rotator =  function(){
        this.interval = setInterval(this.imageRotator.bind(this), this.rotationInterval);
    }
    
    this.clickedImageSetter = (clickedPage) => {
        this.imageSetter(clickedPage);
        clearInterval(this.interval);
        this.rotator();
    }

    this.pagingGenerator = function (){
        for (let i = 0; i < this.imageSources.length; i++){
            let newPage = document.createElement("div");
            newPage.classList.add(this.pagingClass);
            if (this.default === true){
                newPage.setAttribute("style","background-color:#444444; border:1px solid #444444; border-radius:100%; width: 10px; height:10px; margin:5px;");
            }
            newPage.addEventListener("click", this.clickedImageSetter.bind(this,i));
            this.pagingLocation.append(newPage);
        }
    }
    
}