


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
    agrupar ├║nicamente los nombres de las bandas, sin repeticiones
    */
 let songNames = songsData =>{
    return songsData.reduce((songList,{ band })=>{ 
        //add a new element if it does not already exit on the list
        songList.indexOf(band) == -1 && songList.push(band)
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
let getSongsByBand = (bandNames, songsData )=>{
    let songsByBand = []
    bandNames.forEach(bandName => {
        //filter elements by bands and then add the bands names to the array
        //songsByBand[bandName] = songsData.filter( ({ band  }) => band == bandName ).map(songObject=> songObject.name )

        //We can user reduce instead of filter map
        songsByBand[bandName] = songsData.reduce( (list, {band,name} )=>{
            if(band === bandName )
                list.push(name)
            return list
    },[])
    });

    

    return songsByBand; 
}
let songsByBand = getSongsByBand( songNames(songsData), songsData)
console.log(songsByBand)
Object.keys(songsByBand).forEach(({key,value}, index, self)=>{
  //(value, index, self)
  //(key,index)
  console.log(`hola`)
  //console.log(`index: ${index}: ${this[key]}`)
  console.log(key, index, self)
  console.log(value, index, self)
  console.log(songsByBand[value])
},songsByBand);
/*
  saber cu├íl es la canci├│n con m├ís likes
  ( nombre de la canci├│n y nombre de la banda)
*/

/*saber cu├íl es la canci├│n con m├ís reproducciones
( nombre de la canci├│n y nombre de la banda)
*/
//Get Top song
//data : Array of songs
//filterBy: filter param to get the top song e.g. "likes", "Reproductions"
let topSong = (songs, filterBy) =>songs.reduce( (topSogn,currentSogn) => currentSogn.statistics[filterBy] > topSogn.statistics[filterBy] ? currentSogn : topSogn)
let printTopSong = (song,filterBy) => console.log(`La cancion ${song.name} de la banda ${song.band} es la cancion con mas ${filterBy} ${song.statistics.likes}`)
//printTopSong
//song : The current song object
//filterBy: filter param from it was filtered. "likes", "Reproductions"
printTopSong (topSong(songsData,'likes'))
printTopSong (topSong(songsData,'reproductions'))



//Ignore
//let topSognPipe = (...functions) => params => functions.reduce( (functionAccum, fn) => fn(functionAccum) ,input)
//let topSognPipe = (...functions) => input => functions(input);
//topSognPipe(topSong,topSong)

//topSognPipe([songsData,'likes'])