(function ($) {
 "use strict";

		/*----------------------------
		 jQuery MeanMenu
		------------------------------ */
		jQuery('nav#dropdown').meanmenu();

		// Collapse ibox function
			$('#sidebar ul li').on('click', function () {
				var button = $(this).find('i.fa.indicator-mn');
				button.toggleClass('fa-angle-left').toggleClass('fa-angle-right');

			});


		$('#sidebarCollapse').on('click', function () {
			$("body").toggleClass("mini-navbar");
			SmoothlyMenu();
		});

		/*-----------------------------
			Menu Stick
		---------------------------------*/
		$(".sicker-menu").sticky({topSpacing:0});

		$(document).on('click', '.header-right-menu .dropdown-menu', function (e) {
			  e.stopPropagation();
		});


    /*--------------------------
     START FUNCTIONS CMVB
    ---------------------------- */
    function activeSparkLines(){
      if($('#sparkline1').children()[0] === undefined || $('#sparkline1').children()[0] === 'undefined'){
        $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 52, 25], {
            type: 'line',
            lineColor: '#17997f',
            lineWidth: 1,
            barSpacing: '100px',
            fillColor: '#03a9f4'
        });
      }
      if($('#sparkline2').children()[0] === undefined || $('#sparkline2').children()[0] === 'undefined'){
        $("#sparkline2").sparkline([-4, -2, 2, 0, 4, 5, 6, 7], {
            type: 'bar',
            barColor: '#03a9f4',
            negBarColor: '#303030'
        });
      }
      if($('#sparkline3').children()[0] === undefined || $('#sparkline3').children()[0] === 'undefined'){
        $("#sparkline3").sparkline([1, 1, 2], {
            type: 'pie',
            sliceColors: ['#03a9f4', '#303030', '#ff9999']
        });
      }
      if($('#sparklinedask1').children()[0] === undefined || $('#sparklinedask1').children()[0] === 'undefined'){
        $("#sparklinedask1").sparkline([1, 3, 2], {
            type: 'pie',
            width: '80',
            height: '80',
            sliceColors: ['#03a9f4', '#303030', '#ff9999']
        });
      }
      if($('#sparklinedask2').children()[0] === undefined || $('#sparklinedask2').children()[0] === 'undefined'){
        $("#sparklinedask2").sparkline([1, 1, 2], {
            type: 'pie',
            width: '80',
            height: '80',
            sliceColors: ['#03a9f4', '#303030', '#ff9999']
        });
      }
      if($('#sparkline4').children()[0] === undefined || $('#sparkline4').children()[0] === 'undefined'){
        $("#sparkline4").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
            type: 'line',
            lineColor: '#03a9f4',
            fillColor: '#ffffff'
        });
      }
      if($('#sparkline5').children()[0] === undefined || $('#sparkline5').children()[0] === 'undefined'){
        $("#sparkline5").sparkline([1, 1, 0, 1, 1, 1, 1, 1, -1, -2, -3, -4], {
            type: 'tristate',
            posBarColor: '#03a9f4',
            negBarColor: '#303030'
        });
      }
      if($('#sparkline6').children()[0] === undefined || $('#sparkline6').children()[0] === 'undefined'){
        $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, ], {
            type: 'discrete',
            lineColor: '#03a9f4'
        });
      }
      if($('#sparkline7').children()[0] === undefined || $('#sparkline7').children()[0] === 'undefined'){
        $("#sparkline7").sparkline([52, 12, 44], {
            type: 'pie',
            height: '150px',
            sliceColors: ['#03a9f4', '#303030', '#e4f0fb']
        });
      }
      if($('#sparkline8').children()[0] === undefined || $('#sparkline8').children()[0] === 'undefined'){
        $("#sparkline8").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], {
            type: 'bar',
            barWidth: 8,
            height: '150px',
            barColor: '#03a9f4',
            negBarColor: '#303030'
        });
      }
      if($('#sparkline9').children()[0] === undefined || $('#sparkline9').children()[0] === 'undefined'){
        $("#sparkline9").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
            type: 'line',
            lineWidth: 1,
            width: '150px',
            height: '150px',
            lineColor: '#999',
            fillColor: '#03a9f4'
        });
      }
      if($('.sparklineadminpro').children()[0] === undefined || $('.sparklineadminpro').children()[0] === 'undefined'){
        $('.sparklineadminpro').sparkline([ [1], [2], [3], [4, 2], [3], [5, 3] ], {
            type: 'bar',
            barColor: '#03a9f4',
            negBarColor: '#303030'
        });
      }
      if($('#sparkline22').children()[0] === undefined || $('#sparkline22').children()[0] === 'undefined'){
        $("#sparkline22").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
            type: 'line',
            width: '100%',
            height: '60',
            lineColor: '#1ab394',
            fillColor: '#f4f4f4'
        });
      }
      if($('#sparkline23').children()[0] === undefined || $('#sparkline23').children()[0] === 'undefined'){
        $("#sparkline23").sparkline([24, 43, 43, 55, 44, 62, 44, 72], {
            type: 'line',
            width: '100%',
            height: '60',
            lineColor: '#1ab394',
            fillColor: "#ebebeb"
        });
      }
      if($('#sparkline24').children()[0] === undefined || $('#sparkline24').children()[0] === 'undefined'){
        $("#sparkline24").sparkline([74, 43, 23, 55, 54, 32, 24, 12], {
            type: 'line',
            width: '100%',
            height: '60',
            lineColor: '#ed5565',
            fillColor: "#ebebeb"
        });
      }
      if($('#sparkline25').children()[0] === undefined || $('#sparkline25').children()[0] === 'undefined'){
        $("#sparkline25").sparkline([24, 43, 33, 55, 64, 72, 44, 22], {
            type: 'line',
            width: '100%',
            height: '60',
            lineColor: '#ed5565',
            fillColor: "#ebebeb"
        });
      }
      if($('#sparkline51').children()[0] === undefined || $('#sparkline51').children()[0] === 'undefined'){
        $("#sparkline51").sparkline([1, 4], {
            type: 'pie',
            height: '140',
            sliceColors: ['#1ab394', '#ebebeb']
        });
      }
      if($('#sparkline52').children()[0] === undefined || $('#sparkline52').children()[0] === 'undefined'){
        $("#sparkline52").sparkline([5, 3], {
            type: 'pie',
            height: '140',
            sliceColors: ['#1ab394', '#ebebeb']
        });
      }
      if($('#sparkline53').children()[0] === undefined || $('#sparkline53').children()[0] === 'undefined'){
        $("#sparkline53").sparkline([2, 2], {
            type: 'pie',
            height: '140',
            sliceColors: ['#ed5565', '#ebebeb']
        });
      }
      if($('#sparkline54').children()[0] === undefined || $('#sparkline54').children()[0] === 'undefined'){
        $("#sparkline54").sparkline([2, 3], {
            type: 'pie',
            height: '140',
            sliceColors: ['#ed5565', '#ebebeb']
        });
      }
    }

    function activeScrollCustom(){
      $(".message-menu, .notification-menu, .comment-scrollbar, .notes-menu-scrollbar, .project-st-menu-scrollbar").mCustomScrollbar({
        autoHideScrollbar: true,
        scrollbarPosition: "outside",
        theme:"light-1"

      });
      $(".chat-scrollbar").mCustomScrollbar({
        setHeight:250,
        autoHideScrollbar: true,
        scrollbarPosition: "outside",
        theme:"light-1"

      });
      $(".timeline-scrollbar").mCustomScrollbar({
        setHeight:636,
        autoHideScrollbar: true,
        scrollbarPosition: "outside",
        theme:"light-1"

      });
      $(".project-list-scrollbar").mCustomScrollbar({
        setHeight:636,
        theme:"light-2"
      });
      $(".messages-scrollbar").mCustomScrollbar({
        setHeight:503,
        autoHideScrollbar: true,
        scrollbarPosition: "outside",
        theme:"light-1"
      });
      $(".chat-scrollbar").mCustomScrollbar({
        setHeight:250,
        theme:"light-2"
      });
      $(".widgets-chat-scrollbar").mCustomScrollbar({
        setHeight:335,
        autoHideScrollbar: true,
        scrollbarPosition: "outside",
        theme:"light-1"
      });
      $(".widgets-todo-scrollbar").mCustomScrollbar({
        setHeight:322,
        autoHideScrollbar: true,
        scrollbarPosition: "outside",
        theme:"light-1"
      });
      $(".user-profile-scrollbar").mCustomScrollbar({
        setHeight:1820,
        autoHideScrollbar: true,
        scrollbarPosition: "outside",
        theme:"light-1"
      });
    }

    function activeGraphicsCustom(){
      // FLOT EJMS
      var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
      var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

      var data1 = [
          { label: "Data 1", data: d1, color: 'linear-gradient(to bottom, #ff9966 0%, #d75151 100%)'},
          { label: "Data 2", data: d2, color: 'linear-gradient(to bottom, #ff9966 0%, #d75151 100%)' }
      ];
      $.plot($("#flot-chart88"), data1, {
          xaxis: {
              tickDecimals: 0
          },
          series: {
              lines: {
                  show: true,
                  fill: true,
                  fillColor: {
                      colors: [{
                          opacity: 1
                      }, {
                          opacity: 1
                      }]
                  }
              },
              points: {
                  width: 0.1,
                  show: false
              }
          },
          grid: {
              show: false,
              borderWidth: 0
          },
          legend: {
              show: false
          }
      });
      var data2 = [
          { label: "Data 1", data: d1, color: '#303030'}
      ];
      $.plot($("#flot-chart89"), data2, {
          xaxis: {
              tickDecimals: 0
          },
          series: {
              lines: {
                  show: true,
                  fill: true,
                  fillColor: {
                      colors: [{
                          opacity: 1
                      }, {
                          opacity: 1
                      }]
                  }
              },
              points: {
                  width: 0.1,
                  show: false
              }
          },
          grid: {
              show: false,
              borderWidth: 0
          },
          legend: {
              show: false
          }
      });
    }

    function activeSkyIconsCustom(){
      // WHEATER
      if (typeof Skycons !== 'undefined'){
          var icons = new Skycons(
                  {"color": "#fff"},
                  {"resizeClear": true}
                  ),
                  list  = [
                      "clear-day", "clear-night", "partly-cloudy-day",
                      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "snow2", "wind",
                      "fog"
                  ],
                  i;

          for(i = list.length; i--; )
              icons.set(list[i], list[i]);
              icons.play();
      };
    }

    function activeKnobsCircleBarCustom(){
  	  if(typeof($.fn.knob) != 'undefined') {
  		$('.knob').each(function () {
  		  var $this = $(this),
  			  knobVal = $this.attr('data-rel');

  		  $this.knob({
  			'draw' : function () {
  			  $(this.i).val(this.cv + '%')
  			}
  		  });

  		  $this.appear(function() {
  			$({
  			  value: 0
  			}).animate({
  			  value: knobVal
  			}, {
  			  duration : 2000,
  			  easing   : 'swing',
  			  step     : function () {
  				$this.val(Math.ceil(this.value)).trigger('change');
  			  }
  			});
  		  }, {accX: 0, accY: -150});
  		});
      }

    }

    function initMap() {
        var url = window.location.href;
        if (url.includes("maps")) {
            var chicago = new google.maps.LatLng(41.850, -87.650);

            //Map
            var eleMap = document.getElementById('map');
            if(eleMap !== null){
              var map = new google.maps.Map(eleMap, {
                zoom: 3,
                center: {lat: 41.850, lng: -87.650}
              });
            }
            //Map1
            var eleMap1 = document.getElementById('map1');
            if(eleMap1 !== null){
              var map1 = new google.maps.Map(eleMap1, {
                zoom: 8,
                center: {lat: 35.717, lng: 139.731}
              });
            }
            //Map2
            var eleMap2 = document.getElementById('map2');
            if(eleMap2 !== null){
              var map2 = new google.maps.Map(eleMap2, {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
              });
            }

            var mapOptions = {
              zoom: 12,
              scrollwheel: false,
              center: new google.maps.LatLng(20.192828, 85.853742),
            };

            //GoogleMap
            var mapElement = document.getElementById('googleMap');
            if(mapElement !== null){
              var googleMap = new google.maps.Map(mapElement, mapOptions);
              var marker = new google.maps.Marker({
                position: new google.maps.LatLng(20.192828, 85.853742),
                googleMap: googleMap,
                title: 'Ramble!',
                icon: 'img/googlemap/1.png',
                animation: google.maps.Animation.BOUNCE
              });
            }

            var cairo = {lat: 30.064742, lng: 31.249509};

            //Maplan
            var eleMaplan = document.getElementById('maplan');
            if(eleMaplan !== null){
              var maplan = new google.maps.Map(eleMaplan, {
                scaleControl: true,
                center: cairo,
                zoom: 10
              });
            }

            var infowindow = new google.maps.InfoWindow;
            infowindow.setContent('<b>???????</b>');
            var marker = new google.maps.Marker({map: map, position: cairo});
            marker.addListener('click', function() {
              infowindow.open(map, marker);
            });

            var myLatlng = {lat: -25.363, lng: 131.044};

            //Map6
            var eleMap6 = document.getElementById('map6');
            if(eleMap6 !== null){
                var map6 = new google.maps.Map(eleMap6, {
                zoom: 4,
                center: myLatlng
              });
            }

            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map6,
              title: 'Click to zoom'
            });

            if(map !== undefined){
              map.addListener('center_changed', function() {
                // 3 seconds after the center of the map has changed, pan back to the
                // marker.
                window.setTimeout(function() {
                  map6.panTo(marker.getPosition());
                }, 3000);
              });

              marker.addListener('click', function() {
                map.setZoom(8);
                map.setCenter(marker.getPosition());
              });
            }

            //Map7
            var eleMap7 = document.getElementById('map7');
            if(eleMap7 !== null){
              var map7 = new google.maps.Map(eleMap7, {
                zoom: 4,
                center: {lat: -25.363882, lng: 131.044922 }
              });
            }

            var bounds = {
              north: -25.363882,
              south: -31.203405,
              east: 131.044922,
              west: 125.244141
            };

            // Display the area between the location southWest and northEast.
            if(map !== undefined){
              map.fitBounds(bounds);
            }
            // Add 5 markers to map at random locations.
            // For each of these markers, give them a title with their index, and when
            // they are clicked they should open an infowindow with text from a secret
            // message.
            var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
            var lngSpan = bounds.east - bounds.west;
            var latSpan = bounds.north - bounds.south;
            for (var i = 0; i < secretMessages.length; ++i) {
              var marker = new google.maps.Marker({
                position: {
                  lat: bounds.south + latSpan * Math.random(),
                  lng: bounds.west + lngSpan * Math.random()
                },
                map: map7
              });
              attachSecretMessage(marker, secretMessages[i]);
            }

            // Attaches an info window to a marker with the provided message. When the
            // marker is clicked, the info window will open with the secret message.
            function attachSecretMessage(marker, secretMessage) {
              var infowindow = new google.maps.InfoWindow({
                content: secretMessage
              });

              marker.addListener('click', function() {
                infowindow.open(marker.get('map'), marker);
              });
            }

            var originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);

            //Map8
            var eleMap8 = document.getElementById('map8');
            if(eleMap8 !== null){
              var map8 = new google.maps.Map(eleMap8, {
                zoom: 4,
                center: originalMapCenter
              });
            }

            var infowindow = new google.maps.InfoWindow({
              content: 'Change the zoom level',
              position: originalMapCenter
            });
            infowindow.open(map8);

            if(map !== undefined){
          		map.addListener('zoom_changed', function() {
          			infowindow.setContent('Zoom: ' + map.getZoom());
          		});

          		var coordInfoWindow = new google.maps.InfoWindow();
          		coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
          		coordInfoWindow.setPosition(chicago);
          		coordInfoWindow.open(map);

          		map.addListener('zoom_changed', function() {
          			coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
          			coordInfoWindow.open(map);
          		});
          	}
        }
    }

    function initDataMaps(){
      var url = window.location.href;
      if (url.includes("data-maps")) {
          var da = localStorage.getItem("datamaps");
          if(da !== '1'){
              var basicChoropleth = document.getElementById("basic_choropleth");
              if(basicChoropleth !== null){
              	  var basic_choropleth = new Datamap({
              		  element: basicChoropleth,
              		  projection: 'mercator',
              		  fills: {
              			defaultFill: "#ABDDA4",
              			authorHasTraveledTo: "#fa0fa0"
              		  },
              		  data: {
              			USA: { fillKey: "authorHasTraveledTo" },
              			JPN: { fillKey: "authorHasTraveledTo" },
              			ITA: { fillKey: "authorHasTraveledTo" },
              			CRI: { fillKey: "authorHasTraveledTo" },
              			KOR: { fillKey: "authorHasTraveledTo" },
              			DEU: { fillKey: "authorHasTraveledTo" },
              		  }
                  });
              	  var colors = d3.scale.category10();

              	  window.setInterval(function() {
            			  basic_choropleth.updateChoropleth({
            				USA: colors(Math.random() * 10),
            				RUS: colors(Math.random() * 100),
            				AUS: { fillKey: 'authorHasTraveledTo' },
            				BRA: colors(Math.random() * 50),
            				CAN: colors(Math.random() * 50),
            				ZAF: colors(Math.random() * 50),
            				IND: colors(Math.random() * 50),
            			  });
            			}, 2000);
              }

              var basicMap = document.getElementById("basic_map");
              if(basicMap !== null){
              		var basic = new Datamap({
                      element: basicMap,
                      responsive: true,
                      fills: {
                          defaultFill: "#DBDAD6"
                      },
                      geographyConfig: {
                          highlightFillColor: '#03a9f4',
                          highlightBorderWidth: 0,
                      },
                  });
              }

              var selectMap = document.getElementById("selected_map");
              if(selectMap !== null){
                  var selected_map = new Datamap({
                      element: selectMap,
                      responsive: true,
                      fills: {
                          defaultFill: "#DBDAD6",
                          active: "#03a9f4"
                      },
                      geographyConfig: {
                          highlightFillColor: '#03a9f4',
                          highlightBorderWidth: 0,
                      },
                      data: {
                          USA: { fillKey: "active" },
                          RUS: { fillKey: "active" },
                          DEU: { fillKey: "active" },
                          BRA: { fillKey: "active" }
                      }
                  });
              }

              var usaMap = document.getElementById("usa_map");
              if(usaMap !== null){
                  var usa_map = new Datamap({
                      element: usaMap,
                      responsive: true,
                      scope: 'usa',
                      fills: {
                          defaultFill: "#DBDAD6",
                          active: "#03a9f4"
                      },
                      geographyConfig: {
                          highlightFillColor: '#03a9f4',
                          highlightBorderWidth: 0
                      },
                      data: {
                          NE: { fillKey: "active" },
                          CA: { fillKey: "active" },
                          NY: { fillKey: "active" },
                      }
                  });
              }

              var projMap = document.getElementById("projection_map");
              if(projMap !== null){
            			var map = new Datamap({
                    scope: 'world',
                    element: projMap,
                    projection: 'orthographic',
                    fills: {
                      defaultFill: "#ABDDA4",
                      gt50: colors(Math.random() * 20),
                      eq50: colors(Math.random() * 20),
                      lt25: colors(Math.random() * 10),
                      gt75: colors(Math.random() * 200),
                      lt50: colors(Math.random() * 20),
                      eq0: colors(Math.random() * 1),
                      pink: '#0fa0fa',
                      gt500: colors(Math.random() * 1)
                    },
                    projectionConfig: {
                      rotation: [97,-30]
                    },
                    data: {
                      'USA': {fillKey: 'lt50' },
                      'MEX': {fillKey: 'lt25' },
                      'CAN': {fillKey: 'gt50' },
                      'GTM': {fillKey: 'gt500'},
                      'HND': {fillKey: 'eq50' },
                      'BLZ': {fillKey: 'pink' },
                      'GRL': {fillKey: 'eq0' },
                      'CAN': {fillKey: 'gt50' }
                    }
                  });

                  map.graticule();

                  map.arc([{
                    origin: {
                      latitude: 61,
                      longitude: -149
                    },
                    destination: {
                      latitude: -22,
                      longitude: -43
                    }
                  }], {
                    greatArc: true,
                    animationSpeed: 2000
                  });
              }

              var arcMap = document.getElementById("arc_map");
              if(arcMap !== null){
                  var arc_map = new Datamap({
                      element: arcMap,
                      responsive: true,
                      fills: {
                          defaultFill: "#F2F2F0",
                          active: "#03a9f4",
                          usa: "#03a9f4"
                      },
                      geographyConfig: {
                          highlightFillColor: '#03a9f4',
                          highlightBorderWidth: 0
                      },
                      data: {
                          USA: {fillKey: "usa"},
                          RUS: {fillKey: "active"},
                          DEU: {fillKey: "active"},
                          POL: {fillKey: "active"},
                          JAP: {fillKey: "active"},
                          AUS: {fillKey: "active"},
                          BRA: {fillKey: "active"}
                      }
                  });
              }
          }
      }
    }

    function initPdfMedia(){
      $('a.media').media({width:710, height:950});
    }

    function initXEditable(){
        $.fn.editable.defaults.url = '/post';

        //enable / disable
        $('#enable').click(function() {
           $('#user .editable').editable('toggleDisabled');
       });

        $('#meeting_start').editable({
            format: 'yyyy-mm-dd hh:ii',
            viewformat: 'dd/mm/yyyy hh:ii',
            validate: function(v) {
               if(v && v.getDate() == 10) return 'Day cant be 10!';
            },
            datetimepicker: {
               todayBtn: 'linked',
               weekStart: 1
            }
        });

        //editables
        $('#username').editable({
               url: '/post',
               type: 'text',
               pk: 1,
               name: 'username',
               title: 'Enter username'
        });

        $('#firstname').editable({
            validate: function(value) {
               if($.trim(value) == '') return 'This field is required';
            }
        });

        $('#sex').editable({
            prepend: "not selected",
            source: [
                {value: 1, text: 'Male'},
                {value: 2, text: 'Female'}
            ],
            display: function(value, sourceData) {
                 var colors = {"": "gray", 1: "green", 2: "blue"},
                     elem = $.grep(sourceData, function(o){return o.value == value;});

                 if(elem.length) {
                     $(this).text(elem[0].text).css("color", colors[value]);
                 } else {
                     $(this).empty();
                 }
            }
        });

        $('#status').editable();

        $('#group').editable({
           showbuttons: false
        });

        $('#group1').editable({
           showbuttons: false
        });

        $('#group2').editable({
           showbuttons: false
        });

        $('#group3').editable({
           showbuttons: false
        });

        $('#group4').editable({
           showbuttons: false
        });

        $('#group5').editable({
           showbuttons: false
        });

        $('#group6').editable({
           showbuttons: false
        });

        $('#group7').editable({
           showbuttons: false
        });

        $('#group8').editable({
           showbuttons: false
        });

        $('#group9').editable({
           showbuttons: false
        });

        $('#group10').editable({
           showbuttons: false
        });

        $('#group11').editable({
           showbuttons: false
        });

        $('#vacation').editable({
            datepicker: {
                todayBtn: 'linked'
            }
        });

        $('#dob').editable();

        $('#event').editable({
            placement: 'right',
            combodate: {
                firstItem: 'name'
            }
        });

        $('#comments').editable({
            showbuttons: 'bottom'
        });

        $('#note').editable();

        $('#pencil').on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            $('#note').editable('toggle');
        });

        $('#fruits').editable({
           pk: 1,
           limit: 3,
           source: [
            {value: 1, text: 'banana'},
            {value: 2, text: 'peach'},
            {value: 3, text: 'apple'},
            {value: 4, text: 'watermelon'},
            {value: 5, text: 'orange'}
           ]
        });

        $('#tags').editable({
            inputclass: 'input-large',
            select2: {
                tags: ['html', 'javascript', 'css', 'ajax'],
                tokenSeparators: [",", " "]
            }
        });

        var countries = [];
        $.each({"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Bartelemey", "BM": "Bermuda", "BN": "Brunei Darussalam", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "O1": "Other Country", "LV": "Latvia", "RW": "Rwanda", "RS": "Serbia", "TL": "Timor-Leste", "RE": "Reunion", "LU": "Luxembourg", "TJ": "Tajikistan", "RO": "Romania", "PG": "Papua New Guinea", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "BZ": "Belize", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "TM": "Turkmenistan", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "RU": "Russian Federation", "EE": "Estonia", "EG": "Egypt", "TK": "Tokelau", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "EU": "Europe", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova, Republic of", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania, United Republic of", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "FX": "France, Metropolitan", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands (Malvinas)", "FM": "Micronesia, Federated States of", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "CI": "Cote d'Ivoire", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos (Keeling) Islands", "CA": "Canada", "CG": "Congo", "CF": "Central African Republic", "CD": "Congo, The Democratic Republic of the", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syrian Arab Republic", "KG": "Kyrgyzstan", "KE": "Kenya", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "Korea, Republic of", "SI": "Slovenia", "KP": "Korea, Democratic People's Republic of", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "Virgin Islands, British", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Lao People's Democratic Republic", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "A1": "Anonymous Proxy", "TO": "Tonga", "LT": "Lithuania", "A2": "Satellite Provider", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libyan Arab Jamahiriya", "VA": "Holy See (Vatican City State)", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "Virgin Islands, U.S.", "IS": "Iceland", "IR": "Iran, Islamic Republic of", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AN": "Netherlands Antilles", "AQ": "Antarctica", "AP": "Asia/Pacific Region", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}, function(k, v) {
            countries.push({id: k, text: v});
        });

        $('#country').editable({
            source: countries,
            select2: {
                width: 200,
                placeholder: 'Select country',
                allowClear: true
            }
        });
    }

    function initCodesEditor(){
      var code1 = document.getElementById("code1");
      var code2 = document.getElementById("code2");

      if(code1 !== null){
        var c1 = localStorage.getItem("code1");
        if(c1 !== '1'){
            var editor_one = CodeMirror.fromTextArea(code1, {
               lineNumbers: true,
               matchBrackets: true,
               styleActiveLine: true,
               theme:"ambiance"
            });
            localStorage.setItem("code1","1");
        }
      }

      if(code2 !== null){
        var c2 = localStorage.getItem("code2");
        if(c2 !== '1'){
            var editor_two = CodeMirror.fromTextArea(code2, {
               lineNumbers: true,
               matchBrackets: true,
               styleActiveLine: true
            });
            localStorage.setItem("code2","1");
        }
      }
    }

    function initTreeView(){
      $('#jstree1').jstree({
            'core' : {
                'check_callback' : true
            },
            'plugins' : [ 'types', 'dnd' ],
            'types' : {
                'default' : {
                    'icon' : 'fa fa-folder'
                },
                'html' : {
                    'icon' : 'fa fa-file-code-o'
                },
                'svg' : {
                    'icon' : 'fa fa-file-picture-o'
                },
                'css' : {
                    'icon' : 'fa fa-file-code-o'
                },
                'img' : {
                    'icon' : 'fa fa-file-image-o'
                },
                'js' : {
                    'icon' : 'fa fa-file-text-o'
                }

            }
        });

      $('#using_json').jstree({
            'core' : {
            'data' : [
                'Empty Folder',
                {
                    'text': 'Resources',
                    'state': {
                        'opened': true
                    },
                    'children': [
                        {
                            'text': 'css',
                            'children': [
                                {
                                    'text': 'animate.css', 'icon': 'none'
                                },
                                {
                                    'text': 'bootstrap.css', 'icon': 'none'
                                },
                                {
                                    'text': 'main.css', 'icon': 'none'
                                },
                                {
                                    'text': 'style.css', 'icon': 'none'
                                }
                            ],
                            'state': {
                                'opened': true
                            }
                        },
                        {
                            'text': 'js',
                            'children': [
                                {
                                    'text': 'bootstrap.js', 'icon': 'none'
                                },
                                {
                                    'text': 'inspinia.min.js', 'icon': 'none'
                                },
                                {
                                    'text': 'jquery.min.js', 'icon': 'none'
                                },
                                {
                                    'text': 'jsTree.min.js', 'icon': 'none'
                                },
                                {
                                    'text': 'custom.min.js', 'icon': 'none'
                                }
                            ],
                            'state': {
                                'opened': true
                            }
                        },
                        {
                            'text': 'html',
                            'children': [
                                {
                                    'text': 'layout.html', 'icon': 'none'
                                },
                                {
                                    'text': 'navigation.html', 'icon': 'none'
                                },
                                {
                                    'text': 'navbar.html', 'icon': 'none'
                                },
                                {
                                    'text': 'footer.html', 'icon': 'none'
                                },
                                {
                                    'text': 'sidebar.html', 'icon': 'none'
                                }
                            ],
                            'state': {
                                'opened': true
                            }
                        }
                    ]
                },
                'Fonts',
                'Images',
                'Scripts',
                'Templates',
            ]
        } });
    }

    function initCropperImg(){
      var $image = $(".image-crop > img")
      $($image).cropper({
          aspectRatio: 1.618,
          preview: ".img-preview",
          done: function(data) {
              // Output the result data for cropping image.
          }
      });

      var $inputImage = $("#inputImage");
      if (window.FileReader) {
          $inputImage.change(function() {
              var fileReader = new FileReader(),
                      files = this.files,
                      file;

              if (!files.length) {
                  return;
              }

              file = files[0];

              if (/^image\/\w+$/.test(file.type)) {
                  fileReader.readAsDataURL(file);
                  fileReader.onload = function () {
                      $inputImage.val("");
                      $image.cropper("reset", true).cropper("replace", this.result);
                  };
              } else {
                  showMessage("Please choose an image file.");
              }
          });
      } else {
          $inputImage.addClass("hide");
      }

      $("#download").on('click', function() {
          window.open($image.cropper("getDataURL"));
      });

      $("#zoomIn").on('click', function() {
          $image.cropper("zoom", 0.1);
      });

      $("#zoomOut").on('click', function() {
          $image.cropper("zoom", -0.1);
      });

      $("#rotateLeft").on('click', function() {
          $image.cropper("rotate", 45);
      });

      $("#rotateRight").on('click', function() {
          $image.cropper("rotate", -45);
      });

      $("#setDrag").on('click', function() {
          $image.cropper("setDragMode", "crop");
      });
    }

    function initPies(){
      $("span.pie").peity("pie", {
           fill: ['#a063a8', '#d7d7d7', '#ffffff']
       })

       $(".line").peity("line",{
           fill: '#a063a8',
           stroke:'#169c81',
       })

       $(".bar").peity("bar", {
           fill: ["#a063a8", "#d7d7d7"]
       })

       $(".bar_dashboard").peity("bar", {
           fill: ["#a063a8", "#d7d7d7"],
           width:100
       })

       var updatingChart = $(".updating-chart").peity("line", { fill: '#a063a8',stroke:'#169c81', width: 64 })

       setInterval(function() {
           var random = Math.round(Math.random() * 10)
           var values = updatingChart.text().split(",")
           values.shift()
           values.push(random)

           updatingChart
               .text(values.join(","))
               .change()
       }, 1000);
    }

    function initCharts(){
      var chart = localStorage.getItem("charts");
      var url = window.location.href;
      if(chart !== '1'){
        if (url.includes("bar-charts")) {
          /*--------------------------
           BAR
          ---------------------------- */
          /*----------------------------------------*/
         	/*  1.  Bar Chart
         	/*----------------------------------------*/
         	var ctx = document.getElementById("barchart1");
         	var barchart1 = new Chart(ctx, {
         		type: 'bar',
         		data: {
         			labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
         			datasets: [{
         				label: 'Bar Chart',
         				data: [12, 19, 3, 5, 2, 3],
         				backgroundColor: [
         					'rgba(255, 99, 132, 0.2)',
         					'rgba(54, 162, 235, 0.2)',
         					'rgba(255, 206, 86, 0.2)',
         					'rgba(75, 192, 192, 0.2)',
         					'rgba(153, 102, 255, 0.2)',
         					'rgba(255, 159, 64, 0.2)'
         				],
         				borderColor: [
         					'rgba(255,99,132,1)',
         					'rgba(54, 162, 235, 1)',
         					'rgba(255, 206, 86, 1)',
         					'rgba(75, 192, 192, 1)',
         					'rgba(153, 102, 255, 1)',
         					'rgba(255, 159, 64, 1)'
         				],
         				borderWidth: 1
         			}]
         		},
         		options: {
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  2.  Bar Chart vertical
         	/*----------------------------------------*/
         	var ctx = document.getElementById("barchart2");
         	var barchart2 = new Chart(ctx, {
         		type: 'bar',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
                         label: 'Dataset 1',
         				data: [12, 19, 3, 5, 2, 3, 9],
         				borderWidth: 1,
                         backgroundColor: [
         					'rgba(255, 99, 132, 0.2)',
         					'rgba(54, 162, 235, 0.2)',
         					'rgba(255, 206, 86, 0.2)',
         					'rgba(75, 192, 192, 0.2)',
         					'rgba(153, 102, 255, 0.2)',
         					'rgba(255, 159, 64, 0.2)'
         				],
         				borderColor: [
         					'rgba(255,99,132,1)',
         					'rgba(54, 162, 235, 1)',
         					'rgba(255, 206, 86, 1)',
         					'rgba(75, 192, 192, 1)',
         					'rgba(153, 102, 255, 1)',
         					'rgba(255, 159, 64, 1)'
         				],
                     }, {
                         label: 'Dataset 2',
         				data: [-3, -6, -5, -9, -15, -20],
                         backgroundColor: [
         					'rgba(255, 99, 132, 0.2)',
         					'rgba(54, 162, 235, 0.2)',
         					'rgba(255, 206, 86, 0.2)',
         					'rgba(75, 192, 192, 0.2)',
         					'rgba(153, 102, 255, 0.2)',
         					'rgba(255, 159, 64, 0.2)'
         				],
         				borderColor: [
         					'rgba(255,99,132,1)',
         					'rgba(54, 162, 235, 1)',
         					'rgba(255, 206, 86, 1)',
         					'rgba(75, 192, 192, 1)',
         					'rgba(153, 102, 255, 1)',
         					'rgba(255, 159, 64, 1)'
         				],
         				borderWidth: 1
                     }]
         		},
         		options: {
         			responsive: true,
         			legend: {
         				position: 'top',
         			},
         			title: {
         				display: true,
         				text: 'Bar Chart Vertical'
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  3.  Bar Chart Horizontal
         	/*----------------------------------------*/
         	var ctx = document.getElementById("barchart3");
         	var barchart3 = new Chart(ctx, {
         		type: 'horizontalBar',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
                         label: 'Dataset 1',
         				data: [12, 19, 3, 5, 2, 3, 9],
         				borderWidth: 1,
                         backgroundColor: [
         					'rgba(255, 99, 132, 0.2)',
         					'rgba(54, 162, 235, 0.2)',
         					'rgba(255, 206, 86, 0.2)',
         					'rgba(75, 192, 192, 0.2)',
         					'rgba(153, 102, 255, 0.2)',
         					'rgba(255, 159, 64, 0.2)'
         				],
         				borderColor: [
         					'rgba(255,99,132,1)',
         					'rgba(54, 162, 235, 1)',
         					'rgba(255, 206, 86, 1)',
         					'rgba(75, 192, 192, 1)',
         					'rgba(153, 102, 255, 1)',
         					'rgba(255, 159, 64, 1)'
         				],
                     }, {
                         label: 'Dataset 2',
         				data: [-3, -6, -5, -9, -15, -20],
                         backgroundColor: [
         					'rgba(255, 99, 132, 0.2)',
         					'rgba(54, 162, 235, 0.2)',
         					'rgba(255, 206, 86, 0.2)',
         					'rgba(75, 192, 192, 0.2)',
         					'rgba(153, 102, 255, 0.2)',
         					'rgba(255, 159, 64, 0.2)'
         				],
         				borderColor: [
         					'rgba(255,99,132,1)',
         					'rgba(54, 162, 235, 1)',
         					'rgba(255, 206, 86, 1)',
         					'rgba(75, 192, 192, 1)',
         					'rgba(153, 102, 255, 1)',
         					'rgba(255, 159, 64, 1)'
         				],
         				borderWidth: 1
                     }]
         		},
         		options: {
         			responsive: true,
         			legend: {
         				position: 'top',
         			},
         			title: {
         				display: true,
         				text: 'Bar Chart horizontal'
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  4.  Bar Chart Multi axis
         	/*----------------------------------------*/
         	var ctx = document.getElementById("barchart4");
         	var barchart4 = new Chart(ctx, {
         		type: 'bar',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
                         label: 'Dataset 1',
         				data: [12, 19, 3, 5, 2, 3, 9],
         				borderWidth: 1,
         				yAxisID: "y-axis-1",
                         backgroundColor: [
         					'rgba(255, 99, 132, 0.2)',
         					'rgba(54, 162, 235, 0.2)',
         					'rgba(255, 206, 86, 0.2)',
         					'rgba(75, 192, 192, 0.2)',
         					'rgba(153, 102, 255, 0.2)',
         					'rgba(255, 159, 64, 0.2)'
         				],
         				borderColor: [
         					'rgba(255,99,132,1)',
         					'rgba(54, 162, 235, 1)',
         					'rgba(255, 206, 86, 1)',
         					'rgba(75, 192, 192, 1)',
         					'rgba(153, 102, 255, 1)',
         					'rgba(255, 159, 64, 1)'
         				],
                     }, {
                         label: 'Dataset 2',
         				data: [-3, -6, -5, -9, -15, -20],
         				borderWidth: 1,
         				yAxisID: "y-axis-2",
                         backgroundColor: [
         					'rgba(255, 99, 132, 0.2)',
         					'rgba(54, 162, 235, 0.2)',
         					'rgba(255, 206, 86, 0.2)',
         					'rgba(75, 192, 192, 0.2)',
         					'rgba(153, 102, 255, 0.2)',
         					'rgba(255, 159, 64, 0.2)'
         				],
         				borderColor: [
         					'rgba(255,99,132,1)',
         					'rgba(54, 162, 235, 1)',
         					'rgba(255, 206, 86, 1)',
         					'rgba(75, 192, 192, 1)',
         					'rgba(153, 102, 255, 1)',
         					'rgba(255, 159, 64, 1)'
         				],

                     }]
         		},
         		options: {
         			responsive: true,
         			title:{
         				display:true,
         				text:"Bar Chart Multi Axis"
         			},
         			tooltips: {
         				mode: 'index',
         				intersect: true
         			},
         			scales: {
         				yAxes: [{
         					type: "linear",
         					display: true,
         					position: "left",
         					id: "y-axis-1",
         				}, {
         					type: "linear",
         					display: true,
         					position: "right",
         					id: "y-axis-2",
         					gridLines: {
         						drawOnChartArea: false
         					}
         				}],
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  5.  Bar Chart Stacked
         	/*----------------------------------------*/
         	var ctx = document.getElementById("barchart5");
         	var barchart5 = new Chart(ctx, {
         		type: 'bar',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
                         label: 'Dataset 1',
                         backgroundColor: '#303030',
         				data: [12, 19, 3, -5, -2, 3, 9]
                     }, {
                         label: 'Dataset 2',
                         backgroundColor: '#03a9f4',
         				data: [-10, 15, -7, 7, -2, 4, 9]

                     }, {
                         label: 'Dataset 3',
                        backgroundColor: '#FFC13B',
         			   data: [15, -18, 3, 6, 5, -3, 7]

                     }]
         		},
         		options: {
         			title:{
         				display:true,
         				text:"Bar Chart Stacked"
         			},
         			tooltips: {
         				mode: 'index',
         				intersect: false
         			},
         			responsive: true,
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});

          localStorage.setItem("charts","1");
        }
        if (url.includes("line-charts")) {
          /*--------------------------
           LINE
          ---------------------------- */
         	/*----------------------------------------*/
         	/*  1.  Basic Line Chart
         	/*----------------------------------------*/
         	let draw = Chart.controllers.line.prototype.draw;
          Chart.controllers.line.prototype.draw = function() {
             draw.apply(this, arguments);
             let ctx = this.chart.chart.ctx;
             let _stroke = ctx.stroke;
             ctx.stroke = function() {
                 ctx.save();
                 ctx.shadowColor = '#07C';
                 ctx.shadowBlur = 20;
                 ctx.shadowOffsetX = 2;
                 ctx.shadowOffsetY = 20;
                 _stroke.apply(this, arguments);
                 ctx.restore();
             }
         };
          var ctx = document.getElementById("basiclinechart");
          let myChart = new Chart(ctx, {
             type: 'line',

             data: {
                 labels: ["January", "February", "March", "April", "May", "June", "July"],
                 datasets: [{
                     data: [65, 59, 75, 64, 70, 30, 40],
                     borderColor: '#07C',
                     pointBackgroundColor: "#FFF",
                     pointBorderColor: "#07C",
                     pointHoverBackgroundColor: "#07C",
                     pointHoverBorderColor: "#FFF",
                     pointRadius: 4,
                     pointHoverRadius: 4,
                     fill: false,
                     tension: 0.15
                 }]
             },
             options: {
                 responsive: false,
                 tooltips: {
                     displayColors: false,
                     callbacks: {
                         label: function(e, d) {
                             return;
                         },
                         title: function() {
                             return;
                         }
                     }
                 },
                 legend: {
                     display: false
                 },
                 scales: {
                     yAxes: [{
                         ticks: {
                             max: 90
                         }
                     }]
                 }
             }
          });
        	/*----------------------------------------*/
         	/*  2.  Line Chart Multi axis
         	/*----------------------------------------*/
         	var ctx = document.getElementById("linechartmultiaxis");
         	var linechartmultiaxis = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
         				label: "My First dataset",
         				fill: false,
                         backgroundColor: '#303030',
         				borderColor: '#303030',
         				data: [3, -5, -2, 3, 9, 12, 19],
         				yAxisID: "y-axis-1"
                     }, {
                         label: "My Second dataset",
         				fill: false,
                         backgroundColor: '#03a9f4',
         				borderColor: '#03a9f4',
         				data: [-12, -3, -4, 6, 3, 7, -20],
         				yAxisID: "y-axis-2"

         		}]
         		},
         		options: {
         			responsive: true,
         			hoverMode: 'index',
         			stacked: false,
         			title:{
         				display: true,
         				text:'Line Chart Multi Axis'
         			},
         			scales: {
         				yAxes: [{
         					type: "linear",
         					display: true,
         					position: "left",
         					id: "y-axis-1",
         				}, {
         					type: "linear",
         					display: true,
         					position: "right",
         					id: "y-axis-2",
         					gridLines: {
         						drawOnChartArea: false,
         					},
         				}],
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  3.  Line Chart stepped
         	/*----------------------------------------*/
         	var ctx = document.getElementById("linechartstepped");
         	var linechartstepped = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
         			datasets: [{
         				label: "steppedLine",
         				fill: false,
                         backgroundColor: '#303030',
         				borderColor: '#303030',
         				data: [3, -5, -2, 3, 9, 12, 19]
                     }]
         		},
         		options: {
         			responsive: true,
         			title: {
         				display: true,
         				text:'Line Chart stepped',
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  4.  Line Chart Interpolation
         	/*----------------------------------------*/
         	var ctx = document.getElementById("linechartinterpolation");
         	var linechartinterpolation = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
         			datasets: [{
         				label: "Cubic interpolation",
         				fill: false,
                         backgroundColor: '#303030',
         				borderColor: '#303030',
         				data: [0, 15, 17, 200, 0, 12, -200, 5, 200, 8, 200, 12, 200],
         				cubicInterpolationMode: 'monotone'
                     }, {
                         label: "Cubic interpolation",
         				fill: false,
                         backgroundColor: '#03a9f4',
         				borderColor: '#03a9f4',
         				data: [-100, 200, 12, -200, 12, 200, 8, -200, 9, 200, -200, -12, -200]

         		}, {
                         label: "Linear interpolation",
         				fill: false,
                         backgroundColor: '#ff0000',
         				borderColor: '#ff0000',
         				data: [-8, -9, -10, -11, 0, 0, 0, 12, 10, 8, 9, 7, 12],
         				lineTension: 0

         		}]
         		},
         		options: {
         			responsive: true,
         			title:{
         				display:true,
         				text:'Line Chart interpolation'
         			},
         			tooltips: {
         				mode: 'index'
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  5.  Line Chart styles
         	/*----------------------------------------*/
         	var ctx = document.getElementById("linechartstyles");
         	var linechartstyles = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
         				label: "Unfilled",
         				fill: false,
                         backgroundColor: '#303030',
         				borderColor: '#303030',
         				data: [0, 15, 17, 200, 0, 12, -200, 5]
                     }, {
                         label: "Dashed",
         				fill: false,
                         backgroundColor: '#03a9f4',
         				borderColor: '#03a9f4',
         				borderDash: [5, 5],
         				data: [-100, 200, 12, -200, 12, 200, 8]

         		}, {
                         label: "Filled",
         				fill: true,
                         backgroundColor: '#ff0000',
         				borderColor: '#ff0000',
         				data: [-200, -9, 200, -11, 0, -200, 0]

         		}]
         		},
         		options: {
         			responsive: true,
         			title:{
         				display:true,
         				text:'Line Chart Style'
         			},
         			tooltips: {
         				mode: 'index',
         				intersect: false,
         			},
         			hover: {
         				mode: 'nearest',
         				intersect: true
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  6.  Line Chart point circle
         	/*----------------------------------------*/
         	var ctx = document.getElementById("linechartpointcircle");
         	var linechartpointcircle = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
         				label: "My First dataset",
         				backgroundColor: '#03a9f4',
         				borderColor: '#03a9f4',
         				data: [0, 10, 20, 30, 40, 50, 60],
         				fill: false,
         				pointRadius: 4,
         				pointHoverRadius: 10,
         				showLine: false
         			}]
         		},
         		options: {
         			responsive: true,
         			title:{
         				display:true,
         				text:'Line Chart Point Circle'
         			},
         			legend: {
         				display: false
         			},
         			elements: {
         				point: {
         					pointStyle: 'circle',
         				}
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});

          localStorage.setItem("charts","1");
        }
        if (url.includes("rounded-charts")) {
          /*--------------------------
           PIE ROUNDED
          ---------------------------- */
          /*----------------------------------------*/
         	/*  1.  pie Chart
         	/*----------------------------------------*/
         	var ctx = document.getElementById("piechart");
         	var piechart = new Chart(ctx, {
         		type: 'pie',
         		data: {
         			labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
         			datasets: [{
         				label: 'pie Chart',
                         backgroundColor: [
         					'rgb(255, 99, 132)',
         					'rgb(255, 159, 64)',
         					'rgb(255, 205, 86)',
         					'#03a9f4',
         					'#303030'
         				],
         				data: [10, 20, 30, 40, 60]
                     }]
         		},
         		options: {
         			responsive: true
         		}
         	});
         	/*----------------------------------------*/
         	/*  2.  polar Chart
         	/*----------------------------------------*/
         	var ctx = document.getElementById("polarchart");
         	var polarchart = new Chart(ctx, {
         		type: 'polarArea',
         		data: {
         			labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
         			datasets: [{
         				label: 'pie Chart',
         				data: [10, 20, 30, 40, 60],
                         backgroundColor: [
         					'rgb(255, 99, 132)',
         					'rgb(255, 159, 64)',
         					'rgb(255, 205, 86)',
         					'#03a9f4',
         					'rgb(201, 203, 207)'
         				],

                     }]
         		},
         		options: {
                     responsive: true,
                     legend: {
                          position: 'right',
                     },
                     title: {
                         display: true,
                         text: 'Polar Chart'
                     },
                     scale: {
                       ticks: {
                         beginAtZero: true
                       },
                       reverse: false
                     },
                     animation: {
                         animateRotate: false,
                         animateScale: true
                     }
                 }
         	});
         	/*----------------------------------------*/
         	/*  3.  radar Chart
         	/*----------------------------------------*/
         	var ctx = document.getElementById("radarchart");
         	var radarchart = new Chart(ctx, {
         		type: 'radar',
         		data: {
         			labels: ["Design", "Development", "Graphic", "Android", "Games"],
         			datasets: [{
         				label: "My First dataset",
         				data: [90, 20, 30, 40, 10],
                         backgroundColor: 'rgb(255, 99, 132)',
                         borderColor: 'rgb(255, 99, 132)',
                         pointBackgroundColor: '#ff0000',

                     },{
         				label: "My Second dataset",
         				data: [50, 20, 10, 30, 90],
                         backgroundColor: 'rgb(255, 159, 64)',
                         borderColor: 'rgb(255, 159, 64)',
                         pointBackgroundColor: '#ff0000',

                     }]
         		},
         		options: {
                     legend: {
                         position: 'top',
                     },
                     title: {
                         display: true,
                         text: 'Radar Chart'
                     },
                     scale: {
                       ticks: {
                         beginAtZero: true
                       }
                     }
                 }
         	});
         	/*----------------------------------------*/
         	/*  4.  Doughnut Chart
         	/*----------------------------------------*/
         	var ctx = document.getElementById("Doughnutchart");
         	var Doughnutchart = new Chart(ctx, {
         		type: 'radar',
         		data: {
         			labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
         			datasets: [{
         				label: 'Dataset 1',
         				data: [10, 20, 30, 40, 90],
                         backgroundColor: 'rgb(255, 99, 132)'

                     }]
         		},
         		options: {
                     responsive: true,
                     legend: {
                         position: 'top',
                     },
                     title: {
                         display: true,
                         text: 'Doughnut Chart'
                     },
                     animation: {
                         animateScale: true,
                         animateRotate: true
                     }
                 }
         	});

          localStorage.setItem("charts","1");
        }
        if (url.includes("area-charts")) {
          /*--------------------------
           AREA
          ---------------------------- */
          /*----------------------------------------*/
         	/*  1.  Area Chart
         	/*----------------------------------------*/
         	var ctx = document.getElementById("areachartfalse");
         	var areachartfalse = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
         				label: "My First dataset",
         				fill: false,
                         backgroundColor: '#303030',
         				borderColor: '#303030',
         				data: [0, -20, 20, -20, 20, -20, 20]
                     }]
         		},
         		options: {
         			responsive: true,
         			maintainAspectRatio: false,
         			spanGaps: false,
         			title:{
         				display:true,
         				text:'Area Chart Fill False'
         			},
         			elements: {
         				line: {
         					tension: 0.000001
         				}
         			},
         			plugins: {
         				filler: {
         					propagate: false
         				}
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  2.  Area Chart origin
         	/*----------------------------------------*/
         	var ctx = document.getElementById("areachartorigin");
         	var areachartorigin = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
         				label: "My First dataset",
         				fill: 'origin',
                         backgroundColor: '#03a9f4',
         				borderColor: '#03a9f4',
         				data: [0, -20, 20, -20, 20, -20, 20]
                     }]
         		},
         		options: {
         			responsive: true,
         			maintainAspectRatio: false,
         			spanGaps: false,
         			title:{
         				display:true,
         				text:'Area Chart Fill origin'
         			},
         			elements: {
         				line: {
         					tension: 0.000001
         				}
         			},
         			plugins: {
         				filler: {
         					propagate: false
         				}
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  3.  Area Chart start
         	/*----------------------------------------*/
         	var ctx = document.getElementById("areachartfillstart");
         	var areachartfillstart = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
         				label: "My First dataset",
         				fill: 'start',
                         backgroundColor: '#03a9f4',
         				borderColor: '#03a9f4',
         				data: [0, 10, 20, 30, 40, 50, 100]
                     }]
         		},
         		options: {
         			responsive: true,
         			maintainAspectRatio: false,
         			spanGaps: false,
         			title:{
         				display:true,
         				text:'Area Chart Fill start'
         			},
         			elements: {
         				line: {
         					tension: 0.000001
         				}
         			},
         			plugins: {
         				filler: {
         					propagate: false
         				}
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  4.  Area Chart end
         	/*----------------------------------------*/
         	var ctx = document.getElementById("areachartend");
         	var areachartend = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
         				label: "My First dataset",
         				fill: 'end',
                         backgroundColor: '#303030',
         				borderColor: '#303030',
         				data: [100, 90, 70, 60, 50, 40, 0]
                     }]
         		},
         		options: {
         			responsive: true,
         			maintainAspectRatio: false,
         			spanGaps: false,
         			title:{
         				display:true,
         				text:'Area Chart Fill end'
         			},
         			elements: {
         				line: {
         					tension: 0.000001
         				}
         			},
         			plugins: {
         				filler: {
         					propagate: false
         				}
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  5.  Area Chart Datasets
         	/*----------------------------------------*/
         	var ctx = document.getElementById("areachartDatasets");
         	var areachartDatasets = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
         				label: 'D0',
                         backgroundColor: '#303030',
         				borderColor: '#303030',
         				data: [100, 90, 70, 60, 50, 40, 0]
                     },{
         				label: 'D1',
         				fill: true,
                         backgroundColor: '#03a9f4',
         				borderColor: '#03a9f4',
         				data: [100, 90, 70, 60, 50, 40, 0]
                     },{
         				label: 'D2',
         				fill: true,
                         backgroundColor: '#ff0000',
         				borderColor: '#ff0000',
         				data: [100, 90, 70, 60, 50, 40, 0]
                     }]
         		},
         		options:{
         			maintainAspectRatio: false,
         			spanGaps: false,
         			elements: {
         				line: {
         					tension: 0.000001
         				}
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			},
         			plugins: {
         				filler: {
         					propagate: false
         				},
         				samples_filler_analyser: {
         					target: 'chart-analyser'
         				}
         			}
         		}
         	});
         	/*----------------------------------------*/
         	/*  6.  Area Chart Legend
         	/*----------------------------------------*/
         	var ctx = document.getElementById("areachartLegend");
         	var areachartLegend = new Chart(ctx, {
         		type: 'line',
         		data: {
         			labels: ["January", "February", "March", "April", "May", "June", "July"],
         			datasets: [{
         				label: "My First dataset",
                         backgroundColor: 'rgb(255, 99, 132)',
         				borderColor: 'rgb(255, 159, 64)',
         				data: [100, 90, 70, 60, 50, 40, 0],
         				borderWidth: 1,
         				pointStyle: 'rectRot',
         				pointRadius: 5,
         				pointBorderColor: 'rgb(0, 0, 0)'
                     }]
         		},
         		options: {
         			responsive: true,
         			legend: {
         				labels: {
         					usePointStyle: false
         				}
         			},
         			scales: {
         				xAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}],
         				yAxes: [{
         					ticks: {
         						autoSkip: false,
         						maxRotation: 0
         					},
         					ticks: {
         					  fontColor: "#fff", // this here
         					}
         				}]
         			},
         			title: {
         				display: true,
         				text: 'Normal Legend'
         			}
         		}
         	});

          localStorage.setItem("charts","1");
        }
        if (url.includes("c3-charts")) {
          /*--------------------------
          C3
          ---------------------------- */
          c3.generate({
              bindto: '#lineChart',
              data:{
                  columns: [
                      ['data1', 30, 200, 100, 400, 150, 250],
                      ['data2', 50, 20, 10, 40, 15, 25]
                  ],
                  colors:{
                      data1: '#a063a8',
                      data2: '#303030'
                  }
              }
          });
          c3.generate({
              bindto: '#slineChart',
              data:{
                  columns: [
                      ['data1', 30, 200, 100, 400, 150, 250],
                      ['data2', 130, 100, 140, 200, 150, 50]
                  ],
                  colors:{
                      data1: '#a063a8',
                      data2: '#303030'
                  },
                  type: 'spline'
              }
          });
          c3.generate({
              bindto: '#scatter',
              data:{
                  xs:{
                      data1: 'data1_x',
                      data2: 'data2_x'
                  },
                  columns: [
                      ["data1_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                      ["data2_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
                      ["data1", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                      ["data2", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
                  ],
                  colors:{
                      data1: '#a063a8',
                      data2: '#303030'
                  },
                  type: 'scatter'
              }
          });
          c3.generate({
              bindto: '#stocked',
              data:{
                  columns: [
                      ['data1', 30,200,100,400,150,250],
                      ['data2', 50,20,10,40,15,25]
                  ],
                  colors:{
                      data1: '#a063a8',
                      data2: '#303030'
                  },
                  type: 'bar',
                  groups: [
                      ['data1', 'data2']
                  ]
              }
          });
          c3.generate({
              bindto: '#gauge',
              data:{
                  columns: [
                      ['data', 91.4]
                  ],

                  type: 'gauge'
              },
              color:{
                  pattern: ['#a063a8', '#303030']

              }
          });
          c3.generate({
              bindto: '#pie',
              data:{
                  columns: [
                      ['data1', 30],
                      ['data2', 120]
                  ],
                  colors:{
                      data1: '#a063a8',
                      data2: '#303030'
                  },
                  type : 'pie'
              }
          });

          localStorage.setItem("charts","1");
        }
      }
    }
    /*--------------------------
		 END FUNCTIONS CMVB
		---------------------------- */

		/*--------------------------
		 START actives scripts
		---------------------------- */
    $(window).on("load",function(){
        activeScrollCustom();
        activeSparkLines();
        activeGraphicsCustom();
        activeSkyIconsCustom();
        activeKnobsCircleBarCustom();
        initMap();
        initPdfMedia();
        initXEditable();
        initCodesEditor();
        initTreeView();
        initCropperImg();
        initPies();
        initCharts();
        localStorage.setItem("mouseover","0");
        localStorage.setItem("mouseout","0");
    });
    $(window).on("mouseover",function(){
        var mo = localStorage.getItem("mouseover");
        if(mo !== '1'){
          activeScrollCustom();
          activeSparkLines();
          activeGraphicsCustom();
          activeSkyIconsCustom();
          activeKnobsCircleBarCustom();
          initMap();
          initDataMaps();
          initPdfMedia();
          initXEditable();
          initCodesEditor();
          initTreeView();
          initCropperImg();
          initPies();
          initCharts();
          localStorage.setItem("datamaps","1");
          localStorage.setItem("mouseover","1");
        }
    });
    $(window).on("mouseout",function(){
      var mo = localStorage.getItem("mouseout");
      if(mo !== '1'){
        activeScrollCustom();
        activeSparkLines();
        activeGraphicsCustom();
        activeSkyIconsCustom();
        activeKnobsCircleBarCustom();
        initMap();
        initDataMaps();
        initPdfMedia();
        initXEditable();
        initCodesEditor();
        initCropperImg();
        initPies();
        initCharts();
        localStorage.setItem("datamaps","1");
        localStorage.setItem("mouseout","1");
      }
    });
    /*--------------------------
		 END actives scripts
		---------------------------- */

		// Collapse Chat function
			$('.chat-icon-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-comments').toggleClass('fa-remove');
			});
		// Collapse ibox function
			$('.collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline-content" ).slideToggle( "slow" );
			});
			$(".collapse-close").on('click', function(){
				$( "div.about-sparkline" ).fadeOut( 600 );
			});

		// Collapse ibox function
			$('.smart-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".smart-sparkline-list" ).slideToggle( "slow" );
			});
			$(".smart-collapse-close").on('click', function(){
				$( "div.sparkline-list" ).fadeOut( 600 );
			});


		// Collapse ibox function
			$('.sparkline7-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline7-graph" ).slideToggle( "slow" );
			});
			$(".sparkline7-collapse-close").on('click', function(){
				$( "div.sparkline7-list" ).fadeOut( 600 );
			});
		// Collapse ibox function
			$('.sparkline8-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline8-graph" ).slideToggle( "slow" );
			});
			$(".sparkline8-collapse-close").on('click', function(){
				$( "div.sparkline8-list" ).fadeOut( 600 );
			});


		// Collapse ibox function
			$('.sparkline9-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline9-graph" ).slideToggle( "slow" );
			});
			$(".sparkline9-collapse-close").on('click', function(){
				$( "div.sparkline9-list" ).fadeOut( 600 );
			});

		// Collapse ibox function
			$('.sparkline10-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline10-graph" ).slideToggle( "slow" );
			});
			$(".sparkline10-collapse-close").on('click', function(){
				$( "div.sparkline10-list" ).fadeOut( 600 );
			});
		// Collapse ibox function
			$('.sparkline11-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline11-graph" ).slideToggle( "slow" );
			});
			$(".sparkline11-collapse-close").on('click', function(){
				$( "div.sparkline11-list" ).fadeOut( 600 );
			});


		// Collapse ibox function
			$('.sparkline12-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline12-graph" ).slideToggle( "slow" );
			});
			$(".sparkline12-collapse-close").on('click', function(){
				$( "div.sparkline12-list" ).fadeOut( 600 );
			});

		// Collapse ibox function
			$('.sparkline13-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline13-graph" ).slideToggle( "slow" );
			});
			$(".sparkline13-collapse-close").on('click', function(){
				$( "div.sparkline13-list" ).fadeOut( 600 );
			});

		// Collapse ibox function
			$('.sparkline14-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline14-graph" ).slideToggle( "slow" );
			});
			$(".sparkline14-collapse-close").on('click', function(){
				$( "div.sparkline14-list" ).fadeOut( 600 );
			});

		// Collapse ibox function
			$('.sparkline15-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline15-graph" ).slideToggle( "slow" );
			});
			$(".sparkline15-collapse-close").on('click', function(){
				$( "div.sparkline15-list" ).fadeOut( 600 );
			});

		// Collapse ibox function
			$('.sparkline16-collapse-link').on('click', function () {
				var button = $(this).find('i');
				button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				$( ".sparkline16-graph" ).slideToggle( "slow" );
			});
			$(".sparkline16-collapse-close").on('click', function(){
				$( "div.sparkline16-list" ).fadeOut( 600 );
			});



})(jQuery);
