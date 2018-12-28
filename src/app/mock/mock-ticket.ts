import { Ticket } from '../model/ticket';

export const TICKETS: any = {
    "success": true,
    "tickets": [
        {
            ticketId: 1001,
            phone: '9999999999',
            status: 'Missed',
            note: '',
            createDate: null,
            updateDate: null
        }
    ]
};

export const TICKET: any = {
    "success": true,
    "ticket": {
        ticketId: 1001,
        phone: '9999999999',
        status: 'Missed',
        note: '',
        createDate: null,
        updateDate: null
    }
};

export const SUCCESS: any = {
    "success": true
};

export const ERROR: any = {
    "success": false,
    "error": "an error occurred."
};
