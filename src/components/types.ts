export interface IAudio{
    id: string;
    title: string;
    // idPlaying: string | undefined;
    audio: string
    // click: any;
}


export interface IMockData{
    id: string;
    title: string;
    audio: string;
}

export interface IAudioProps extends IAudio{ 
     click: any;
     idPlaying: string | undefined;
}