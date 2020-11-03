<template>
  <div class="contact">
    <div>
      <img src="@/assets/emailIcon.png">
      <h4>radu.radubc@gmail.com</h4>
    </div>
    <div>
      <img src="@/assets/phoneIcon.png">
      <h4>0730327737</h4>
    </div>
    <div>
      <img src="@/assets/linkedinIcon.png">
      <h4>www.linkedin.com/in/rbucur</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contact {
  display: flex;
}

.contact > div {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.contact h4 {
  font-family: Roboto-Regular;
  margin-left: 2%;
  font-size: 18px;
  font-weight: 400;
}

.contact img {
  height: 35%;
  margin-top: auto;
  margin-bottom: auto;
}


</style>
