class Multimedia {
    constructor() {
        //Declarar variables necesarias
        this.pausado = true;
        this.volume_grow = 0.1;
        //Traer objetos del DOM
        this.audio = document.querySelector("#audio_en_vivo");
        this.audio.volume = 0.5;
            //Trer botones
            this.boton_PlayOrPause = document.querySelector("#boton_PlayOrPause");
/*             this.boton_MoreVolume = document.querySelector("#button_mas_volume");
            this.boton_LessVolume = document.querySelector("#button_menos_volume"); */
            this.boton_Mute = document.querySelector("#button_mute_volume");
            //Traer imagenes
            this.imagen_PlayOrPause = document.getElementById("PLay_Pause_image");
            this.imagen_muteOrMute = document.getElementById("imagen_muteOrMute");
            //Poner en la escucha los botones
            this.boton_PlayOrPause.onclick= () => this.playOrPause();
/*             this.boton_MoreVolume.onclick = () => this.more_volume();
            this.boton_LessVolume.onclick = () => this.less_volume(); */
            this.boton_Mute.onclick = () => this.muteOrUnmute_volume();
    }
    playOrPause() {
        if (this.pausado) {
            this.audio.play();
            this.imagen_PlayOrPause.src ="https://img.icons8.com/android/24/000000/pause.png";
            this.pausado = false;
        }else {
            this.audio.pause();
            this.imagen_PlayOrPause.src ="https://img.icons8.com/android/24/000000/play.png";
            this.pausado = true;
        }
    }
    more_volume() {
        if (this.audio.volume < 0.95){
            this.audio.volume += this.volume_grow;
        }
    }
    less_volume() {
        if (this.audio.volume > 0.11){
            this.audio.volume -= this.volume_grow;
            console.log(this.audio.volume);
        }else if (this.audio.volume < 0.11){
            this.audio.volume= 0;
        }
    }
    muteOrUnmute_volume() {
        if (this.audio.volume === 0){
            this.audio.volume = 0.5;
            this.imagen_muteOrMute.src ="https://img.icons8.com/ios-filled/50/000000/room-sound.png";
        }else {
            this.audio.volume = 0;
            console.log(this.audio.volume);
            this.imagen_muteOrMute.src ="https://img.icons8.com/carbon-copy/100/000000/mute.png";
        }
    }
}

const reproductor = new Multimedia;