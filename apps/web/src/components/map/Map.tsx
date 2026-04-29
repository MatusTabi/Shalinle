import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { correctPath, links, nodes } from '@/data/example';
import type { Link, Node } from './map.types';

const calculateDegrees = (nodes: Node[], links: Link[]) => {
    const degreeMap = new Map<string, number>();

    links.forEach((link) => {
        const count = degreeMap.get(link.source) || 0;
        degreeMap.set(link.source, count + 1);
    });

    nodes.forEach((node) => {
        node.degree = degreeMap.get(node.id) || 0;
    });
};

function getNodeAnchorY1(source: Node, target: Node, index: number) {
    console.log(
        'Calculating anchor Y for source:',
        source,
        'target:',
        target,
        'index:',
        index,
    );

    if (source.degree > 1) {
        console.log(
            'Multiple connections, calculating offset for node:',
            source,
        );
        const spacing = 8;
        const offset = (index - (source.degree - 1) / 2) * spacing;
        return source.y + offset;
    }

    return source.y;
}

function getNodeAnchorY2(source: Node, target: Node, index: number) {
    console.log(
        'Calculating anchor Y for target:',
        target,
        'source:',
        source,
        'index:',
        index,
    );

    if (target.degree > 1 && source.degree > 1) {
        console.log(
            'Multiple connections, calculating offset for node:',
            target,
        );
        const spacing = 8;
        const offset = (index - (target.degree - 1) / 2) * spacing;
        return target.y + offset;
    }

    return target.y;
}

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

function svgLinks(
    g: d3.Selection<SVGGElement, unknown, null, undefined>,
    links: Link[],
    nodeMap: Record<string, Node>,
) {
    const linksBySource = d3.group(links, (d) => d.source);

    const getLinkOffset = (node: Node, index: number) => {
        if (node.degree > 1) {
            const spacing = 8;
            return (index - (node.degree - 1) / 2) * spacing;
        }
        return 0;
    };

    g.selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('x1', (d) => nodeMap[d.source].x)
        .attr('y1', (d) => {
            console.log('Calculating y1 for link:', d);
            const source = nodeMap[d.source];
            const siblings = linksBySource.get(d.source) || [];
            const index = siblings.indexOf(d);

            const offset = getLinkOffset(source, index);
            return source.y + offset;
        })
        .attr('x2', (d) => nodeMap[d.target].x)
        .attr('y2', (d) => {
            console.log('Calculating y2 for link:', d);
            const source = nodeMap[d.source];
            const target = nodeMap[d.target];

            const siblings = linksBySource.get(d.source) || [];
            const index = siblings.indexOf(d);

            const offset = getLinkOffset(source, index);
            return target.y + offset;
        })
        .attr('stroke', (d) => d.color)
        .attr('stroke-width', 6)
        .attr('stroke-linecap', 'round');
}

function svgNodes(
    g: d3.Selection<SVGGElement, unknown, null, undefined>,
    nodes: Node[],
) {
    const selection = g.selectAll('g.node').data(nodes).enter().append('g');

    selection
        .filter((d) => d.degree <= 1)
        .append('circle')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', 8)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('stroke-width', 2);

    selection
        .filter((d) => d.degree > 1)
        .append('rect')
        .attr('x', (d) => d.x)
        .attr('y', (d) => d.y - 4 * d.degree)
        .attr('rx', 4)
        .attr('ry', 4)
        .attr('width', 16)
        .attr('height', (d) => 16 * d.degree)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('stroke-width', 2)
        .attr('transform', (d) => `translate(-8, -8)`);
}

function svgLabels(
    g: d3.Selection<SVGGElement, unknown, null, undefined>,
    nodes: Node[],
) {
    g.selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .attr('x', (d) => d.x + (d.degree > 1 ? 10 * d.degree : 16))
        .attr('y', (d) => d.y)
        .attr('text-anchor', 'start')
        .attr('alignment-baseline', 'hanging')
        .attr('font-size', 12)
        .attr('fill', 'white')
        .attr('transform', (d) => `rotate(-45 ${d.x} ${d.y})`)
        .text((d) => d.name);
}

const SchematicMap = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const width = 800;
        const height = 500;

        svg.attr('viewBox', `0 0 ${width} ${height}`)
            .style('width', '100%')
            .style('height', '100%');

        const g = svg.append('g');

        calculateDegrees(nodes, links);

        svgLinks(g, links, nodeMap);
        svgNodes(g, nodes);
        svgLabels(g, nodes);

        const zoom = d3
            .zoom()
            .scaleExtent([0.5, 3])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });

        svg.call(zoom);

        const bounds = g.node()?.getBBox();

        if (bounds) {
            const width = 800;
            const height = 500;

            const scale = 1;

            const transform = d3.zoomIdentity.translate(
                width / 2 - (bounds.x + bounds.width / 2) * scale,
                height / 2 - (bounds.y + bounds.height / 2) * scale,
            );

            svg.call(zoom.transform, transform);
        }

        (svg.node() as any).__zoomInstance = zoom;
    }, []);

    return <svg ref={svgRef} />;
};

export default SchematicMap;
