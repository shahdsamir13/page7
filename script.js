//show


$(document).ready(function () {

    $("#but1").click(function(){

        $("#info").hide(1000).show(1000).slideup(1000);

    })
    
})

//scrol

let btn2 = document.getElementById('btn2');



        btn2.addEventListener('click', function () {

            window.scrollTo({

                top: 0,
                behavior: 'smooth'
            })

        })


