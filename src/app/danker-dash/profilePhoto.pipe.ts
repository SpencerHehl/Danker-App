import { PipeTransform, Pipe } from '@angular/core';
import { MicrosoftGraphService } from './microsoft-graph.service';

@Pipe({
    name: 'profilePhoto',
    pure: false
})
export class ProfilePhotoPipe implements PipeTransform {
    constructor(
        private graphService: MicrosoftGraphService,
    ) {}

    transform(user: any) {
        const newUser = user;
        const photoData = this.graphService.getProfilePhoto(user.userId)
            .then((imageData) => {
                newUser.photo = `data:image/png;base64, ${btoa(unescape(encodeURIComponent(imageData)))}`;
                return newUser;
            })
            .catch((err) => {
                console.error(err);
                return newUser;
            });
    }
}
