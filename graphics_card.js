const axios = require('axios');
const cheerio = require('cheerio');

  // const args = process.argv.slice(2);
  // const postCode = args[0] || 2000;
let url = 'https://www.umart.com.au/pc-parts/computer-parts/graphics-cards-gpu-610';
axios.get(url)
  .then((response) => {
      if(response.status === 200) {
      const html = response.data;
      // console.log(html)
      const $ = cheerio.load(html); 
      //console.log($('.goods_name').text())
      let cardsArr = $('.goods_name').text().split(" Graphics Card")
      let cardsImg = $('image/jpeg').text()
      
      cardsArr.pop()
      console.log(cardsArr)
      console.log(cardsImg)
}});


