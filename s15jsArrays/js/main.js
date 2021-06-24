


let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      }
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      }
    }, {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      }
    }, {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      }
    }, {
      name: "Daze",
      band: "Poets of the Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      }
    }, {
      name: "The Sweet Scape",
      band: "Poets of the Fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      }
    }
  ]
  
/*
    agrupar únicamente los nombres de las bandas, sin repeticiones
    */
 let songNames = songsData =>{
    return songsData.reduce((songList,song)=>{

        //Acum, CurrentValue
         let band = song.band;
        //1 - sognList => []
        //2 - sognList => ["Led Z....'"]
        songList.indexOf(band) == -1 && songList.push(band)
        //["Led Z....'", ""]
        return songList;
     }, [])
 }
let bands = songNames(songsData);
console.log(bands);



/*
  Agrupar las canciones de cada banda
*/
/*
[
    {
         band: "MEt...",
         songs:[
             "",""
         ]
    }
    ]
*/
/*
    [
     "Metall...":["So What","Nothing Else Matters"],"'Led Zep..":["",""],"Poets of the Fall"
    ]
*/
let songsByBand = (bandNames, songsData )=>{
    //sognNames=>  ["Led Zeppelin", "Nirvana", "Metallica", "Poets of the Fall"]
    let songsByBand = []
    bandNames.forEach(bandName => {
        songsByBand[bandName] = songsData.filter( ({ band  }) => band == bandName ).map(songObject=> songObject.name )
    });
    console.log(songsByBand);
}
songsByBand( songNames(songsData), songsData)

/*
  saber cuál es la canción con más likes
  ( nombre de la canción y nombre de la banda)
  */

let topSong = data =>{

    let song = data.reduce( (topSogn,currentSogn) =>{
        if(!topSogn.statistics)
            return currentSogn
        return currentSogn.statistics.likes > topSogn.statistics.likes ? currentSogn : topSogn
    },{})
    console.log(song)
    console.log(`La cancion ${song.name} de la banda ${song.band} es la cancion con mas likes ${song.statistics.likes}`)
} 
topSong(songsData)

/*saber cuál es la canción con más reproducciones
( nombre de la canción y nombre de la banda)
*/
let topSongByReproductions = data =>{

    let song = data.reduce( (topSogn,currentSogn) =>{
        if(!topSogn.statistics)
            return currentSogn
            currentSogn.statistics.reproductions
            var param = "reproductions"
        return currentSogn.statistics[param] > topSogn.statistics["reproductions"] ? currentSogn : topSogn
    },{})
    console.log(song)
    console.log(`La cancion ${song.name} de la banda ${song.band} es la cancion con mas reproduccionesS ${song.statistics.likes}`)
} 
topSongByReproductions(songsData)