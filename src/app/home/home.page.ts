import { Component, OnDestroy } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { AuthService } from '../providers/auth/auth.service';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

//import { userDb } from '../interfaces/users'





@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  fondoColor = 'green';
  imgCandado = '../../assets/images/candadoCerrado.png';
  encedido = false;
  subscription: any;
  x:string;
  y:string;
  z:string;
  timeSpam:string;
  public isLeft: any;
  public isRight: any;
  public isVertial: any;
  public isHorizontal: any;
  public audioDios;
  public audioHurtando;
  public audioEpa;
  public audioDejalo;
  // posicion:posiciones;

  constructor(
    private router: Router, 
    private loginService: AuthService,
    private deviceMotion: DeviceMotion,
    private vibration: Vibration,
    private flashlight: Flashlight,
    private screenOrientation: ScreenOrientation,
    public modalCtrl: ModalController,
    private alertController: AlertController
  ) { 
    this.x=".";
    this.y=".";
    this.z=".";
    this.timeSpam="-";
    this.isLeft = false;
    this.isRight = false;
    this.isVertial = false;
    this.isHorizontal = true;
    this.audioDios = new Audio('../../assets/audio/dios.m4a');
    this.audioHurtando = new Audio('../../assets/audio/hurtando.m4a');
    this.audioEpa = new Audio('../../assets/audio/epa.m4a');
    this.audioDejalo = new Audio('../../assets/audio/dejalo.m4a');
  }

  async activarAlarma(){

    this.encedido = (this.encedido) ? false : true;

    if(this.encedido){
      this.imgCandado = '../../assets/images/candadoAbierto.png';
      this.fondoColor = 'danger';
      this.start()
    }else{

      const alert = await this.alertController.create({ 
        header: 'Ingrese su contraseña',
        inputs: [{ name: 'password', type: 'password', placeholder: 'Contraseña'}],
        buttons: [{text: 'Cancelar', handler: async () => {this.encedido = true} }, {text: 'Confirmar', handler: async (data) => {this.confirmarPassword(data.password)}}],
        cssClass: 'my-custom-class', 
        backdropDismiss: false,
      });
      
      await alert.present();
    }
  }
  async confirmarPassword(password: string){
    const enteredPassword = password;
    if (enteredPassword === '123456'){
      if(this.subscription){
        this.imgCandado = '../../assets/images/candadoCerrado.png';
        this.fondoColor = 'green';
        this.subscription.unsubscribe();
      }
    }else{
      const incorrectPasswordAlert = await this.alertController.create({
        header: 'Contraseña incorrecta',
        message: 'La alarma seguirá activada.',
        buttons: ['Aceptar'],   
        cssClass: 'my-custom-class', 
        backdropDismiss: false,
      });
      this.flashlight.switchOn();
      //this.playAudio('dios.m4a');
      this.vibration.vibrate(5000);
      setTimeout(() => this.flashlight.switchOff(), 5000);
      setTimeout(() => this.reproducirNuevoAudio('../../assets/audio/dios.m4a') , 5000);
      await incorrectPasswordAlert.present();
    }
  }

  async reproducirNuevoAudio(nuevaRuta:any) {
    if (!this.audioDios.paused) {
        this.audioDios.pause();
        this.audioDios.currentTime = 0; // Reinicia la reproducción al principio
    }
    this.audioDios.src = nuevaRuta;
    this.audioDios.play();
}

  logout(){
    this.loginService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  async start() {
    let isPlaying = false; 
    let currentAudio: HTMLAudioElement | null = null; 
    // Inicia la escucha de los eventos del Device Motion
    this.subscription = this.deviceMotion.watchAcceleration({ frequency: 200 }).subscribe(
      async (acceleration: DeviceMotionAccelerationData) => {
        // Obtén los valores de aceleración en los ejes x, y, z
        
        const x = acceleration.x;
        const y = acceleration.y;
        const z = acceleration.z;
       
          // Movimiento hacia la izquierda
          if (acceleration.x >= 2 && !this.isLeft) {
            this.isLeft = true;
            this.isRight = false;
            //this.playAudio('hurtando.m4a');
            this.reproducirNuevoAudio('../../assets/audio/hurtando.m4a');
          } 
           // Movimiento hacia la derecha
          if (acceleration.x <= -2 && !this.isRight) {
            this.isRight = true;
            this.isLeft = false;
             //this.playAudio('epa.m4a');
             this.reproducirNuevoAudio('../../assets/audio/epa.m4a');
          }

          // Movimiento vertical
          if (acceleration.y > 8 && acceleration.z  < 2 && !this.isVertial && await this.flashlight.available()) {
            // Dispositivo en posición vertical
            this.isVertial = true;
            this.isHorizontal = false;
            this.flashlight.switchOn();
            //this.playAudio('dejalo.m4a');
            this.reproducirNuevoAudio('../../assets/audio/dejalo.m4a');
            setTimeout(() => this.flashlight.switchOff(), 5000);
          } 
          if(acceleration.y < 2 && acceleration.z  > 8 && !this.isHorizontal) {
            // Dispositivo en posición horizontal
            this.isHorizontal = true;
            this.isVertial = false;
            this.vibration.vibrate(5000);
            //this.playAudio('dios.m4a');
            this.reproducirNuevoAudio('../../assets/audio/dios.m4a');
          }
      }
    );
  }

  lockOrientation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  async  playAudio(audioFile: string) {
    await this.delay(3000);
    const audio = new Audio('../../assets/audio/'+ audioFile);
    audio.play();
  }
  async  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // async mostrarModalContraseña() {
  //   const modal = await this.modalCtrl.create({
  //     // component: TuComponenteModal,

  //   })
  // }
  

}
