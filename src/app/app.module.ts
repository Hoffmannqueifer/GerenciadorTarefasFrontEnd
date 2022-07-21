import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { CreateComponent } from './components/create/create.component';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateComponent } from './components/update/update.component';
import { CreateAnotacaoComponent } from './components/create-anotacao/create-anotacao.component';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { ListagemFeiraComponent } from './components/listagem-feira/listagem-feira.component';
import { MatTableModule } from '@angular/material/table'
import { CurrencyMaskModule } from "ng2-currency-mask";
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReadAllComponent,
    FinalizadosComponent,
    CreateComponent,
    UpdateComponent,
    CreateAnotacaoComponent,
    ListagemFeiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatBadgeModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    ReactiveFormsModule,
    MatTableModule,
    CurrencyMaskModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
