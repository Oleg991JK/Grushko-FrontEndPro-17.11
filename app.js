window.addEventListener("DOMContentLoaded", () => {
    const inputId  = document.querySelector(".inputId");
    const postButton = document.querySelector(".btn__post");
    const commentButton = document.querySelector(".btn__comments");
    const titlePost = document.querySelector(".postTitle");
    const bodyPost = document.querySelector(".bodyPost");
    const authorComment = document.querySelector(".author__comments");
    const textComments = document.querySelector(".text__comments");

    postButton.addEventListener("click" , getPosts);
    commentButton.addEventListener("click", getComments);

    function getPosts() {

        if(inputId.value >= 1 && inputId.value <= 100){
            fetch(`https://jsonplaceholder.typicode.com/posts/${inputId.value}`)
            .then(res => res.json())
            .then(data => {
                titlePost.innerHTML = data.title;
                bodyPost.innerHTML = data.body;
            })
        }
        };

    function getComments() {
        if(inputId.value >= 1 && inputId.value <= 100){
            fetch(`https://jsonplaceholder.typicode.com/comments/${inputId.value}`)
            .then(res => res.json())
            .then(data => {
                authorComment.innerHTML = data.name;
                textComments.innerHTML = data.body;
            });
        }
    }


});
     