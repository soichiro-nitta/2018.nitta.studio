<template lang="pug">
  .TheBg
    .TheBg_Title(
      ref='title'
    )
      .TheBg_TitleShadow(
        ref='shadow'
      ) {{ sitename }}
      .TheBg_TitleFace(
        ref='face'
      ) {{ sitename }}
    canvas#canvas
    .TheBg_Layer.TheBg_Layer3(
      ref='layer3'
    )
      .TheBg_LayerInner
        .tbc {{ sitename }}
    .TheBg_Layer.TheBg_Layer2(
      ref='layer2'
    )
      .TheBg_LayerInner
        .tbc {{ sitename }}
    .TheBg_Layer.TheBg_Layer1(
      ref='layer1'
    )
      .TheBg_LayerInner
        .tbc {{ sitename }}
</template>

<script>
import {mapGetters} from 'vuex'
import {TweenMax, Expo, Power0} from 'gsap'

export default {
  data () {
    return {
      sitename: 'Nitta.Studio',
      isMobile: this.$device.isMobile
    }
  },
  computed: {
    ...mapGetters({
      painted: 'firstview/painted',
      completed: 'firstview/completed'
    })
  },
  watch: {
    painted () {
      this.$el.style.opacity = 1
      this.$refs.layer1.style.opacity = 1
      this.$refs.layer2.style.opacity = 1
      this.$refs.layer3.style.opacity = 1
    },
    async completed () {
      this.canvasAnimation()
      await this.$delay(130)
      this.clip1()
      await this.$delay(130)
      this.clip2()
      await this.$delay(130)
      this.clip3()
      await this.$delay(200)
      this.spout()
      await this.$delay(1000)
      this.leaveLayer()
      await this.$delay(4000)
      this.rotate()
    }
  },
  methods: {
    spout () {
      requestAnimationFrame(() => {
        TweenMax.to('#canvas', 5, {
          scale: 1,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.title, 5, {
          scale: 3,
          rotation: 365,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.shadow, 5, {
          y: this.isMobile ? '1.25px' : '2.5px',
          x: this.isMobile ? '1.25px' : '2.5px',
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.face, 5, {
          y: this.isMobile ? '-1.25px' : '-2.5px',
          x: this.isMobile ? '-1.25px' : '-2.5px',
          ease: Expo.easeInOut
        })
      })
    },
    leaveLayer () {
      if (this.isMobile) return
      requestAnimationFrame(() => {
        TweenMax.to('.TheBg_LayerInner', 2, {
          opacity: 0,
          ease: Expo.easeInOut
        })
      })
    },
    rotate () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.title, 150, {
          rotation: 365,
          startAt: {
            rotation: 5
          },
          ease: Power0.easeNone,
          repeat: -1
        })
      })
    },
    clip1 () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.layer1, 1.3, {
          width: this.isMobile ? '0%' : '50px',
          ease: Expo.easeOut
        })
      })
    },
    clip2 () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.layer2, 1.3, {
          width: this.isMobile ? '0%' : '150px',
          ease: Expo.easeOut
        })
      })
    },
    clip3 () {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.layer3, 1.3, {
          width: this.isMobile ? '0%' : '300px',
          ease: Expo.easeOut
        })
      })
    },
    canvasAnimation () {
      const isMobile = this.isMobile
      /**
      * Generates random particles using canvas
      *
      * @class Particles
      * @constructor
      */
      class Particles {
        constructor () {
          // particle colors
          this.colors = [
            '100, 100, 100',
            '130, 130, 130',
            '160, 160, 160'
          ]
          // adds gradient to particles on true
          this.blurry = false
          // adds white border
          this.border = false
          // particle radius min/max
          this.minRadius = 10
          this.maxRadius = 35
          // particle opacity min/max
          this.minOpacity = 0.005
          this.maxOpacity = 0.5
          // particle speed min/max
          this.minSpeed = 0.05
          this.maxSpeed = 0.5
          // frames per second
          this.fps = 60
          // number of particles
          this.numParticles = isMobile ? 60 : 120
          // required canvas variables
          this.canvas = document.getElementById('canvas')
          this.ctx = this.canvas.getContext('2d')
        }

        /**
        * Initializes everything
        * @method init
        */
        init () {
          const self = this
          self.render()
          self.createCircle()
        }

        /**
        * generates random number between min and max values
        * @param  {number} min value
        * @param  {number} max malue
        * @return {number} random number between min and max
        * @method _rand
        */
        _rand (min, max) {
          return Math.random() * (max - min) + min
        }

        /**
        * Sets canvas size and updates values on resize
        * @method render
        */
        render () {
          const self = this
          let wHeight = document.getElementById('scrollArea').clientHeight
          let wWidth = document.getElementById('scrollArea').clientWidth
          self.canvas.width = wWidth
          self.canvas.height = wHeight
          window.onresize = () => {
            self.render()
          }
        }

        /**
        * Randomly creates particle attributes
        * @method createCircle
        */
        createCircle () {
          let particle = []
          const self = this

          for (let i = 0; i < this.numParticles; i++) {
            const color = self.colors[~~(self._rand(0, self.colors.length))]
            const vy = self._rand(self.minSpeed, self.maxSpeed)
            // const vx = self._rand(self.minSpeed, self.maxSpeed)
            const r = 1 // Math.sqrt(Math.sqr(vx)+Math.sqr(vy))
            particle[i] = {
              radius: r,
              xPos: self._rand(0, self.canvas.width),
              yPos: self._rand(0, self.canvas.height),
              xVelocity: self._rand(self.minSpeed, self.maxSpeed),
              yVelocity: vy,
              color: 'rgba(' + color + ',' + self._rand(self.minOpacity, self.maxOpacity) + ')'
            }

            // once values are determined, draw particle on canvas
            self.draw(particle, i)
          }
          // ...and once drawn, animate the particle
          self.animate(particle)
        }

        /**
        * Draws particles on canvas
        * @param  {array} Particle array from createCircle method
        * @param  {number} i value from createCircle method
        * @method draw
        */
        draw (particle, i) {
          const self = this
          const ctx = self.ctx

          if (self.blurry === true) {
            // creates gradient if blurry === true
            const grd = ctx.createRadialGradient(particle[i].xPos, particle[i].yPos, particle[i].radius, particle[i].xPos, particle[i].yPos, particle[i].radius / 1.25)

            grd.addColorStop(1.000, particle[i].color)
            grd.addColorStop(0.000, 'rgba(34, 34, 34, 0)')
            ctx.fillStyle = grd
          } else {
            // otherwise sets to solid color w/ opacity value
            ctx.fillStyle = particle[i].color
          }

          if (self.border === true) {
            ctx.strokeStyle = '#fff'
            ctx.stroke()
          }

          ctx.beginPath()
          ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 2 * Math.PI, false)
          ctx.fill()
        }

        /**
        * Animates particles
        * @param  {array} particle value from createCircle & draw methods
        * @method animate
        */
        animate (particle) {
          const self = this
          // const ctx = self.ctx

          setInterval(() => {
            // clears canvas
            self.clearCanvas()
            // then redraws particles in new positions based on velocity
            for (let i = 0; i < self.numParticles; i++) {
              particle[i].xPos += particle[i].xVelocity
              particle[i].yPos -= particle[i].yVelocity

              // if particle goes off screen call reset method to place it offscreen to the left/bottom
              if (particle[i].xPos > self.canvas.width + particle[i].radius || particle[i].yPos > self.canvas.height + particle[i].radius) {
                self.resetParticle(particle, i)
              } else {
                self.draw(particle, i)
              }
            }
          }, 1000 / self.fps)
        }

        /**
        * Resets position of particle when it goes off screen
        * @param  {array} particle value from createCircle & draw methods
        * @param  {number} i value from createCircle method
        * @method resetParticle
        */
        resetParticle (particle, i) {
          const self = this

          const random = self._rand(0, 1)

          if (random > 0.5) {
            //  50% chance particle comes from left side of window...
            particle[i].xPos = -particle[i].radius
            particle[i].yPos = self._rand(0, self.canvas.height)
          } else {
            // ... or bottom of window
            particle[i].xPos = self._rand(0, self.canvas.width)
            particle[i].yPos = self.canvas.height + particle[i].radius
          }
          // redraw particle with new values
          self.draw(particle, i)
        }

        /**
        * Clears canvas between animation frames
        * @method clearCanvas
        */
        clearCanvas () {
          this.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height)
        }
      }

      // go go go!
      const particle = new Particles()
      particle.init()
    }
  }

}
</script>

<style lang="stylus" scoped>
.TheBg
  display flex
  justify-content center
  align-items center
  position absolute
  top 0
  width 100%
  height 100%
  -webkit-backface-visibility hidden
  backface-visibility hidden
  opacity 0
  &_Title
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    margin auto
    width 100%
    height 100%
    font-size 13.5vw
    font-weight bold
    line-height 1.5
    +large()
      font-size 9vw
  &_TitleShadow
    display flex
    justify-content center
    align-items center
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    margin auto
    width 100%
    height 100%
    color #0f0f0f
  &_TitleFace
    display flex
    justify-content center
    align-items center
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    margin auto
    width 100%
    height 100%
    color #2d2d2d
  &_Layer
    position absolute
    top 0
    right 0
    width 100%
    height 100%
    text-align center
    font-size 13.5vw
    font-weight bold
    line-height 1.5
    // clip-path inset(0 0 0 0)
    overflow hidden
    +large()
      font-size 9vw
      letter-spacing 0.1vw
  &_Layer1
    color #cbcbcb
    background #131313
    opacity 0
  &_Layer2
    color #969696
    background #171717
    opacity 0
  &_Layer3
    color #626262
    background #1b1b1b
    opacity 0
  &_LayerInner
    display table
    position absolute
    top 0
    right 0
    width calc(100vw - 20px)
    height 100%
    text-align center
    +large()
      width calc(100vw - 40px)
  #canvas
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    margin auto
    width 100%
    height 100%
    transform scale(0)
</style>
