import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from "./components/herolist/herolist.component";
import { CharacterComponent } from "./components/character/character.component";

const ROUTES: Routes = [
    { path: "", component: HeroListComponent },
    { path: "list", component: HeroListComponent },
    { path: "character/:id", component: CharacterComponent },
    { path: "**", redirectTo: "/", pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRouteModule { }