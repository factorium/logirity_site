
db.collection("agendamentos").doc("10192020").onSnapshot(function(doc){
     
    //TRAZENDO DADOS DO BANCO (AGENDAMENTO)
    var placa = doc.data().agendados[0].numero_placa;
    var motor = doc.data().agendados[0].motorista_alocado;
    var empresa = doc.data().agendados[0].empresa;
    var checkin = doc.data().agendados[0].checkin;
    var checkout = doc.data().agendados[0].checkout;
    var tipo_truck = doc.data().agendados[0].tipo_truck;


    //MOSTRANDO NO HTML
     document.getElementById("placa").innerHTML =  placa;
     document.getElementById("motor").innerHTML =  motor;
     document.getElementById("empresa").innerHTML =  empresa;
     document.getElementById("checkin").innerHTML =  checkin.toDate();
     document.getElementById("checkout").innerHTML =  checkout.toDate();
     document.getElementById("tipo_truck").innerHTML =  tipo_truck;


     
    });

    db.collection("baias").doc("status").onSnapshot(function(doc){
     
        //TRAZENDO DADOS DO BANCO (BAIAS)
        var atualizado = doc.data().atualizado;
        var distance = doc.data().distance;
        var name = doc.data().name;
        var timer = doc.data().timer;
        var timerStatus = doc.data().timerStatus;
        var bayStatus = doc.data().bayStatus;
        var x;
    
        //MOSTRANDO NO HTML
            //document.getElementById("atualizado").innerHTML =  atualizado;
            document.getElementById("distance").innerHTML =  distance + " cm";
            document.getElementById("name").innerHTML =  name;
            document.getElementById("timer").innerHTML =  timer + " segundos";
            
        if(bayStatus == true){
            document.getElementById("bayStatus").innerHTML =  "Caminhão está na baia";
            console.log(x)
        }
         else{
             if
             ((bayStatus == false)&&(timer==0)){
                document.getElementById("bayStatus").innerHTML =  "Caminhão ainda não chegou na baia";
                console.log(x)
             }
             else{
                document.getElementById("bayStatus").innerHTML =  "Caminhão já saiu da baia";
             } 
         }


         if(timerStatus == "NOK"){
            document.getElementById("timerStatus").innerHTML =  "<b style='color:#f56d68;'>Caminhão está com entrega atrasada!</b>";
         }
         else if( timerStatus =="OK"){
            document.getElementById("timerStatus").innerHTML =  "<b style='color:#78f58d;'>Entrega deste caminhão começou há pouco!</b>";
         }
         else{
            document.getElementById("timerStatus").innerHTML =  "<span style='color:#f5e768'>Entrega deste caminhão está no tempo estipulado!</span>";
         }
         
         
                      
        });
