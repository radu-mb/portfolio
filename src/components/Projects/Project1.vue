<template>
    <div class="container">
        <h1>Spot Run app</h1><br>
        <h2>What is this app about?</h2><br>
        <h2>Spot Run is all you need to plan your perfect trip as a kitesurf passionate from the comfort of your mobile screen.</h2>
        <h2>You can browse kitesurfing places, check the weather, book your flight, choose accommodation, see nearby restaurants and even take a look at what others say about the place.
        </h2><br>
        <vueper-slides
            ref="vueperslides1"
            class="no-shadow big-slide"
            :touchable="false"
            fade
            :autoplay="false"
            :bullets="false"
            @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
            fixed-height="600px">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :style="slide.style"
                :image="slide.image"
                :content="slide.content">
            </vueper-slide>
        </vueper-slides>

        <vueper-slides
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
        </vueper-slides>
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
            image: require('@/assets/1-kit.jpg'),
            content: ''
        },
        {
            image: require('@/assets/2-kit.jpg'),
            content: ''
        },
        {
            image: require('@/assets/3-kit.jpg'),
            content: ''
        },
        {
            image: require('@/assets/4-kit.jpg'),
            content: ''
        },
        {
            style: 'background-image: none; background-color: #3D3D3D',
            image: require('@/assets/5-kit-thumbnail.png'),
            content: '<video width="800px" height="600px" loop muted autoplay><source src="' + require('@/assets/5-kit.mp4') + '" type="video/mp4"></video>'
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
