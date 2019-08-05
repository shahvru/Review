import {shahvru} from '../../app/shahvru';

export class busSchedule{
    route: string;
    arrivalTime: string;
    departureTime: string;
  }

export const schedule: busSchedule [] =
[
    {
        route: "Steeles", arrivalTime: "3:30 pm", departureTime: "3:15 pm"
    },
    {
        route: "Queen", arrivalTime: "4:00 pm", departureTime: "4:15 pm"
    }
]