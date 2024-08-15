const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

const fs = require("fs");

const express = require("express");
const app = express()
const port = process.env.PORT || 3000

const writeStream = fs.createWriteStream("LSB Bible.csv");



agentURL = "https://read.lsbible.org/?q=Genesis+1";

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



axios.get(agentURL)
  .then(res => {
    const $ = cheerio.load(res.data)
    $(".verse").each((index, element) => {
      const verses = $(element).find(".prose").text();
      const numberofVerse = $(element).attr("data-key");


      //SUBHEADER FINDER/PRINTER
      if ( $(element).find(".subhead").text() != "" || $(element).find(".subhead").text() != undefined ){
        console.log($(element).find(".subhead").text());
      }else{
        console.log("PRINTED");
      }
      



      console.log(numberofVerse);
      console.log(verses);
    })
  }).catch(err => console.error(err));




app.listen(port, () => {
  console.log(`Scraper is running on port: ${port}`);
});