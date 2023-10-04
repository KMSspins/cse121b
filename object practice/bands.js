

let bandInfo = {
  name: "Carpenters",
  nationality: "American",
  genre: "Soft Rock",
  members: "2",
  formed: "1965";
  split: "1983";
  let albums = {
  "Offering" : {"year" : "1972"},
   "Ticket to Ride" : {"year" : "1976"},
   "Close to You" : {"year" : "1979"},
   "A Song for You" : {"year" : "1980"},
  }
}  
  bandInfoBiography() {
    console.log("The band the $(this.name) was formed in $(this.formed) and had $(this.members).  They played $(this.genre) music and broke up in $(this.split) when Karen passed away.  Their first album was $(album[0]) which was released in $(album.year[0]). ")
  
  };