import { RouterModule } from '@angular/router';

import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { Error404Component } from './components/error404/error404.component';

@NgModule({
    declarations: [
        NavbarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Component // Rota caso ele não encontre as rotas iniciais
            }
        ])
    ],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule {

}