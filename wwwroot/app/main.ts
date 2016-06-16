import { bootstrap }    from '@angular/platform-browser-dynamic'
import { ApplicationComponent } from './application.component'
import {Http, ConnectionBackend, HTTP_PROVIDERS} from '@angular/http'

bootstrap(ApplicationComponent, [Http, ConnectionBackend, HTTP_PROVIDERS])