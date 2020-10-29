//Quand on clic sur le lien Accueil de la navBar
$('.home').click(function() {
    //On charge la page mainView dans la div contenu
    $("#mainContent").load('includes/mainView.html')
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
$('.ged').click(function() {
    //On charge la page mainView dans la div contenu
    $("#mainContent").load('includes/gedView.html')
});

//Quand on clic sur le lien faq de la navBar
$('.faq').click(function() {
    //On charge la page mainView dans la div contenu
    $("#mainContent").load('includes/faqView.html')
});