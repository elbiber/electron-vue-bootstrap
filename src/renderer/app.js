const axios = require('axios');
const api = require('./api.json');

new Vue({
    el: '#app',
    data: {      
        info: null,
        stockName: null    
    },
    methods: {
      formSubmitted: function(){
          axios
          .get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=Acc&interval=1min&apikey='+api.key)
          .then(response => (this.info = response))
      }
    }
  });