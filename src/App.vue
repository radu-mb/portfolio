<template>
  <div id="app">
    <Header/>
    <img class="mypic" src="./assets/my_pic.png" alt="My picture"/>
    <h3 class="description">My name is Bucur Radu. I am an experienced self-taught Designer bringing 2 years experience applying technical and creative abilities to diverse projects.  Bringing a drop of experience in the Project Management field, with efficiency in collaborating with artistic and project leadership to complete tasks according to deadline. A team player with great skills in problem solving.</h3>
    <Contact class="contact"/>
    <Project1/>
    <Project2/>
    <Project3/>
    <Project4/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Contact from './components/Contact.vue'
import Project1 from './components/Projects/Project1.vue'
import Project2 from './components/Projects/Project2.vue'
import Project3 from './components/Projects/Project3.vue'
import Project4 from './components/Projects/Project4.vue'

export default {
  name: 'App',
  components: {
    Header,
    Contact,
    Project1,
    Project2,
    Project3,
    Project4
  },
}
</script>

<style>

@font-face {
  font-family:"Domine" ;
  src: local("Domine"),
  url(./fonts/Domine-Bold.ttf) format("truetype");
}

@font-face {
  font-family:"Roboto" ;
  src: local("Roboto"),
  url(./fonts/Roboto-Regular.ttf) format("truetype");
}
#app {
  font-family: "Roboto","Domine";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  
}

body {
  display: block;
  margin: 0px;
  background-color: #3D3D3D;
}

.mypic {
  margin-top: 2%;
  border-radius: 50%;
  width: 15%;
  -webkit-box-shadow: -1px 6px 73px -17px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 6px 73px -17px rgba(0,0,0,0.75);
box-shadow: -1px 6px 73px -17px rgba(0,0,0,0.75);
}

.description {
  font-family: Roboto-Regular;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 5%;
  font-size: 20px;
  font-weight: 400;
}

.contact {
  margin-bottom: 15%;
}
</style>
