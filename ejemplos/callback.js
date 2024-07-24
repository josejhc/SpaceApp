function uno (){
    console.log('uno');
    setTimeout(dos,2000);
}

function dos (){
    console.log('dos')
    setTimeout(tres,2000);
}

function tres (){
    console.log('tres');
    setTimeout(cuatro,2000);
}

function cuatro (){
    console.log('cuatro')
    setTimeout(cinco,2000);
}
function cinco (){
    console.log('cinco');
    
}


setTimeout(uno,5000)
// dos()