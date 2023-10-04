/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kim Sorensen",
    photo: "w02-task/images/me.png",
    favoriteFoods: ["cucumbers", "potatoes", "squash", "potato chips", "carob", "licorice"],
    hobbies: ["hand spinning", "weaving", "dyeing", "rug hooking", "gardening", "cooking"],
    placesLived: [],
    };

    myProfile.placesLived.push(
        {
            place: "Rexburg, ID",
            length: "2 years"
        },
        {
            place: "Blackfood, ID",
            length: "1 year"
        },
        {
            place: "Reno, NV",
            length: "1 year"
        },
        {
            place: "Granger, UT",
            length: "3 years"
        },
        {
            place: "Aberdeen, ID",
            length: "12 years"
        },
        {
            place: "Rexburg, ID",
            length: "2 years"
        },
        {
            place: "Provo, UT",
            length: "3 years"
        },
        {
            place: "Orem, UT",
            length: "2 years"
        },
        {
            place: "American Fork, UT",
            length: "33 years"
        },
    );

    document.querySelector("#name").textContent = myProfile.name;

    

    const imageElement = document.querySelector('#photo');
    imageElement.setAttribute('src', myProfile.photo);
    imageElement.setAttribute('alt', myProfile.name);





    myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
    })

    myProfile.hobbies.forEach(hobby => {
        let li = document.createElement("li");
        li.textContent = hobby;
        document.querySelector("#hobbies").appendChild(li);
        })


    myProfile.placesLived.forEach(place => {
        let dt = document.createElement("dt");
        dt.textContent = place.place;
        document.querySelector("#places-lived").appendChild(dt);
        let dd = document.createElement("dd");
        dd.textContent = place.length;
        document.querySelector("#places-lived").appendChild(dd);
        
        })








/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


