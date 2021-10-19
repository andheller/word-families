import { writable } from 'svelte/store';
import words from './wordlist.json';

let wordArr = words.json;

export const wordList = writable(wordArr);
