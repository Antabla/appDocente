/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5d1e567d0e8b622e6162666b
*
* You will get 10% discount for each one of your friends
* 
*/
// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { EncuestaEditComponent} from './pages/encuesta-edit/encuesta-edit.component';
import { EncuestaListComponent} from './pages/encuesta-list/encuesta-list.component';
import { EstudianteEditComponent} from './pages/estudiante-edit/estudiante-edit.component';
import { EstudianteListComponent} from './pages/estudiante-list/estudiante-list.component';
import { MateriaEditComponent} from './pages/materia-edit/materia-edit.component';
import { MateriaListComponent} from './pages/materia-list/materia-list.component';
import { PreguntaEditComponent} from './pages/pregunta-edit/pregunta-edit.component';
import { PreguntaListComponent} from './pages/pregunta-list/pregunta-list.component';
import { ProfesorEditComponent} from './pages/profesor-edit/profesor-edit.component';
import { ProfesorListComponent} from './pages/profesor-list/profesor-list.component';
import { RespuestaEditComponent} from './pages/respuesta-edit/respuesta-edit.component';
import { RespuestaListComponent} from './pages/respuesta-list/respuesta-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'encuestas/:id',  loadChildren: './pages/encuesta-edit/encuesta-edit.module#EncuestaEditModule' , canActivate: [AuthGuard] },
    { path: 'encuestas',  loadChildren: './pages/encuesta-list/encuesta-list.module#EncuestaListModule' , canActivate: [AuthGuard] },
    { path: 'estudiantes/:id',  loadChildren: './pages/estudiante-edit/estudiante-edit.module#EstudianteEditModule' , canActivate: [AuthGuard] },
    { path: 'estudiantes',  loadChildren: './pages/estudiante-list/estudiante-list.module#EstudianteListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'materias/:id',  loadChildren: './pages/materia-edit/materia-edit.module#MateriaEditModule' , canActivate: [AuthGuard] },
    { path: 'materias',  loadChildren: './pages/materia-list/materia-list.module#MateriaListModule' , canActivate: [AuthGuard] },
    { path: 'preguntas/:id',  loadChildren: './pages/pregunta-edit/pregunta-edit.module#PreguntaEditModule' , canActivate: [AuthGuard] },
    { path: 'preguntas',  loadChildren: './pages/pregunta-list/pregunta-list.module#PreguntaListModule' , canActivate: [AuthGuard] },
    { path: 'profesors/:id',  loadChildren: './pages/profesor-edit/profesor-edit.module#ProfesorEditModule' , canActivate: [AuthGuard] },
    { path: 'profesors',  loadChildren: './pages/profesor-list/profesor-list.module#ProfesorListModule' , canActivate: [AuthGuard] },
    { path: 'respuestas/:id',  loadChildren: './pages/respuesta-edit/respuesta-edit.module#RespuestaEditModule' , canActivate: [AuthGuard] },
    { path: 'respuestas',  loadChildren: './pages/respuesta-list/respuesta-list.module#RespuestaListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
