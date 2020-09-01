import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { ButtonModule } from 'button';
export class HelloModule {
}
HelloModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HelloComponent],
                imports: [ButtonModule],
                exports: [HelloComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9oZWxsby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQU90QyxNQUFNLE9BQU8sV0FBVzs7O1lBTHZCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFFLFlBQVksQ0FBRTtnQkFDekIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbGxvQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxsby5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdidXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtIZWxsb0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFsgQnV0dG9uTW9kdWxlIF0sXG4gIGV4cG9ydHM6IFtIZWxsb0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSGVsbG9Nb2R1bGUgeyB9XG4iXX0=