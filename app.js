window.addEventListener("DOMContentLoaded", () => {
    const btnLink = document.querySelector(".btn__link");
    const btnLinkGo = document.querySelector(".btn__goLink");
    let links;
    let linkArr;
    let link;

    btnLink.addEventListener("click", () => {
        links = prompt("Напишіть посилання");
        linkArr = links.split("");
        let checkLinkForHttp = ['h', 't', 't', 'p'];
        let checkLinkForHttps = ['h', 't', 't', 'p', 's'];
        let resultArr = [];

        for(let i = 0; i > 5; i++){
            resultArr.push(linkArr[i]);
        }

        for(let i = 0; i < resultArr.length; i++){
            if(resultArr === checkLinkForHttp || resultArr === checkLinkForHttps){
                continue
            } else{
                resultArr.unshift("h", "t", "t", "p", "s", ":", "/", "/");
                break
            }
        }


        link = linkArr.join("");

})

    btnLinkGo.addEventListener("click", () => {
            location.href = link;
    })
});