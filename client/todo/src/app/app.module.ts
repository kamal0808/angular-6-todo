import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {TodoService} from './todo.service';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {MatInputModule, MatButtonModule, MatListModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
