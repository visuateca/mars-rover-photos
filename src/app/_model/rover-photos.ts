import { Rovers } from './rovers';

export class RoverPhotos {

    private id: number = 0;
    private sol: number = 0;
    private camera: Camera;
    private img_src: string = '';
    private earth_date: string = '';
    private rover: Rover;

    public constructor(
        id: number, sol: number, camera: Camera, img_src: string, earth_date: string, rover: Rover
        ) {
        
            this.id = id;
            this.sol = sol;
            this.camera = camera;
            this.img_src = img_src;
            this.earth_date = earth_date;
            this.rover = rover;    

    }

}

interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}