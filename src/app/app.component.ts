import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h1>hey there {{title}}</h1>
	`,
	styles: [`
		h1 {
			color: grey;
		}
	`]
})
export class AppComponent {
	title = 'ahey way!!';
}
