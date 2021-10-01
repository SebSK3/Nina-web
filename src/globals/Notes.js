import { writable } from 'svelte/store';



const notes = [
    { id: 0, title: "QUICK", lastModified: new Date(), content: "test1" },
    { id: 1, title: "test", lastModified: new Date(), content: "test2" },
    { id: 2, title: "Nina", lastModified: new Date(), content: "test3" },
    { id: 3, title: "private", lastModified: new Date(), content: "test4" },
];

export const Notes = writable(notes);
