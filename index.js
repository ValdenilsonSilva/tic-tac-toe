let jogada='<i class="fa fa-home" aria-hidden="true"></i>';
let elements = document.querySelectorAll('.jogada');
console.log(elements);
elements.forEach((item) => {
    item.addEventListener('click', 
        function(e) {
            item.innerHTML=jogada;
            console.log ("element::this", this);


        }
    )
});