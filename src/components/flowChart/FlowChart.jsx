import React from 'react'
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css'; 
import courseData from '../../data/coursesData.json';
import { useEffect, useState } from'react';

const FlowChart = () => {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    useEffect(() => {
        const generatedNodes = courseData.map((course, index) => ({
        id: course.id.toString(),
        data: { label: `${course.code}: ${course.courseName}` },
        position: { x: 200 * course.semester, y: 120 * index },
        type: course.prerequisiteID === null ? 'input' : 'default',
        }));

        const generatedEdges = courseData
        .filter(course => course.prerequisiteID !== null)
        .map(course => ({
            id: `e${course.prerequisiteID}-${course.id}`,
            source: course.prerequisiteID.toString(),
            target: course.id.toString(),
        }));

        setNodes(generatedNodes);
        setEdges(generatedEdges);
    }, []);

    return (
        <div style={{ height: '100vh' }}>
            <ReactFlow nodes={nodes} edges={edges} fitView />
        </div>
    );
};

export default FlowChart