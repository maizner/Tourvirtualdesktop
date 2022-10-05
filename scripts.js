 AFRAME.registerComponent('start-scene', {
          schema: {
            events: {type: 'string', default: ''},
          },
          init: function ()
          {

            var bg = document.querySelector('#image-a');
            var startBtn = document.querySelector('#start-btn');
            var portalWelcome = document.querySelectorAll('.pantalla-welcome');
            var floorLinks = document.querySelectorAll('.floor');
            var el = this.el
            var music = document.querySelector("#functional-music");

            intoMainScene()
            
            function intoMainScene(){
                el.addEventListener('click', function (e) {
                 
                  bg.setAttribute('material', 'color','#707070');
                  startBtn.removeAttribute('clickable');
                  el.emit("go-up");
                  showPortal(portalWelcome);
                  showPortal(floorLinks);
                  playMusic();
                  
                  function playMusic() {
                    music.components.sound.playSound();
                  }
                  function showPortal (elem){
                    for (var i = 0; i < elem.length; i++) {
                       elem[i].setAttribute('visible', true);
                       elem[i].setAttribute('clickable', "");
                       
                    }
                  }
                 
              })
            }
                        
          }
      });

    AFRAME.registerComponent('set-image', {
        schema: {
          on: {type: 'string'},
          target: {type: 'selector'},
          src: {type: 'string'},
          dur: {type: 'number', default: 300},
          // show:{ type:'string'}
          // clickable:{type:'tring'}

        },

        init: function () {
          var data = this.data;
          var el = this.el;

          this.setupFadeAnimation();
          
          el.addEventListener(data.on, function () {
            // Fade out image.
            data.target.emit('set-image-fade-out');
            data.target.emit('set-image-fade-in');
            // Wait for fade to complete.
            setTimeout(function () {
              // Set image.
              data.target.setAttribute('material', 'src', data.src);
            }, data.dur);
          });

        },

        /**
         * Setup fade-in + fade-out.
         */
        setupFadeAnimation: function () {
          var data = this.data;
          var targetEl = this.data.target;

          // Only set up once.
          if (targetEl.dataset.setImageFadeSetup) { return; }
          targetEl.dataset.setImageFadeSetup = true;

          // Create animation.
          targetEl.setAttribute('animation__fadeOut', {
            property: 'material.color',
            startEvents: 'set-image-fade-out',
            dir: 'alternate',
            dur: 1000,
            from: '#707070',
            to: '#000'
          });
          targetEl.setAttribute('animation__fadeIn', {
            property: 'material.color',
            startEvents: 'set-image-fade-in',
            dir: 'alternate',
            dur: 1000,
            from: '#000',
            to: '#707070'
          });
        }

      });
     AFRAME.registerComponent('portal', {
        schema: {
            events: {type: 'string', default: ''},
          },
        init: function () {
          var el = this.el;
          var portales = document.querySelectorAll('.portales');
          var referencias = document.querySelectorAll('.references');
          // Relacionando portales con todos los elementos que deben mostrarse en cada pantalla
           onPortalShowScreen(
            '#elem-start-btn', 
            document.querySelectorAll('.portales.pantalla-wellcome'),
            document.querySelectorAll('.references.pantalla-welcome'));

          onPortalShowScreen(
            '.portalatelemkt', 
            document.querySelectorAll('.portales.pantalla-telemarketing'),
            document.querySelectorAll('.references.pantalla-telemarketing'));
          onPortalShowScreen(
            '.portalareintegrosasis', 
            document.querySelectorAll('.portales.pantalla-asistencias'), 
            document.querySelectorAll('.references.pantalla-asistencias'));
          onPortalShowScreen(
            '.portalawelcome', 
            document.querySelectorAll('.portales.pantalla-welcome'), 
            document.querySelectorAll('.references.pantalla-welcome'));
          onPortalShowScreen(
            '.portaladtomedico', 
            document.querySelectorAll('.portales.pantalla-dtomedico'), 
            document.querySelectorAll('.references.pantalla-dtomedico'));
          onPortalShowScreen(
            '.portalait1', 
            document.querySelectorAll('.portales.pantalla-it1'), 
            document.querySelectorAll('.references.pantalla-it1'));
          onPortalShowScreen(
            '.portalapasillopiso10', 
            document.querySelectorAll('.portales.pantalla-pasillopiso10'), 
            document.querySelectorAll('.references.pantalla-pasillopiso10'));
          onPortalShowScreen(
            '.portalacomedor1', 
            document.querySelectorAll('.portales.pantalla-comedor1'), 
            document.querySelectorAll('.references.pantalla-comedor1'));
          onPortalShowScreen(
            '.portalacomedor2', 
            document.querySelectorAll('.portales.pantalla-comedor2'), 
            document.querySelectorAll('.references.pantalla-comedor2'));
          onPortalShowScreen(
            '.portalagerenadmin', 
            document.querySelectorAll('.portales.pantalla-gerenadmin'), 
            document.querySelectorAll('.references.pantalla-gerenadmin'));
          onPortalShowScreen(
            '.portalacomercial', 
            document.querySelectorAll('.portales.pantalla-comercial'), 
            document.querySelectorAll('.references.pantalla-comercial'));
          onPortalShowScreen(
            '.portalalobby', 
            document.querySelectorAll('.portales.pantalla-lobby'), 
            document.querySelectorAll('.references.pantalla-lobby'));
          onPortalShowScreen(
            '.portalarrhh',
           document.querySelectorAll( '.portales.pantalla-rrhh'), 
           document.querySelectorAll('.references.pantalla-rrhh'));
          onPortalShowScreen(
            '.portalalegales', 
            document.querySelectorAll('.portales.pantalla-legales'), 
            document.querySelectorAll('.references.pantalla-legales'));
          onPortalShowScreen(
            '.portalapasillopiso11', 
            document.querySelectorAll('.portales.pantalla-pasillopiso11'), 
            document.querySelectorAll('.references.pantalla-pasillopiso11'));
          onPortalShowScreen(
            '.portalpasillopiso11-2', 
            document.querySelectorAll('.portales.pantalla-pasillopiso11-2'), 
            document.querySelectorAll('.references.pantalla-pasillopiso11-2'));
          onPortalShowScreen(
            '.portalaadmin', 
            document.querySelectorAll('.portales.pantalla-admin'), 
            document.querySelectorAll('.references.pantalla-admin'));
          onPortalShowScreen(
            '.portalamkt', 
            document.querySelectorAll('.portales.pantalla-mkt'), 
            document.querySelectorAll('.references.pantalla-mkt'));
          onPortalShowScreen(
            '.portalait2', 
            document.querySelectorAll('.portales.pantalla-it2'), 
            document.querySelectorAll('.references.pantalla-it2'));


          function getElem(elem){
            document.querySelectorAll('.references.pantalla-it2')
          }

          function onPortalShowScreen(btn, portal, reference){
            var button = document.querySelectorAll(btn);
            for (var i = 0; i < button.length; i++) {
              button[i].addEventListener('click', function (evt) {
                portalBehavior(portal, reference);
                
              });
            }
          }

          function portalBehavior(clikables,nonclickables){
            setTimeout(function(){
              hidePortal();
              showPortal(clikables);
              hideReferences();
              showReferences(nonclickables)
            }, 444)

            function hidePortal(){
              for (var i = 0; i < portales.length; i++) {
                portales[i].setAttribute('visible', false);
                portales[i].removeAttribute('clickable');
              }
            }

            function showPortal (elem){
              for (var i = 0; i < elem.length; i++) {
                elem[i].setAttribute('visible', true);
                elem[i].setAttribute('clickable', "");
              }
            }
            function hideReferences(){
              for (var i = 0; i < referencias.length; i++) {
                referencias[i].setAttribute('visible', false);
              }
            }
            function showReferences (elem){
              for (var i = 0; i < elem.length; i++) {
                elem[i].setAttribute('visible', true);
              }
            }
          }
        }  
      });

    AFRAME.registerComponent('tooltip', {
   		  schema: {
          events: {type: 'string', default: ''},
      	},
   	 	  init: function () {
        var el = this.el;
        var data = this.data;
        var button = document.querySelectorAll('.tooltip-btn');
        var ttpContent = document.querySelectorAll('.tooltip-content');

        el.addEventListener('mouseenter', function (evt) {
          for (var i = 0; i < button.length; i++) {
            ttpContent[i].setAttribute('visible', true);
            ttpContent[i].emit('open-tooltip');
            // console.log("abri tooltip");
          }  
        });

        el.addEventListener('mouseleave', function (evt) {
           for (var j = 0; j < button.length; j++) {
            ttpContent[j].setAttribute('visible', false);
            // ttpContent[j].emit('close-tooltip');
            // console.log("cerre tooltip");
          }
        });
        }
      });
      AFRAME.registerComponent('tooltip1', {
        schema: {
          events: {type: 'string', default: ''},
        },
        init: function () {
          var el = this.el;
          var button = document.querySelector('.tooltip-btn1');
          var ttpContent = document.querySelector('.tooltip-content1');
          el.addEventListener('mouseenter', function (evt) {
              ttpContent.setAttribute('visible', true);ttpContent.emit('open-tooltip');
          });
          el.addEventListener('mouseleave', function (evt) {
              ttpContent.setAttribute('visible', false);
          });
        }
      });
      AFRAME.registerComponent('tooltip2', {
        schema: {
          events: {type: 'string', default: ''},
        },
        init: function () {
          var el = this.el;
          var button = document.querySelector('.tooltip-btn2');
          var ttpContent = document.querySelector('.tooltip-content2');
          el.addEventListener('mouseenter', function (evt) {
              ttpContent.setAttribute('visible', true);ttpContent.emit('open-tooltip');
          });
          el.addEventListener('mouseleave', function (evt) {
              ttpContent.setAttribute('visible', false);
          });
        }
      });
      AFRAME.registerComponent('tooltip3', {
        schema: {
          events: {type: 'string', default: ''},
        },
        init: function () {
          var el = this.el;
          var button = document.querySelector('.tooltip-btn3');
          var ttpContent = document.querySelector('.tooltip-content3');
          el.addEventListener('mouseenter', function (evt) {
              ttpContent.setAttribute('visible', true);ttpContent.emit('open-tooltip');
          });
          el.addEventListener('mouseleave', function (evt) {
              ttpContent.setAttribute('visible', false);
          });
        }
      });