//quado a página estiver pronta paara ser manipulada
$(document).ready(function () {

    //quando clicar no menu, adiciona ou remove 'nav-toggle', abrindo ou fechando o menu
    $('#menu').click(function () {
        /*Classe adicionada agora */
        $('.navbar').toggleClass('nav-toggle');
    });

    //em JS puro
    /*function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("nav-toggle ");
}*/

    //Quando a janela estiver rolando(scroll), não é possível ter o menu aberto
    $(window).on('scroll load', function () {
        $('.navbar').removeClass('nav-toggle');

        //se a altura da tela > 60, coloca o botão de voltar ao topo
        if (window.scrollY > 60) { // 60px == 100%
            document.querySelector('#scroll-top')
            .classList.add('active');
        } else {
            document.querySelector('#scroll-top')
            .classList.remove('active');
        }

        // a medida que a página vai sendo rolada, para cada seção que vai sendo
        // exibida, vai sendo mostrado a opção no menu
        $('section').each(function () {
            let height = $(this).height(); //retorna a altura da sessão
            let offset = $(this).offset().top - 200; //retorna a posição do elemento -200
            let top = $(window).scrollTop(); //retorna a posição vertical da barra de rolagem
            let id = $(this).attr('id'); // retorna os ids das sessões

            //se a posição vertical da barra de rolagem for maior que  offset e 
            // a posição vertical da barra de rolagem for menor que offset + altura
            // é marcada no menu a sessão que está sendo mostrada
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});

//mostra se o usuário está na guia da página, caso ele saia,
//mostra a mensagem e a imagem 
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | AleskaDev";
            $("#favicon").attr("href", "js/aleska.jpeg");
        } else {
            document.title = "Come back";
            $("#favicon").attr("href", "js/favhand.jpg");
        }
    });


// <!-- Efeito de Escrever no inicio da página -->
// cria um array de objetos, com as frases a serem escritas,
// se vai durar sempre, a velocidade da escrita, o a velocidade de volta da escrita
// e o atraso para escrever

var typed = new Typed(".escrever-texto", {
    strings: ["Web developer", "Backend", "Frontend"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// <!-- Cria o efeito 3D nas imagens -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
})

function submitForm() {
    // Get form data
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var phone = document.getElementsByName('phone')[0].value;
    var message = document.getElementsByName('message')[0].value;

    // Assemble data to send to the server
    var data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // Send data to the server (you need to implement this on the server)
    // Here, you would make a request to an endpoint on the server that processes the form
    // This can be done using XMLHttpRequest, fetch, or a library like Axios.
    // Example (using fetch):
    fetch('/path-to-your-server-processing-script', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the server response, e.g., display a success message
        console.log('Server response:', data);
    })
    .catch(error => {
        // Handle errors, e.g., display an error message
        console.error('Error sending data:', error);
    });
}