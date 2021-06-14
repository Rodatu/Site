/*---------------------------------- Text ------------------------------------------*/


document.querySelector("#text").addEventListener("click", () =>
    document.querySelector("#text-pop-up").classList.toggle("show-text-pop-up")
);

document.querySelector("#text-pop-up p").addEventListener("click", () =>
    document.querySelector("#text-pop-up").classList.toggle("show-text-pop-up")
);

/*---------------------------------- Youtube video ------------------------------------------*/


document.querySelector("#video").addEventListener("click", () =>
    document.querySelector("#video-you").classList.toggle("show-video")
);

document.querySelector("#video-you p.fechar").addEventListener("click", () =>
    document.querySelector("#video-you").classList.toggle("show-video")
);


/*------------------------------------------ Map ------------------------------------------------*/

document.querySelector("#map").addEventListener("click", () =>
    document.querySelector(".map-wrapper").classList.toggle("show-map-wrapper")
);

document.querySelector(".map-wrapper p.fechar-map").addEventListener("click", () =>
    document.querySelector(".map-wrapper").classList.toggle("show-map-wrapper")
);

/*------------------------------------------- Rio -----------------------------------------------*/

document.querySelector("#image-francisco").addEventListener("click", () =>
    document.querySelector(".rio-wrapper").classList.toggle("show-rio-wrapper")
);

document.querySelector(".rio-wrapper p.fechar-rio").addEventListener("click", () =>
    document.querySelector(".rio-wrapper").classList.toggle("show-rio-wrapper")
);

/*-------------------------------------------- Audio -------------------------------------------------------*/

document.querySelector("#audio").addEventListener("click", () =>
    document.querySelector(".audio-wrapper").classList.toggle("show-audio-wrapper")
);

document.querySelector(".audio-wrapper p.fechar-audio").addEventListener("click", () =>
    document.querySelector(".audio-wrapper").classList.toggle("show-audio-wrapper")
);

/*------------------------------------------- News ----------------------------------------------------------------*/

document.querySelector("#news").addEventListener("click", () =>
    document.querySelector(".news").classList.toggle("show-news")
);

document.querySelector(".news p.fechar-news").addEventListener("click", () =>
    document.querySelector(".news").classList.toggle("show-news")
);

/*------------------------------------------- Fish ----------------------------------------------------------------------*/

document.querySelector("#image-fish").addEventListener("click", () =>
    document.querySelector(".fish").classList.toggle("show-fish")
);

document.querySelector(".fish p.fechar-fish").addEventListener("click", () =>
    document.querySelector(".fish").classList.toggle("show-fish")
);

/*-------------------------------------------- Pega boi ------------------------------------------------------------------------*/

document.querySelector("#pega-boi").addEventListener("click", () =>
    document.querySelector(".pega-boi").classList.toggle("show-pega-boi")
);

document.querySelector(".pega-boi p.fechar-boi").addEventListener("click", () =>
    document.querySelector(".pega-boi").classList.toggle("show-pega-boi")
);

