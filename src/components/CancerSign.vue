<template>
 <div class="container text-center" id="aztro">
    <div class="row">
        <div class="col-12">
            <h3>{{ message }}</h3>
        </div>
        <div class="col-12">
            <img src="../assets/img/hands_cancer.png" alt="">
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
     </div>
</div>
</template>

<script>

import axios from 'axios'

const URL = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        export default {
             el: '#aztro',
    data() {
            return {
            data: {},
            message: "Your daily Cancer"
        }
    },
    created() {
        axios.post(URL).then((response) => {
            this.data = response.data
        })
    }
        }

</script>