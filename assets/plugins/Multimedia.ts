class Multimedia {
    audio: HTMLAudioElement;
    boton_PlayOrPause: HTMLAudioElement;
    pausado: boolean;
    imagen_PlayOrPause: HTMLElement;
    constructor() {
        //Declarar variables necesarias
        this.pausado = true;
        //Traer objetos del DOM
            //Trer botones
        this.audio = document.querySelector("#audio_en_vivo");
        this.boton_PlayOrPause= document.querySelector("#boton_PlayOrPause");
            //Traer imagenes
        this.imagen_PlayOrPause = document.getElementById("PLay_Pause_image");
        //Poner en la escucha los botones

        this.boton_PlayOrPause.onclick= () => this.playOrPause();
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
}

export default Multimedia