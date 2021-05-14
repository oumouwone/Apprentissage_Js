/* Ce programme a pour but d'afficher l'âge de manière aléatoire 
puis de renvoyer des messages en fonction de la tranche d'âge */

//Déclararion de la variable age
let  age = ( Math.random() * 101 );


if (age >=0 && age <=2 ){
    console.log("Bébé");

}else if (age >=2 && age <=6){
    console.log("Bas âge");

}else if (age >=7 && age <=11){
    console.log("Enfant");

}else if (age >=12 && age <=17){
    console.log("Adolescent");

}else if (age >=18 && age <=40){
    console.log("Adulte");

}else if (age >=40 && age <= 60){
    console.log("Deuxième âge");

}else if (age >=60 && age <=100){
    console.log("Troisième âge");

}else{
    console.log("Cet âge n'existe pas");
}


// refaire le programme avec switch
/*
switch (age) {
    case 0:
    case 1: 
    case 2:
        console.log("Bébé");
        break;
    case 2:
    case 3:
    case 4: 
    case 5: 
    case 6:
        console.log("Bas âge");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("Enfant");
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("Adolescent");
        break;
    case 18:
    case 40:
        console.log("Adulte");
        break;
    case 40:
    case 60:
        console.log("Deuxième âge");
        break;
    case 60:
    case 100:
        console.log("Troisième âge");
        break;
    
    default:
        console.log("Cet âge n'existe pas");
    
}*/