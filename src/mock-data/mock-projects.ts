import { Project } from '../app/dataModels/project';

export const mockProjects: Project[] = [
    { 
        name: 'kek1',
        sounds: [
            {
                name: 'sound1',
                duration: 154,
                lazy: true,
                files: [
                    {
                        name: 'sound1.mp3',
                        location: './bla',
                        size: 13213,
                        type: 'mp3'
                    },
                    {
                        name: 'sound1.ogg',
                        location: './bla',
                        size: 13213,
                        type: 'ogg'
                    },
                ]
            },
            {
                name: 'sound2',
                duration: 154,
                lazy: true,
                files: [
                    {
                        name: 'sound2.mp3',
                        location: './bla',
                        size: 13213,
                        type: 'mp3'
                    },
                    {
                        name: 'sound2.ogg',
                        location: './bla',
                        size: 13213,
                        type: 'ogg'
                    },
                ]
            }
        ] 
    },
    { 
        name: 'kek2',
        sounds: [
            {
                name: 'sound1-2',
                duration: 154,
                lazy: true,
                files: [
                    {
                        name: 'sound1.mp3',
                        location: './bla',
                        size: 13213,
                        type: 'mp3'
                    }
                ]
            }
        ] 
    },
    { 
        name: 'kek3',
        sounds: [
        {
            name: 'sound1-3',
            duration: 154,
            lazy: true,
            files: [
                {
                    name: 'sound1.mp3',
                    location: './bla',
                    size: 13213,
                    type: 'mp3'
                }
            ]
        }
    ] 
},
];