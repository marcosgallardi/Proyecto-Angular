import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from './components/comments/comments.component';



export const routes: Routes = [
    {
        path: '',
        component:UserComponent,
        
    },
    {
        path: '/blog',
        component:CommentsComponent  
    }
];
