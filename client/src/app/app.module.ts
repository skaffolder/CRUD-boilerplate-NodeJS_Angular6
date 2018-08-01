// DEPENDENCIES
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

// SECURITY
import { SecurityService } from './security/services/security.service';
import { AuthenticationService } from './security/authentication.service';
import { AuthGuard } from './security/auth.guard';
import { AuthInterceptor } from './security/auth.interceptor';

// SECURITY VIEWS
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ProfileComponent } from './security/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';

/* START MY VIEWS IMPORTS*/
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent } from './pages/home/home.component';
import { ActorEditComponent } from './pages/actor-edit/actor-edit.component';
import { ActorListComponent } from './pages/actor-list/actor-list.component';
import { FilmEditComponent } from './pages/film-edit/film-edit.component';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { FilmMakerEditComponent } from './pages/film-maker-edit/film-maker-edit.component';
import { FilmMakerListComponent } from './pages/film-maker-list/film-maker-list.component';

/* END MY VIEWS IMPORTS*/

/* START MY SERVICES IMPORTS*/
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { ActorService } from './services/actor.service';
import { FilmService } from './services/film.service';
import { FilmMakerService } from './services/film-maker.service';
import { UserService } from './services/user.service';

/* END MY SERVICES IMPORTS*/

// LAYOUT
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { SearchPipe } from './pipes/search.pipe';

// DIRECTIVES
import { MailValidator } from './directives/mail.validate.directive';

// DECLARE APPLICATION MODULE
@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, // ROUTES
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    // LAYOUT
    AppComponent,
    NavbarComponent,
    MailValidator,

     // SECURITY
    LoginComponent,
    ProfileComponent,
    ManageUserListComponent,
    ManageUserEditComponent,

    /* START DECLARATIONS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
    HomeComponent,
    ActorEditComponent,
    ActorListComponent,
    FilmEditComponent,
    FilmListComponent,
    FilmMakerEditComponent,
    FilmMakerListComponent,
 /* END DECLARATIONS */

    // PIPE
    SearchPipe
  ],
  providers:    [
    /* START PROVIDERS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
    ActorService,
    FilmService,
    FilmMakerService,
    UserService,
 /* END PROVIDERS */

    // SECURITY
    AuthGuard,
    AuthenticationService,
    SecurityService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class AppModule { }
