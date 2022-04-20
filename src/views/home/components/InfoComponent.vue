<template>
  <div class="a-la-une left-content"
       v-if="occurrence">
    <h2>
      A la une
    </h2>
    <div class="date">
      <strong>{{beginAt}}</strong> - <strong>{{endAt}}</strong>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consequuntur eligendi laborum dicta ullam animi ea non veritatis a repudiandae, quod temporibus esse eaque id. Quasi possimus aliquid dolore dignissimos!
    </p>
    <div class="info-bloc">
      <div class="adress">{{occurrence._embedded.address.address}}</div>
      <div class="video-link" v-if="occurrence.is_webinar">
        <a :href="occurrence.replay_link">Video Link here</a>
      </div>
    </div>
    <a :href="occurrence.web_url" class="btn">See details</a>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "InfoComponent",
  data: () =>({

  }),
  computed:{
    ...mapState({
      occurrence: (state) => state.exo.occurrence,
    }),
    beginAt(){
      const date = this.occurrence.begin_at.split(' ')[0]
      return date.split('-')[2]+'/'+date.split('-')[1]+'/'+date.split('-')[0]
    },
    endAt(){
      const date = this.occurrence.end_at.split(' ')[0]
      return date.split('-')[2]+'/'+date.split('-')[1]+'/'+date.split('-')[0]
    }
  },
  created() {

  },
  methods:{

  },
}
</script>

<style scoped>

</style>