


function showIP() {
    document.getElementById('show').innerHTML = "";
    document.getElementById('myTable').innerHTML = "";

    let dv = "IP Address";
    
    let type = 'ip_addresses/';
    create_form(dv);
    
    
    let btn_action = document.getElementById("submitBtn");
    
    btn_action.addEventListener('click',function(){ get_answer(type)});
     
}


function showURL(){
    document.getElementById('show').innerHTML = "";
    document.getElementById('myTable').innerHTML = "";
    let dv = "Domain";
    create_form(dv);
    let type = 'domains/';
    
    let btn_action = document.getElementById("submitBtn");
    
    btn_action.addEventListener('click',function(){ get_answer(type)});

}

