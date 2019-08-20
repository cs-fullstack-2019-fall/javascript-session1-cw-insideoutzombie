// Create a FacebookUser class with one attribute: name.
// In a main function use the array below to create an array of FacebookUser objects and console.log that new array.

class FacebookUser {
  constructor(name) {
    this.name = name;
  }
  displayName() {
    return (this.name);
  }
};


let myArray = ['Marvin ','Ferris' ,'Brynn','Damian','Whitney','Leila','Frances','Keith','Cara','Ainsley','Adrian','Adam','Iona','Akeem','Scarlett','Murphy','Angelica','Georgia','Calvin','Amy','Merrill','Gloria','Charissa','Colorado','Inga','Eden','Carla','Hedley','Thaddeus','Maggie','Kimberly','Ezra','Kane','Candace','Cade','Dante','Scott','Philip','Dieter','Kristen','Nerea','Ivor','Stacey','Tanner','Judith','Emery','Lionel','Josiah','Wesley','Anne','Lane','Kameko','Colleen','Travis','Abdul','Scarlet','Quail','Larissa','Palmer','Irene','Cherokee','Rajah','Maxine','Yen','Bruce','Matthew','Ivan','Georgia','Charissa','Thaddeus','Jack','Dean','Florence','Madonna','Dennis','Zeus','Destiny','Maia','Mara','Florence','Anika','Brenda','Jocelyn','Zia','Kiona','Lars','Molly','Gregory','Felix','William','Dahlia','Gil','Byron','Daria','Nevada','Claudia','Zelenia','Nathan','Judah','Sheila']

// let newArray = new FacebookUser(myArray);


var x = myArray.toString();
// new userName = new FacebookUser("newArray");

let namesList = [];
namesList.push(myArray);

// you never define an object(s)?

function main(displayName) {
  document.getElementById("classwork").innerHTML = [x]
  console.log(displayName);
}

main();
