window.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper")
    const btn = document.querySelector(".btn");
    const arrImage = [
        'img/guitar.jpg',
        'img/java.jpg',
        'img/python.png',
        'img/hd.jpg',
        'img/js.png'
    ]


        function getRandomImg(min, max){
           min =  Math.ceil(min);
           max =  Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1) - min)
        }

        getRandomImg();

        function showImage(){
            let arrClone = [...arrImage];
            let images = "";
                let item;
                wrapper.innerHTML = '';
                while(arrClone.length > 0){
                    item = getRandomImg(0, arrClone.length - 1);
                    images = `<img src="${arrClone[item]}"> </img>`
                    arrClone.splice(item, 1);
                }

                wrapper.innerHTML = images;
        }

        btn.addEventListener("click", showImage);

})