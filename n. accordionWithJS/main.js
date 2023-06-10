let btnColps = document.getElementById('collapse'),
    question = document.getElementsByClassName('question'),
    heading = document.getElementsByClassName('heading'),
    answer = document.getElementsByClassName('body');

for(var i=0; i<heading.length; i++) {
    heading[i].addEventListener('click', function(e) {
        for(var j=0; j<question.length; j++) {
            question[j].classList.remove('active');
            e.target.parentNode.classList.add('active');
            activateBody();
        }
    });
}

function activateBody() {
    for(var x=0; x < answer.length; x++) {
        answer[x].style.display = 'none';
    }

    let activePanel = document.querySelector('.question.active .body');
    activePanel.style.display="block";
}

activateBody();

btnColps.addEventListener('click', function() {
    for(var i=0; i<answer.length; i++) {
        answer[i].style.display = 'none';
    }
});

