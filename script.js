


function Cutout(){

    const cutout = document.getElementById("cutout");
    const textarea = document.getElementById("textarea");
    let text = textarea.value;
    let cut = cutout.value;

    let splitted = text.split(cut);
    let nomore = splitted.join("")

    const repwith = document.getElementById("cutout2").value;

    if(repwith !== ""){
        document.getElementById("textarea").value = text.replaceAll(cut,repwith);
    }else{
        document.getElementById("textarea").value = nomore;
    }


};