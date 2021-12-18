import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moveo';


  public audio1 = new Audio('../assets/breakbeats.mp3');
  public audio2 = new Audio('../assets/funk.mp3');
  public audio3 = new Audio('../assets/guitar.mp3');
  public audio4 = new Audio('../assets/MazePolitics.mp3');
  public audio5 = new Audio('../assets/PAS3GROOVE.mp3');
  public audio6 = new Audio('../assets/SilentSt.mp3');
  public audio7 = new Audio('../assets/StompySlosh.mp3');
  public audio8 = new Audio('../assets/Tanggu.mp3');

  public audios = [this.audio1,this.audio2,this.audio3,this.audio4,this.audio5,this.audio6,this.audio7,this.audio8];

  public isPaused1:boolean = true;
  public isPaused2:boolean = true;
  public isPaused3:boolean = true;
  public isPaused4:boolean = true;
  public isPaused5:boolean = true;
  public isPaused6:boolean = true;
  public isPaused7:boolean = true;
  public isPaused8:boolean = true;

  public isLooping:boolean = true;
  

  


  play() {

    for (let index = 0; index < this.audios.length; index++) {
      const song = this.audios[index];
      song.load();
      song.play();

    }


  }

  stop() {

    for (let index = 0; index < this.audios.length; index++) {
      const song = this.audios[index];
      song.pause();
      song.currentTime = 0;
      song.loop = false;
      


    }

  }

  loop() {

    for (let index = 0; index < this.audios.length; index++) {
      console.log(this.isLooping);
      
      if(this.isLooping){
      const song = this.audios[index];
      song.loop = true;
      console.log(song);
      }
      else if(!this.isLooping){
        console.log(this.isLooping);
        const song = this.audios[index];
        song.loop = false;
      }
    }
    
    if(this.isLooping){
      this.isLooping = false;
    }else if(!this.isLooping){
      this.isLooping = true;
    }
    console.log("************" + this.isLooping);
    


    

  }

  muttingAudio1(event: Event) {
    let firstoggle = document.getElementById("firstToggle");
    console.dir(firstoggle);
    

    if (firstoggle.id === "firstToggle") {
      if (!this.isPaused1) {
        this.audio1.volume = 1;
        // firstoggle.innerHTML = '<span class="glyphicon glyphicon-volume-up"></span>';
        this.isPaused1 = true;
        console.log("audio1 is playing");
      } else if (this.isPaused1) {
        this.audio1.volume = 0;
        // firstoggle.innerHTML = '<span class="glyphicon glyphicon-volume-off"></span>';
        this.isPaused1 = false;
        console.log("audio1 has been muted");
      } else {
        console.log("jueputa");

      }
    }
  }

  muttingAudio2(event: Event) {
    let secondtoggle = document.getElementById("secondToggle");
    console.dir(secondtoggle);

    if (secondtoggle.id === "secondToggle") {
      if (!this.isPaused2) {
        this.audio2.volume = 1;
        this.isPaused2 = true;
        console.log("audio2 is playing");
      } else if (this.isPaused2) {
        this.audio2.volume = 0;
        this.isPaused2 = false;
        console.log("audio2 has been muted");
      } else {
        console.log("jueputa");

      }

    }
  }

  muttingAudio3(event: Event) {
    let thirdtoggle = document.getElementById("thirdToggle");
    console.dir(thirdtoggle);

    if (thirdtoggle.id === "thirdToggle") {
      if (!this.isPaused3) {
        this.audio3.volume = 1;
        this.isPaused3 = true;
        console.log("audio3 is playing");
      } else if (this.isPaused3) {
        this.audio3.volume = 0;
        this.isPaused3 = false;
        console.log("audio3 has been muted");
      } else {
        console.log("jueputa");

      }

    }


  }

  muttingAudio4(event: Event) {
    let fourthtoggle = document.getElementById("fourthToggle");
    console.dir(fourthtoggle);

    if (fourthtoggle.id === "fourthToggle") {
      if (!this.isPaused4) {
        this.audio4.volume = 1;
        this.isPaused4 = true;
        console.log("audio4 is playing");
      } else if (this.isPaused4) {
        this.audio4.volume = 0;
        this.isPaused4 = false;
        console.log("audio4 has been muted");
      } else {
        console.log("jueputa");

      }

    }
  }

  muttingAudio5(event: Event) {
    let fifthtoggle = document.getElementById("fifthToggle");
    console.dir(fifthtoggle);

    if (fifthtoggle.id === "fifthToggle") {
      if (!this.isPaused5) {
        this.audio5.volume = 1;
        this.isPaused5 = true;
        console.log("audio5 is playing");
      } else if (this.isPaused5) {
        this.audio5.volume = 0;
        this.isPaused5 = false;
        console.log("audio5 has been muted");
      } else {
        console.log("jueputa");

      }

    }
  }

  muttingAudio6(event: Event) {
    let sixthtoggle = document.getElementById("sixthToggle");
    console.dir(sixthtoggle);

    if (sixthtoggle.id === "sixthToggle") {
      if (!this.isPaused6) {
        this.audio6.volume = 1;
        this.isPaused6 = true;
        console.log("audio6 is playing");
      } else if (this.isPaused6) {
        this.audio6.volume = 0;
        this.isPaused6 = false;
        console.log("audio6 has been muted");
      } else {
        console.log("jueputa");

      }

    }
  }

  muttingAudio7(event: Event) {
    let seventhtoggle = document.getElementById("seventhToggle");
    console.dir(seventhtoggle);

    if (seventhtoggle.id === "seventhToggle") {
      if (!this.isPaused7) {
        this.audio7.volume = 1;
        this.isPaused7 = true;
        console.log("audio7 is playing");
      } else if (this.isPaused7) {
        this.audio7.volume = 0;
        this.isPaused7 = false;
        console.log("audio7 has been muted");
      } else {
        console.log("jueputa");

      }

    }
  }


  muttingAudio8(event: Event) {
    let eighthtoggle = document.getElementById("eighthToggle");
    console.dir(eighthtoggle);

    if (eighthtoggle.id === "eighthToggle") {
      if (!this.isPaused8) {
        this.audio8.volume = 1;
        this.isPaused8 = true;
        console.log("audio8 is playing");
      } else if (this.isPaused8) {
        this.audio8.volume = 0;
        this.isPaused8 = false;
        console.log("audio8 has been muted");
      } else {
        console.log("jueputa");

      }

    }
}

}
