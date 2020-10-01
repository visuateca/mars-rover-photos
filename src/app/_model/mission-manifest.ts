export class MissionManifest {

    private name: string = '';
    private landing_date: string = '';
    private launch_date: string = '';
    private status: string = '';
    private max_sol: number = 0;
    private max_date: string = '';
    private total_photos: number = 0;
    private photos: Array<Photos> = [];

    public constructor(
        name: string, landing_date: string, launch_date: string, status: string, max_sol: number, max_date: string, total_photos: number, photos: Array<Photos>
        ) {

            this.name = name;
            this.landing_date = landing_date;
            this.launch_date = launch_date;
            this.status = status;
            this.max_sol = max_sol;
            this.max_date = max_date;
            this.total_photos = total_photos;
            this.photos = photos;

    }

}

interface Photos {

    sol: string;
    earth_date: string;
    total_photos: number;
    cameras: Array<string>;

}