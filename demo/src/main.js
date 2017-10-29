
import Vue from 'vue'

var my_header={
  template:'<p>this is a test message</p>'
}

new Vue({
   el: '#app',
  components:{
     'myheader':my_header
  }
}
)


