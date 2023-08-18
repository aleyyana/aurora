<template>
 <div class="container text-center" id="aztro">
    <!-- <div class="row">
        <div class="col-12">
            <h3>{{ message }}</h3>
        </div>
        <div class="col-12">
            <img src="../assets/img/hands_aquarius.png" alt="">
        </div>
   
        <div class="col">
          <ul id="aztro">
              <li> <span>Compatibility: </span> {{data.compatibility}}</li>
              <li> <span>Lucky Number: </span>{{data.lucky_number}}</li>
              <li> <span>Lucky Time:  </span>{{data.lucky_time}}</li>
          </ul>
        </div>
        <div class="col">
             <li><span>Current Date: </span> {{data.current_date}}</li>
             <li> <span>Color: </span> {{data.color}}</li>
             <li> <span>Mood: </span> {{data.mood}}</li>
        </div>
        <div class="col-12">
            <li> <span>Description: </span> {{data.description}}</li>
        </div>
     </div> -->
</div>
</template>

<script>

import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/',
  params: {
    zodiacSign: 'aquarius',
    timePeriod: 'daily'
  },
  headers: {
    'X-RapidAPI-Key': '62bc3eb8bdmshe8948ea88763b55p1cf83ajsna599aeb1fcc4',
    'X-RapidAPI-Host': 'daily-horoscope-api.p.rapidapi.com'
  }
};

// export default({

//     try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
//     } catch (error) {
// 	console.error(error);
// }
// })


export default {
mounted () {
console.log ('Component mounted.')
},
data() {
return {
name: '',
description: '',
result: ''
};
},
methods: {
formSubmit(e1) {
e1.preventDefault();
let currentObj = this;
this.axios.post('http://localhost:8000/yourPostApi', {
name: this.name,
description: this.description
})
.then(function (response) {
currentObj.output = response.data;
})
.catch(function (error) {
currentObj.output = error;
});
}
}
}
</script>

<style>
button{
    color: white;
}
    
li{
  list-style-type: none;
  font-family: Quasimoda, sans-serif;
}
   span{
        color:var(--secondary-color);
    }
</style>