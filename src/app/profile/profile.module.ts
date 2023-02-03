import { IntroComponent } from './intro/intro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SplitPipe } from './split.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    ProfileComponent,
    IntroComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    SplitPipe,
    
  ],
 
})
export class ProfileModule { }
