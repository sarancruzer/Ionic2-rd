import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, PopoverController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';
import { Search } from '../../pages/search/search';
import { ViewNgo } from '../../pages/view-ngo/view-ngo';
declare var google;
/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
    locations = [
            {lat: 13.1062301, lng: 80.09857178,title:"Join Hands1"},
            {lat: 13.0594125, lng: 80.23452759,title:"Join Hands2"},
            {lat: 13.04068298, lng: 80.23521423,title:"Join Hands3"},
            {lat: 12.99719826, lng: 80.11779785,title:"Join Hands4"},
            {lat: 12.95437509, lng: 80.14320374,title:"Join Hands5"},
            {lat: 12.92225288, lng: 80.11505127,title:"Join Hands6"},
            {lat: 12.90418232, lng: 80.0944519,title:"Join Hands7"},
            {lat: 12.91723341, lng: 80.19435883,title:"Join Hands8"},
            {lat: 12.90786346, lng: 80.14251709,title:"Join Hands9"},
            {lat: 12.91957584, lng: 80.23178101,title:"Join Hands10"},
            {lat: 12.84494189, lng: 80.22628784,title:"Join Hands11"},
            {lat: 12.80410137, lng: 80.22457123,title:"Join Hands12"},
            {lat: 12.78535268, lng: 80.21770477,title:"Join Hands13"},
            {lat: 11.78939135, lng: 77.8024292,title:"Join Hands14"},
            {lat: 11.33867859, lng: 77.72277832,title:"Join Hands15"},
            {lat: 11.01264455, lng: 76.95648193,title:"Join Hands16"},
            {lat: 9.92691865, lng: 78.12103271,title:"Join Hands17"},
            {lat: 8.18158655, lng: 77.4206543,title:"Join Hands18"},
            {lat: 8.71407376, lng: 77.76123047,title:"Join Hands19"}
        ];
	@ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, private platform:Platform, public geolocation: Geolocation,public popoverCtrl: PopoverController) {
   this.platform.ready().then(() => {
    this.loadMap();
   });
  }
 
  ionViewDidLoad(){
   // this.loadMap();
  }
 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     
      let mapOptions = {
        center: latLng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#15CA93'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#15CA93'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      //let lat=[]
      for(let i=0;i<this.locations.length;i++){
     this.addMarker(this.locations[i].lat, this.locations[i].lng,this.locations[i].title);
   }
    }, (err) => {
      console.log(err);
    });
 
  }
 addMarker(lat,lng,title){
  let myLatlng = new google.maps.LatLng(lat,lng);
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: myLatlng,
  });
  let content = "<div class='ngoWindow'><h2 class='ngo-wintitle'><strong>"+title+"</strong></h2> <a id='clickableItem'>view more...</a></div>";          
  
  this.addInfoWindow(marker, content);
 
}
addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
    //this.navCtrl.push(ViewNgo);
  });
  google.maps.event.addListener(infoWindow, 'domready', () => {
  //now my elements are ready for dom manipulation
  var clickableItem = document.getElementById('clickableItem');
  clickableItem.addEventListener('click', () => {
    this.viewngo();
  });
});
 
}
viewngo(){
  this.navCtrl.push(ViewNgo);
}
presentActionSheet(myEvent) {
     let popover = this.popoverCtrl.create(Search);
    popover.present({
      ev: myEvent
    });
  }
}
