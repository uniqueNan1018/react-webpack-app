import React from 'react';
import TreeNode from './TreeNode';
import { TreeNodeData } from './types';

interface TreeProps {
    data: TreeNodeData[];
    customStyle?: React.CSSProperties;
}

const Tree: React.FC<TreeProps> = ({ data, customStyle }) => {
    return (
        <div>
            {data.map((node) => (
                <TreeNode key={node.id} node={node} customStyle={customStyle} />
            ))}
        </div>
    );
};

export default Tree;