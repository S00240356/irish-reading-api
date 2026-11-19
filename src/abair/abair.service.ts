import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AbairService {

    async synthesizeSpeech(text: string) {
        const response = await axios.post('https://api.abair.ie/v4/synthesis', 
            {
                input: text,
                voice: 'doc.piper',
                speed: 1,
            },
        {
            headers: {
                'abair-api-key': process.env.ABAIR_API_KEY,
            },

        },
    );
    return response.data;
    }
}
