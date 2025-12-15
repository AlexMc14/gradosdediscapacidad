import { getCollection } from 'astro:content';

const entries = await getCollection('provincias');
console.log('Total provincias:', entries.length);
console.log('First 5 IDs:', entries.slice(0, 5).map(e => e.id));
