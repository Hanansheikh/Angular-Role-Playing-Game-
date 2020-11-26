import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {Compiler, COMPILER_OPTIONS, CompilerFactory} from '@angular/core';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './components/app.component';
import {StartComponent} from './components/start/start.component';
import {CharacterCreationComponent} from './components/character-creation/character-creation.component';
import {StoryComponent} from './components/story/story.component';
import {InventoryComponent} from './components/inventory/inventory.component';
import {FightComponent} from './components/fight/fight.component';

const routes: Routes=[
  {path:"", component: StartComponent},
  {path:"story", component: StoryComponent},
  {path:"character-creation", component: CharacterCreationComponent},
  {path:"fight", component: FightComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CharacterCreationComponent,
    StoryComponent,
    InventoryComponent,
    FightComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [ {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
