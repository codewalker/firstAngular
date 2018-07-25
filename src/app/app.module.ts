import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

//must import component class to use
import { AppComponent } from './app.component';
import { ServerComponent } from'./server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({       //new components added to declarations array
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [      // add other modules to app; can make this module leaner/outsource some work
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
