

function get_answer() {
    value = document.getElementById("input_value");

    let ip_query = value.value;
    // let short_query = "https://www.virustotal.com/api/v3/ip_addresses/"
    // let full_query = short_query.concat(ip_query);
    alert(ip_query);
    let full_query = "./ipinfo.json"
    loadIntoTable(full_query, document.querySelector("table") );
    //alert (full_query);

    

}
async function loadIntoTable(url, table) {
    const tableBody = table.querySelector("tbody");
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'x-apikey': 'dae5573f2ffff52e650cc535bb0c48513dd3ff7db5e75e57f09337f5e4fc2d58'
    //     }
    // };
    const options = "";
    const response = await fetch(url);
    const data = await response.json();
    const values = (data.data.attributes);
    //console.log(values);
    let uptab = document.getElementById("table");


    let rows = ["regional_internet_registry", "network", "country", "as_owner", "reputation"]
    console.log(values[rows[1]])
///some sort of error causing the site to hang

    for (let i = rows.length; i >0; i++) {
        var row =  uptab.insertRow(0);
        var keyCell = row.insertCell(0);
        var valCell = row.insertCell(1);
        //warn("made it here");
        //keyCell.innerHTML = rows[i];
        //valCell.innerHTML = values[rows[i]];
        console.log(rows[i], values[rows[i]])
    }








}
