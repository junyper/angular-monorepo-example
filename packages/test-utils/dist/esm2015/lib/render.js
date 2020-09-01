import { Component } from '@angular/core';
import { configure, render as _render } from '@testing-library/angular';
configure({
    defaultImports: [],
});
class Fixture {
}
Fixture.decorators = [
    { type: Component, args: [{ selector: 'test-fixture', template: '' },] }
];
export const render = (...args) => {
    const [first, second] = args;
    if (typeof first === 'function') {
        return _render(first, Object.assign({ excludeComponentDeclaration: true }, second));
    }
    else {
        return _render(Fixture, first);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9yZW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sSUFBSSxPQUFPLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RSxTQUFTLENBQUM7SUFDUixjQUFjLEVBQUUsRUFBRTtDQUNuQixDQUFDLENBQUM7QUFFSCxNQUNNLE9BQU87OztZQURaLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTs7QUFHckQsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRTtJQUNqQyxNQUFNLENBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBRSxHQUFHLElBQUksQ0FBQztJQUMvQixJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRTtRQUMvQixPQUFPLE9BQU8sQ0FBQyxLQUFLLGtCQUFJLDJCQUEyQixFQUFFLElBQUksSUFBSyxNQUFNLEVBQUcsQ0FBQztLQUN6RTtTQUFNO1FBQ0wsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2hDO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb25maWd1cmUsIHJlbmRlciBhcyBfcmVuZGVyIH0gZnJvbSAnQHRlc3RpbmctbGlicmFyeS9hbmd1bGFyJztcblxuY29uZmlndXJlKHtcbiAgZGVmYXVsdEltcG9ydHM6IFtdLFxufSk7XG5cbkBDb21wb25lbnQoeyBzZWxlY3RvcjogJ3Rlc3QtZml4dHVyZScsIHRlbXBsYXRlOiAnJyB9KVxuY2xhc3MgRml4dHVyZSB7fVxuXG5leHBvcnQgY29uc3QgcmVuZGVyID0gICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IFsgZmlyc3QsIHNlY29uZCBdID0gYXJncztcbiAgaWYgKHR5cGVvZiBmaXJzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfcmVuZGVyKGZpcnN0LCB7IGV4Y2x1ZGVDb21wb25lbnREZWNsYXJhdGlvbjogdHJ1ZSwgLi4uc2Vjb25kIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfcmVuZGVyKEZpeHR1cmUsIGZpcnN0KTtcbiAgfVxufVxuIl19