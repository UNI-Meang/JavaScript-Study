let modal = false;

document.querySelector('.btn1').addEventListener('click', function(){
    if (modal == true){
        document.querySelector('.modal-container').style.display = 'none';
        modal = false;
    }
});

document.querySelector('.btn2').addEventListener('click', function(){
    if (modal == false){
        document.querySelector('.modal-container').style.display = 'flex';
        modal = true;
    }
});

