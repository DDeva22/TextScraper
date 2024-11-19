const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const { v6: uuidv6} = require("uuid");


const fs = require("fs");

const express = require("express");
const app = express()
const port = process.env.PORT || 3000

// const writeStream = fs.createWriteStream("LSB Bible.csv");




const connection = require("./DATABASE/server.js");


const timer = ms => new Promise(res => setTimeout(res, ms));




bibleData = [
  {
    Book: "Genesis",
    Chapters: 50
  },
  {
    Book: "Exodus",
    Chapters: 40
  },
  {
    Book: "Leviticus",
    Chapters: 27
  },
  {
    Book: "Numbers",
    Chapters: 36
  },
  {
    Book: "Deuteronomy",
    Chapters: 34
  },
  {
    Book: "Joshua",
    Chapters: 24
  },
  {
    Book: "Judges",
    Chapters: 21
  },
  {
    Book: "Ruth",
    Chapters: 4
  },
  {
    Book: "Samuel",
    Chapters: 31
  },
  {
    Book: "2+Samuel",
    Chapters: 24
  },
  {
    Book: "Kings",
    Chapters: 22
  },
  {
    Book: "2+Kings",
    Chapters: 25
  },
  {
    Book: "Chronicles",
    Chapters: 29
  },
  {
    Book: "2+Chronicles",
    Chapters: 36
  },
  {
    Book: "Ezra",
    Chapters: 10
  },
  {
    Book: "Nehemiah",
    Chapters: 13
  },
  {
    Book: "Esther",
    Chapters: 10
  },
  {
    Book: "Job",
    Chapters: 42
  },
  {
    Book: "Psalms",
    Chapters: 150
  },
  {
    Book: "Proverbs",
    Chapters: 31
  },
  {
    Book: "Ecclesiastes",
    Chapters: 12
  },
  {
    Book: "Song+of+Songs",
    Chapters: 8
  },
  {
    Book: "Isaiah",
    Chapters: 66
  },
  {
    Book: "Jeremiah",
    Chapters: 52
  },
  {
    Book: "Lamentations",
    Chapters: 5
  },
  {
    Book: "Ezekiel",
    Chapters: 48
  },
  {
    Book: "Daniel",
    Chapters: 12
  },
  {
    Book: "Hosea",
    Chapters: 14
  },
  {
    Book: "Joel",
    Chapters: 3
  },
  {
    Book: "Amos",
    Chapters: 9
  },
  {
    Book: "Obadiah",
    Chapters: 1
  },
  {
    Book: "Jonah",
    Chapters: 4
  },
  {
    Book: "Micah",
    Chapters: 7
  },
  {
    Book: "Nahum",
    Chapters: 3
  },
  {
    Book: "Habakkuk",
    Chapters: 3
  },
  {
    Book: "Zephaniah",
    Chapters: 3
  },
  {
    Book: "Haggai",
    Chapters: 2
  },
  {
    Book: "Zechariah",
    Chapters: 14
  },
  {
    Book: "Malachai",
    Chapters: 4
  },
  {
    Book: "Matthew",
    Chapters: 28
  },
  {
    Book: "Mark",
    Chapters: 16
  },
  {
    Book: "Luke",
    Chapters: 24
  },
  {
    Book: "John",
    Chapters: 21
  },
  {
    Book: "Acts",
    Chapters: 28
  },
  {
    Book: "Romans",
    Chapters: 16
  },
  {
    Book: "Corinthians",
    Chapters: 16
  },
  {
    Book: "2+Corinthians",
    Chapters: 13
  },
  {
    Book: "Galatians",
    Chapters: 6
  },
  {
    Book: "Ephesians",
    Chapters: 6
  },
  {
    Book: "Philippians",
    Chapters: 4
  },
  {
    Book: "Colossians",
    Chapters: 4
  },
  {
    Book: "Thessalonians",
    Chapters: 5
  },
  {
    Book: "2+Thessalonians",
    Chapters: 3
  },
  {
    Book: "Timothy",
    Chapters: 6
  },
  {
    Book: "2+Timothy",
    Chapters: 4
  },
  {
    Book: "Titus",
    Chapters: 3
  },
  {
    Book: "Philemon",
    Chapters: 1
  },
  {
    Book: "Hebrews",
    Chapters: 13
  },
  {
    Book: "James",
    Chapters: 5
  },
  {
    Book: "Peter",
    Chapters: 5
  },
  {
    Book: "2+Peter",
    Chapters: 3
  },
  {
    Book: "John",
    Chapters: 5
  },
  {
    Book: "2+John",
    Chapters: 1
  },
  {
    Book: "3+John",
    Chapters: 1
  },
  {
    Book: "Jude",
    Chapters: 1
  },
  {
    Book: "Revelation",
    Chapters: 22
  }
]

bibleDataTEST = [
  {
    Book: "Matthew",
    Chapters: 28
  },
  {
    Book: "Mark",
    Chapters: 16
  },
  {
    Book: "Luke",
    Chapters: 24
  },
  {
    Book: "John",
    Chapters: 21
  },
  {
    Book: "Acts",
    Chapters: 28
  }
]
bibleDataTEST1 = [
  
  {
    Book: "Mark",
    Chapters: 1
  }
]
bibleDataTEST1.forEach( async function (arrayItem){
  await timer(5000);
  let x = arrayItem.Book;
  let y = arrayItem.Chapters;
  let i = 1;
 

  //switch back to i <= y when done
    while( i <= y){
      await timer(3000);
      let chapterNumber = i;
      agentURL = `https://read.lsbible.org/?q=${x}+${i}`;
      console.log(`                                                       Book:${x} Chapter:${i}`)


      axios.get(agentURL)
      .then(res => {
        const $ = cheerio.load(res.data)
        $(".verse").each((index, element) => {
          let verses = "";
          let redVerses = "";
          let blockQuote = "";
          let italics = "";
          let numberofVerse = $(element).attr("data-key");
          let numberofVerse2 = $(element).find("[data-verse]").text();
          

          let subHead;
          let updatedText;


          

          const asteriskedPhrase = (text, phrase, phraseWithAsterisks) => {
            const words = text.split(" ");
            let result = [];
            // console.log(`                                                                                                         `)
            // console.log(`|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`)
            // console.log(`|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`)
            // console.log(`|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`)
            // console.log(`TEXT SPLIT: ${words}`)
            // console.log(`FUNCTION: ${text}`)
            // console.log(`KEY PHRASE: ${phrase.trim()} \ PHRASE LENGTH: ${phrase.split(" ").length}`)
            // console.log(`UPDATED PHRASE: ${phraseWithAsterisks}`)
            // console.log(`\\\                                                                                                   ///`)
            // console.log(`                                               RESULT                                                    `)
            console.log(``)

            for (let i = 0; i < words.length; i++){
              if ( words.slice(i, i + phrase.trim().split(" ").length).join(" ") === phrase.trim()) {
                result.push(phraseWithAsterisks);
                i += phrase.split(" ").length - 1;
              }else{
                result.push(words[i]);
              }
            }
            
            return result.join(" ");
          };


          

          let numberCounter = 0;
          $(element).each((index, parent) => {
            
            const firstChild = $(parent).children();
            let firstTree = $(parent)
            // console.log(numberCounter)
            // console.log(firstTree.children().eq(numberCounter).attr("class"))
             
            
            // console.log(`First child of parent ${index + 1}:`, firstChild.text());
            // console.log(``);


            let y = 10;
            let i = 0;
            let textCompiledVariable = "empty";
            console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
            console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
            console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
            console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
            console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
            console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`);

            while (i < y){
              if (firstTree.children().eq(i).attr("class") === "prose" || firstTree.children().eq(i).attr("class") === "poetry" || firstTree.children().eq(i).attr("class") === "small-caps")
              {
                console.log(`-----------------------------------------------W/LOOP LOGIC TRIGGERED-----------------------------------`);
                if(firstTree.children().eq(i).text() != undefined || firstTree.children().eq(i).text() != ""){
                  textCompileVariable = textCompiledVariable + firstTree.children().eq(i).text();
                  console.log(firstTree.children().eq(i).text())
                }

                
              }
              console.log(i)
              i++;
              console.log(`CLASS: ${firstTree.children().eq(i).attr("class")}`)
              console.log(`TEXT: ${firstTree.children().eq(i).text()}`)
              
              
            }
            
            
            //   else if (firstTree.children().eq(index).attr("class") === "float"){
                
            //   }


              numberCounter = numberCounter + 1;
            })
          
          



          if ($(element).find(".block-quote").text()){
            

            verses = $(element).find(".block-quote").text();
          }
          else if ($(element).find(".poetry").text()){

            if ( $(element).find("i") != ""){
              
              let italics = $(element).find("i").text();
              
              let italicsAsterisk = `&${italics}&`;

              
              updatedText = asteriskedPhrase( $(element).find(".poetry").text(), italics, italicsAsterisk);


              verse = updatedText

              // console.log(`UPDATED ASTERISKED TEXT:  ${updatedText}`);
            }
            if ( $(element).find(".small-caps") ){
              // console.log("SM FOUND"); 
            }

            if ($(element).find(".red-letter").text() != ""){
              $(element).find(".red-letter").each(function(index, content){
                redVerses = `${redVerses}*${$(content).text()}`;
              });

            };

            

            if (verses === updatedText){
              verses = updatedText;
            }else{
              // console.log(` TEST PRINT:${$(element).find(".poetry").textContent} `)
              verses = $(element).find(".poetry").text();
            }



          }else if ($(element).find(".prose").text()){

            if ( $(element).find("i") != ""){
              
              let italics = $(element).find("i").text();
              
              let italicsAsterisk = `&${italics}&`;

              
              updatedText = asteriskedPhrase( $(element).find(".prose").text(), italics, italicsAsterisk);


              
              
              
              // console.log(`UPDATED ASTERISKED TEXT: ${updatedText}`);
              verses = updatedText;
            }
            if ( $(element).find(".small-caps") ){
              // console.log("SM FOUND"); 
            }

            if ($(element).find(".red-letter").text() != ""){
              $(element).find(".red-letter").each(function(index, content){
                redVerses = `${redVerses}*${$(content).text()}`;
              });
              
            };



            if (verses === updatedText){
              verses = updatedText;
            }else{
            
             verses = $(element).find(".prose").text();
            //  console.log(`VERSE: ${verses}`)
            }

 

          }


          //SUBHEADER FINDER/PRINTER
          if ( $(element).find(".subhead").text() != "" || $(element).find(".subhead").text() != "undefined" || $(element).find(".subhead").text() != null || $(element).find(".subhead").text() != undefined ){
      
            subHead = $(element).find(".subhead").text();
            
          } else {
            subhead = "empty";
          }
          
          let versesWithoutCommas = verses.replace(/,/g,"<^>");
          let adjustedNumberofVerse = numberofVerse.replace(/-/g,'', 'hex');
          let strippedAdjustedNumberV = adjustedNumberofVerse.substring(5,8);
          let declaredVerseNumber = numberofVerse2;
          

          
          let sqlStatement4 = "INSERT INTO `scrapeddata` (`idscrapedData`, `book`, `subHead`, `chapter`, `verseNumber`, `verse`, `redVerse`) VALUES ('"+uuidv6()+"','"+x+"', '"+subHead+"','"+chapterNumber+"',"+strippedAdjustedNumberV+", '"+verses+"', '"+redVerses+"')";
          // console.log(sqlStatement4);
          
          
          connection.query(sqlStatement4, function (error, result){
            if (error){
              throw error;
            }else{
              console.log ("                                                                                                                    RECORD INSERTED!@");
            }
          });

          
        });
      }).catch(err => console.error(err));

      
      i++;
    }
  
  






});




 


app.listen(port, () => {
  console.log(`Scraper is running on port: ${port}`);
});