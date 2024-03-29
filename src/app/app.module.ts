import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { BebidaComponent } from './pages/bebida/bebida.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './service/auth/auth.service';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { ComidaComponent } from './pages/comida/comida.component';
import { MatTableModule } from '@angular/material/table';
import { LOCALE_ID } from '@angular/core';
import { BebidaInserirDialogComponent } from './pages/bebida-inserir-dialog/bebida-inserir-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';
import { TipoBebidaPipe } from './shared/pipes/tipo-bebida/tipo-bebida.pipe';
import { BebidaEditarDialogComponent } from './pages/bebida-editar-dialog/bebida-editar-dialog.component';
import { BebidaService } from './service/bebida/bebida.service';
import { ComidaInserirDialogComponent } from './pages/comida-inserir-dialog/comida-inserir-dialog.component';
import { ComidaService } from './service/comida/comida.service';
import { ComidaEditarDialogComponent } from './pages/comida-editar-dialog/comida-editar-dialog.component';
import { OrdemRefeicaoPipe } from './shared/pipes/ordem-refeicao/ordem-refeicao.pipe';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { ReservaInserirDialogComponent } from './pages/reserva-inserir-dialog/reserva-inserir-dialog.component';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ReservaEditarDialogComponent } from './pages/reserva-editar-dialog/reserva-editar-dialog.component';
import { MesaComponent } from './pages/mesa/mesa.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { FuncionarioInserirDialogComponent } from './pages/funcionario-inserir-dialog/funcionario-inserir-dialog.component';
import { FuncionarioEditarDialogComponent } from './pages/funcionario-editar-dialog/funcionario-editar-dialog.component';
import { PeriodoPipe } from './shared/pipes/periodo/periodo.pipe';


registerLocaleData(localePt);

const firebaseConfig = {
  apiKey: "AIzaSyBvciYkOI96YDM2l1Sq8b_Mhs65tAiJG0A",
  authDomain: "james-7539c.firebaseapp.com",
  databaseURL: "https://james-7539c.firebaseio.com",
  projectId: "james-7539c",
  storageBucket: "james-7539c.appspot.com",
  messagingSenderId: "264089692335",
  appId: "1:264089692335:web:2d5c34dfd878d86b120c5a",
  measurementId: "G-21N10M86FQ"
};

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    BebidaComponent,
    LoginComponent,
    NavigationComponent,
    ComidaComponent,
    BebidaInserirDialogComponent,
    ConfirmDialogComponent,
    TipoBebidaPipe,
    OrdemRefeicaoPipe,
    BebidaEditarDialogComponent,
    ComidaInserirDialogComponent,
    ComidaEditarDialogComponent,
    ReservaComponent,
    ReservaInserirDialogComponent,
    ReservaEditarDialogComponent,
    MesaComponent,
    FuncionarioComponent,
    FuncionarioInserirDialogComponent,
    FuncionarioEditarDialogComponent,
    PeriodoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    CurrencyMaskModule,
    MatRadioModule,
    MatSelectModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [
    AngularFirestore,
    AuthService,
    BebidaService,
    ComidaService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
