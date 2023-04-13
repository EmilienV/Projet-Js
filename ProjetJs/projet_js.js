const collection = [
  {
    name: "The power of the dog",
    director: "Jane Campion",
    releaseYear: 2021,
    genre: ["Drame"],
    picture:
      "https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    cast: ["Benedict Cumberbatch", "Kirsten Dunst", "Jesse Plemons"],
  },
  {
    name: "Parasite",
    director: "Bong Joon-ho",
    releaseYear: 2019,
    genre: ["Thriller"],
    picture:
      "https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg",
    cast: ["Song Kang-ho", "Jang Hye-jin", "Choi Woo-shik", "Park So-dam"],
  },
  {
    name: "Twelve Years a Slave",
    director: "Steve McQueen",
    releaseYear: 2013,
    genre: ["Drame"],
    picture:
      "https://fr.web.img6.acsta.net/pictures/210/415/21041568_2013091910085449.jpg",
    cast: [
      "Chiwetel Ejiofor",
      "Michael Fassbender",
      "Lupita Nyong'o",
      "Sarah Paulson",
    ],
  },
  {
    name: "Nomadland",
    director: "Chloé Zhao",
    releaseYear: 2020,
    genre: ["Drame"],
    picture:
      "https://kbimages1-a.akamaihd.net/67990fcd-f6d1-4ebb-87b6-730f939a39dd/1200/1200/False/nomadland-3.jpg",
    cast: [
      "Frances McDormand",
      "David Strathairn",
      "Linda May",
      "Charlene Swankie",
    ],
  },
  {
    name: "Gravity",
    director: "Alfonso Cuarón",
    releaseYear: 2013,
    genre: ["Drame"],
    picture:
      "https://fr.web.img6.acsta.net/pictures/210/232/21023233_20130729173134181.jpg",
    cast: ["Sandra Bullock", "George Clooney", "Ed Harris", "Orto Ignatiussen"],
  },
  {
    name: "Mad Max: Fury Road",
    director: "George Miller",
    releaseYear: 2015,
    genre: ["Science-fiction"],
    picture: "images/mad_max_fury_road.jpg",
    cast: [
      "Tom Hardy",
      "Charlize Theron",
      "Hugh Keays-Byrne",
      "Nicholas Hoult",
    ],
  },
  {
    name: "Le Seigneur des Anneaux - Le Retour du roi ",
    director: "Peter Jackson",
    releaseYear: 2003,
    genre: ["Fantasy"],
    picture: "images/le_retour_du_roi.jpeg",
    cast: ["Elijah Wood ", "Sean Astin", "Viggo Mortensen", "Sir Ian McKellen"],
  },
  {
    name: "Moonlight",
    director: "Barry Jenkins",
    releaseYear: 2016,
    genre: ["Drame"],
    picture:
      "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg",
    cast: [
      "Chiron Harris",
      "Alex R. Hibbert",
      "Ashton Sanders",
      "Trevante Rhodes",
    ],
  },
  {
    name: "Birdman",
    director: "Alejandro González Iñárritu",
    releaseYear: 2014,
    genre: ["Comédie noire"],
    picture: "https://fr.web.img4.acsta.net/pictures/14/12/30/10/14/511837.jpg",
    cast: [
      "Michael Keaton",
      "Edward Norton",
      "Emma Stone",
      "Zach Galifianakis",
    ],
  },
  {
    name: "La La Land",
    director: "Damien Chazelle",
    releaseYear: 2016,
    genre: ["Musical"],
    picture:
      "https://www.lafilmotheque.fr/v3/content/uploads/2023/01/la_la_land-262021831-large-480x640.jpg",
    cast: ["Ryan Gosling", "Emma Stone ", "John Legend", "J. K. Simmons"],
  },
  ,
];

let article = document.querySelector("article");

collection.forEach((i) => {
  let section = document.createElement("section");
  section.innerHTML = `<img src = ${i.picture}> <span class="genre">${i.genre}</span> <span class="name"> ${i.name}</span> <span class="director_year"> ${i.director}, ${i.releaseYear}</span> <span class="cast">Casting: ${i.cast}</span>`;
  article.appendChild(section);
  section.setAttribute("class", i.name.replaceAll(" ", "_"));
});
