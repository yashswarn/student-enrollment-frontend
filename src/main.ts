import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Routes } from '@angular/router';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error("error is->",err));
