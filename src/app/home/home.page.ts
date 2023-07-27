import { Component, OnDestroy } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { AuthService } from '../providers/auth/auth.service';
import { Router } from '@angular/router';

//import { userDb } from '../interfaces/users'





@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  activado = false;
  pass!:string;

  error: any;
  ok: any;

  spinner = false;

  x:number;
  y:number;
  z:number;

  id: any;

  izquierda: any;
  derecha : any;
  vertical : any;
  horizontal : any;

  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;

  flag:any;


  /* Constructor de home*/
  constructor(private deviceMotion : DeviceMotion, private flashlight: Flashlight, private vibration: Vibration, private AuthSvc: AuthService, private router: Router) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  start() {

    this.activado = true;
    
    try {

      var option: DeviceMotionAccelerometerOptions =
      {
        frequency: 200
      };

      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData) => {
        this.x = Math.round(acc.x); // 5
        this.y = Math.round(acc.y);
        this.z = Math.round(acc.z);
        

        // Horizontal
        if((this.x > 5 && (this.y == 0 || this.y == -1 || this.y == -2 || this.y == 1 || this.y == 2) && this.count2 == 0) || (this.x < -5 && (this.y == 0 || this.y == -1 || this.y == -2 || this.y == 1 || this.y == 2) && this.count2 == 0)){
          this.count2 = 1;
          this.vibration.vibrate(5000);
          this.horizontal = new Audio("../../assets/horizontal.mp3");
          this.horizontal.play();

          setTimeout(()=>{this.horizontal.stop();},5000);
          
        } else if((this.x > -5 && this.x < 5) && (this.y == -1 || this.y == 0 || this.y == 1)){this.count2 = 0;}



        //Verical
        if((this.y > 5 && (this.x == 0 || this.x == -1 || this.x == 1) && this.count1 == 0) || (this.y < -5 && (this.x == 0 || this.x == -1 || this.x == 1) && this.count1 == 0)){
          this.count1 = 1;
          this.vertical = new Audio("../../assets/vertical.mp3");
          this.vertical.play();

          this.flashlight.switchOn();
          setTimeout(()=>{
            this.flashlight.switchOff();
          }, 5000);
          

        } else if((this.y > -6 && this.y < 6) && (this.x == 0 || this.x == -1 || this.x == 1)){this.count1 = 0;}



        //Izquierda
        if((this.y > 5 && this.x > 2 && this.count3 == 0) || (this.y < -5 && this.x < -2 && this.count3 == 0)){
          this.count3 = 1;
          this.izquierda = new Audio("../../assets/izquierda.mp3");
          this.izquierda.play();
          
        }else if(((this.y <= 6 && this.y > -1) && (this.x < 2 && this.x > -1)) || ((this.y >= -6 && this.y < 1)) && (this.x > 2 && this.x < 1)){this.count3 = 0;}



        //Derecha OK
        if((this.y > 5 && this.x < -2 && this.count4 == 0) || (this.y < -5 && this.x > 2 && this.count4 == 0)){
          this.count4 = 1;
          this.derecha = new Audio("../../assets/derecha.mp3");
          this.derecha.play();
          
        }else if(((this.y <= 6 && this.y > -1) && (this.x > -2 && this.x < 1)) || ((this.y >= -6 && this.y < 1)) && (this.x < 2 && this.x > -1)){this.count4 = 0;}

      }
      );

    } catch (error) {
      alert("Error: " + error);
    }
  }

  /* async stop(FormValue: any) {
    if(this.loginForm.valid){
      this.spinner = true;
      this.flag = await this.AuthSvc.getUser().subscribe(val =>{
        var d: any;
        d = val;
    
        if(FormValue.password == d.clave){
          setTimeout(()=>{this.spinner = false;},2000);
          this.activado = false;
          this.ok = new Audio("/assets/ok.wav");
          this.ok.play();
          this.flag.unsubscribe();
          this.id.unsubscribe();
        } else {
          setTimeout(()=>{this.spinner = false;},2000);
          this.error = new Audio("/assets/error.mp3");
          this.error.play();
          this.flag.unsubscribe();
        }
        
      });

    } else {
      this.error = new Audio("/assets/error.mp3");
      this.error.play();
    }
    
  } */

  async stop(){ /* La funcion de parar la alarma que en el momento pide contraseña para frenarla*/
    
      this.spinner = true;
      
      if(this.pass == "123456"){
        setTimeout(()=>{this.spinner = false;},2000);
        this.activado = false;
        this.ok = new Audio("../../assets/ok.mp3");
        this.ok.play();
        this.flag.unsubscribe();
        this.id.unsubscribe();
      } else {
        setTimeout(()=>{this.spinner = false;},2000);
        this.error = new Audio("../../assets/error.mp3");
        this.error.play();
        this.flag.unsubscribe();
      }

    
  }

  async Salir(){ /* Va derecho al Login*/
    
    if(this.flag !== undefined){this.flag.unsubscribe();}

    if(this.id !== undefined){await this.id.unsubscribe();}
    this.spinner = true;
    setTimeout(()=>{this.spinner = false;},2000);
    //await this.AuthSvc.logout();
    this.router.navigate(['/login']);
  }
  

}
