import { writable } from 'svelte/store';

const note = { id: 0, title: "QUICK", lastModified: new Date(), content: "test1" };

export const CurrentNote = writable(note);