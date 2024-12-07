import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

console.log('Starting application bootstrap...');

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    console.log('Application bootstrapped successfully');
    console.log('Current routes:', appConfig.providers);
  })
  .catch(err => {
    console.error('Bootstrap error:', err);
    console.error('Error details:', {
      message: err.message,
      stack: err.stack,
      name: err.name
    });
  });
