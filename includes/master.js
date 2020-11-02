// Quand on click sur le bouton mon compte
$("#account").click(function () {
    // On charge la page profile.html dans la div contenu
    $("#mainContent").load('includes/profile.html', function () {
        // on injecte les variables de pseudo, mail, si mail verifié et l'url de l'avatar
        $('#profilePseudo').html("Pseudo actuel : <span class='float-right h2'>"+firebase.auth().currentUser.displayName+"</span>");
        $('#profileEmail').html("Email actuel : <span class='float-right h2'>"+firebase.auth().currentUser.email+"</span>");
        if (firebase.auth().currentUser.emailVerified === false) {
            $('#profileEmailVerified').html("<span class='float-right text-warning'>Adresse mail non vérifiée.</span>");
        } else {
            $('#profileEmailVerified').html("<span class='float-right text-success'>Adresse mail vérifiée.</span>");
        }
        $('#imgProfile').attr('src',firebase.auth().currentUser.photoURL);

        // On ajoute le button de deconnection
        $('#Deco').append("<i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Déconnexion");
    });
});

//Quand on clic sur le lien Accueil de la navBar
$('.home').click(function() {
    //On charge la page profilView dans la div contenu, il s'agit de la page d'accueil
    $("#mainContent").load('includes/profileView.html')
});

//Quand on clic sur le lien Avant tout de la navBar
$('.task').click(function() {
    //On charge la page mainView dans la div contenu
    $("#mainContent").load('includes/taskView.html')
});

//Quand on clic sur le lien logiciel des chèques de la navBar
$('.ldc').click(function() {
    //On charge la page mainView dans la div contenu
    $("#mainContent").load('includes/ldcView.html')
});

//Quand on clic sur le lien gestion des documents de la navBar
$('.eLearn').click(function() {
    //On charge la page mainView dans la div contenu
    $("#mainContent").load('includes/eLearnView.html')
});

//Quand on clic sur le lien faq de la navBar
$('.faq').click(function() {
    //On charge la page mainView dans la div contenu
    $("#mainContent").load('includes/faqView.html')
});
$('#mainContent').hide();
$('#signinDiv').show();