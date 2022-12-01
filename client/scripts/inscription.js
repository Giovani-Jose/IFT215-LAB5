function soumettreInscr(){
    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let age = document.getElementById("age").value;
    let adresse = document.getElementById("adresse").value;
    let pays = document.getElementById("pays").value;
    let courriel = document.getElementById("courriel").value;
    let mdp = document.getElementById("mot-de-passe").value;

    $.ajax({
        url: "/clients/",
        method:"POST",
        data: JSON.stringify({"prenom": prenom, "nom": nom, "age":age, "adresse":adresse, "pays": pays, "courriel": courriel, "mdp": mdp}),
        contentType: "application/json",
        success: function(result) {
            console.log("success");
            console.log(result);
        },
        error: function(result) {
            document.getElementById("msg-erreur").innerHTML = "Erreur :" + '\n' + result.responseText;
            document.getElementById("error-alert").setAttribute("style","display:block");

            console.log(result.responseText);
            console.log(result);
        }
    });
}

/**
 * Fonction qui initie le lancement des fonctions de ce script. Appelée par "chargerSousContenu" dans navigation.js.
 * Remplace le DOMContentLoaded qui est lancé bien avant que le contenu associé à ce script ne soit dans l'écran.
 * @returns {Promise<void>}
 */
async function chargerinscription (){

}

