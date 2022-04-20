<template>
<div>
  <section>
    <div class="container">
      <info-component/>
      <div class="right-content">
        <div class="top">
          <hec-component/>
          <event-component/>
        </div>
        <div class="bottom">
          <partners-component/>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import {mapActions} from "vuex";
import InfoComponent from "@/views/home/components/InfoComponent";
import HecComponent from "@/views/home/components/HecComponent";
import EventComponent from "@/views/home/components/EventComponent";
import PartnersComponent from "@/views/home/components/PartnersComponent";


export default {
  name: "indexComponent",
  components: {PartnersComponent, EventComponent, HecComponent, InfoComponent},
  data: () =>({

  }),
  async created() {
    await this.occurenceAction()
  },
  methods:{
    ...mapActions('exo',['exoAction','occurenceAction'])
  }
}
</script>

<style scoped>

</style>