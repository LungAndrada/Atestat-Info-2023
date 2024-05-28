const andra = document.getElementsByClassName('butonase')
const body = document;
const menu = document.getElementsByClassName('menu');
const submenu = document.getElementsByClassName('submenu');
const invarte = document.getElementsByClassName('invarte');
var b = 0;
function active(val, e){
    console.log('ati apasat: '+val);
    b = val;
        var a = 1;
        document.querySelectorAll('.submenu').forEach(item => {
            if(item.classList.contains('show') && item !==submenu[val])
                 a =  0;
        
        })
        if(a){
            invarte[0].classList.toggle('show');
            menu[0].classList.toggle('flip');
            submenu[val].classList.toggle('show');
            andra[val].classList.add('citit')  
        }
        else alert('inchide meniul!')
}

invarte[0].addEventListener('click', (e) =>{
    document.querySelectorAll('.submenu').forEach(item => {
        item.classList.remove('show');
    
    })
    invarte[0].classList.toggle('show');
    menu[0].classList.toggle('flip');
});

menu[0].addEventListener('click', (e) =>{
    if(e.target == andra[0]){
        active(0, e);
    }
    else if(e.target == andra[1]){
        active(1,e);
    }
    else if(e.target == andra[2]){
        active(2,e);
    }
    else if(e.target == andra[3]){
        active(3,e);
    }
    else if(e.target == andra[4]){
        active(4,e);
    }
});