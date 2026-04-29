import type { Link, Node } from '@/components/map/map.types';

export const nodes: Node[] = [
    { id: 'A', name: 'Tylova', x: 0, y: 0 },
    { id: 'B', name: 'Semilasso', x: 100, y: 0 },
    { id: 'C', name: 'Husitská', x: 200, y: 0 },
    { id: 'D', name: 'Jungmannova', x: 300, y: 0 },
    { id: 'E', name: 'Šumavská', x: 400, y: 0 },
    { id: 'G', name: 'Královo pole - nádraží', x: 100, y: -100 },
];

export const links: Link[] = [
    { source: 'A', target: 'B', color: 'red' },
    { source: 'B', target: 'C', color: 'red' },
    { source: 'C', target: 'D', color: 'red' },
    { source: 'D', target: 'E', color: 'red' },
    { source: 'G', target: 'B', color: 'green' },
    { source: 'B', target: 'C', color: 'green' },
    { source: 'C', target: 'D', color: 'green' },
    { source: 'D', target: 'E', color: 'green' },
];

export const correctPath = ['A', 'B', 'C', 'D', 'E'];
