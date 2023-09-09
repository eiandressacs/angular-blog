//Arquivo que pergunta se quero criar na hora que estou gerando o meu projeto.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';




//vetor de rotas (que rota vai direcionar para um component)
const routes: Routes = [
  {//acessa o homeComponent
    path:'',
    component:HomeComponent
  },
  {//acessa o contentComponent
    path:'content/:id',
    component:ContentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
