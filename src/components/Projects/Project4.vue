<template>
    <div class="container">
        <h1>Stream app</h1><br>
        <h2>This is a concept referenced to the twitch mobile app.</h2>
        <h2>You can browse through different categories, watch your favorite content creator live and even stream yourself.</h2><br>
        <vueper-slides
            ref="vueperslides1"
            class="big-slide"
            :touchable="false"
            fade
            :autoplay="false"
            :bullets="false"
            @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
            fixed-height="600px">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image">
            </vueper-slide>
        </vueper-slides>

        <!-- <vueper-slides
            class="no-shadow thumbnails"
            ref="vueperslides2"
            @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
            :visible-slides="slides.length"
            fixed-height="200px"
            :bullets="false"
            :touchable="false"
            :gap="2.5"
            :arrows="false">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image"
                @click.native="$refs.vueperslides2.goToSlide(i)">
            </vueper-slide>
        </vueper-slides> -->
    </div>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  name: 'Project1',
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
        {
            image: require('@/assets/1-stream-app.jpg')
        }
    ]
})

}
</script>

<style scoped>

h1 {
    font-family: Domine;
    font-size: 36px;
    font-weight: 600;
    text-align: left;
    margin-left: 5%;
    margin-top: 5%;
}

h2 {
    font-family: Roboto-Regular;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    margin-left: 5%;
    margin-bottom: 1%;
    margin-right: 5%;
}

.thumbnails {
  margin: auto;
  max-width: 1000px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #3D3D3D;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(37, 37, 37, 0.3);
  opacity: 1;
  border-color: rgb(204, 204, 204);
}

.big-slide {
    width: 800px;
    margin: auto;
    margin-bottom: 1%;
}

</style>
