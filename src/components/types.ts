export interface IAudio{
    id: string;
    title: string;
    audio: string;
    date: string;
    narration: string;
}


export interface IMockData{
    id: string;
    title: string;
    audio: string;
    date: string;
    narration: string;
}

export interface IAudioProps extends IAudio{ 
     click: any;
     idPlaying: string | undefined;
}