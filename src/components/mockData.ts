import { audio1, audio2, audio3 } from "./AudioFiles";
import { coloring, yam } from "./background";

import { IMockData } from "./types";

export const mockData: IMockData[] = [
    {
        id: "1",
        title: "My First English and Igbo Colouring Book",
        audio: audio2,
        date: "November 28, 2024",
        narration: "Male Narration",
        background: coloring
    },
    

    {
        id: "2",
        title: "New Yam Festival",
        audio: audio1,
        date: "December 17, 2024",
        narration: "Male Narration",
        background: yam
    },


    ]