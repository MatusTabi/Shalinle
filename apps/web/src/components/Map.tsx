import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function App() {
    const svgRef = useRef(null);

    useEffect(() => {
        const width = 800;
        const height = 500;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        svg.attr('viewBox', `0 0 ${width} ${height}`)
            .style('width', '100%')
            .style('height', '100%');

        // 👇 GROUP (všetko ide sem!)
        const g = svg.append('g');

        // 🧠 DATA
        const nodes = [
            { id: 'A', x: 100, y: 200 },
            { id: 'B', x: 200, y: 200 },
            { id: 'C', x: 300, y: 200 },
            { id: 'D', x: 300, y: 300 },
            { id: 'E', x: 400, y: 300 },
        ];

        const links = [
            { source: 'A', target: 'B' },
            { source: 'B', target: 'C' },
            { source: 'C', target: 'D' },
            { source: 'D', target: 'E' },
        ];

        const correctPath = ['A', 'B', 'C', 'D', 'E'];

        const isLinkInPath = (s, t) => {
            for (let i = 0; i < correctPath.length - 1; i++) {
                if (
                    (correctPath[i] === s && correctPath[i + 1] === t) ||
                    (correctPath[i] === t && correctPath[i + 1] === s)
                ) {
                    return true;
                }
            }
            return false;
        };

        const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

        // 🎨 LINKY
        g.selectAll('line')
            .data(links)
            .enter()
            .append('line')
            .attr('x1', (d) => nodeMap[d.source].x)
            .attr('y1', (d) => nodeMap[d.source].y)
            .attr('x2', (d) => nodeMap[d.target].x)
            .attr('y2', (d) => nodeMap[d.target].y)
            .attr('stroke', (d) =>
                isLinkInPath(d.source, d.target) ? 'green' : '#ccc',
            )
            .attr('stroke-width', 6)
            .attr('stroke-linecap', 'round');

        // 🚉 ZASTÁVKY
        g.selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y)
            .attr('r', 8)
            .attr('fill', 'white')
            .attr('stroke', 'black')
            .attr('stroke-width', 2);

        // 🏷️ TEXT
        g.selectAll('text')
            .data(nodes)
            .enter()
            .append('text')
            .attr('x', (d) => d.x)
            .attr('y', (d) => d.y - 12)
            .attr('text-anchor', 'middle')
            .attr('font-size', 12)
            .attr('fill', (d) =>
                correctPath.includes(d.id) ? 'green' : 'black',
            )
            .text((d) => d.id);

        // 🖐️ ZOOM + DRAG (PAN)
        const zoom = d3
            .zoom()
            .scaleExtent([0.5, 3])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });

        svg.call(zoom);

        // 🔄 RESET VIEW (uložíme do DOM pre tlačidlo)
        svg.node().__zoomInstance = zoom;
    }, []);

    // 🔄 reset tlačidlo
    const resetView = () => {
        const svg = d3.select(svgRef.current);
        const zoom = svg.node().__zoomInstance;

        svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
    };

    return (
        <div className="w-screen h-screen p-4">
            <h2>MHD hra – draggable mapa</h2>

            <button onClick={resetView}>Reset view</button>

            <svg ref={svgRef} />
        </div>
    );
}
