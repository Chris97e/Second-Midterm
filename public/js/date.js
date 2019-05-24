function paginaCargada() {
    
    var horas = document.querySelector('.hora');
    var fecha = document.querySelector('.fecha');
    var numero = document.querySelector('.numeroVisitado');
    
    //fecha
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1;
    var yyyy = hoy.getFullYear();
    dd = addZero(dd);
    mm = addZero(mm);

    
    
    
    fecha.innerHTML = dd + '/' + mm + '/' + yyyy;
    setTimeout(mueveReloj,1000);
    
    //añadir un cero
    function addZero(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
    
    function mostrarhora(){ 
        var f=new Date();
        cad=f.getHours()+":"+f.getMinutes()+":"+f.getSeconds(); 
        window.status =cad;
        setTimeout("mostrarhora()",1000); 
    }

    //reloj
    function mueveReloj(){ 
        momentoActual = new Date() 
        hora = momentoActual.getHours() 
        minuto = momentoActual.getMinutes() 
        segundo = momentoActual.getSeconds() 

        horaImprimible = hora + ":" + minuto + ":" + segundo 

        horas.innerHTML = horaImprimible;
        setTimeout(mueveReloj,1000)
    }

    
    
    
}
window.addEventListener('load', paginaCargada);