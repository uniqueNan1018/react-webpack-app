import React from 'react';
import Button from '@mui/material/Button';
import Tree from '../components/Tree';
import { TreeNodeData } from '../components/Tree/types';

const treeData: TreeNodeData[] = [
    {
        id: '1',
        label: '親1',
        children: [
            { id: '1-1', label: '子1-1' },
            {
                id: '1-2',
                label: '子1-2',
                children: [
                    { id: '1-2-1', label: '孫1-2-1' },
                ],
            },
        ],
    },
    {
        id: '2',
        label: '親2',
    },
];

const Home = () => (
    <div>
        <h1>Hello MUI</h1>
            <Button variant="contained" color="primary">
                MUI ボタン
            </Button>
            <Tree
                data={treeData}
                // customStyle={{
                //     color: 'darkblue',
                //     fontWeight: 'bold',
                // }}
            />
    </div>
);
export default Home;