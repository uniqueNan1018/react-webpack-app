import React, { useState } from 'react';
import { TreeNodeData } from './types';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import './TreeNode.scss';

interface Props {
    node: TreeNodeData;
    level?: number;
    customStyle?: React.CSSProperties;
}

const TreeNode: React.FC<Props> = ({ node, level = 0, customStyle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="tree-node">
            <div
                onClick={() => hasChildren && setIsOpen(!isOpen)}
                style={{ cursor: hasChildren ? 'pointer' : 'default' }}
            >
                {hasChildren && (isOpen ? 
                    <FolderOpenIcon className='icon'/> : 
                    <FolderIcon className='icon'/>)} {node.label}
            </div>
            {isOpen &&
                hasChildren && (
                    <div className="tree-node-children">
                        {
                            node.children!.map((child) => (
                                <TreeNode
                                    key={child.id}
                                    node={child}
                                    level={level + 1}
                                    customStyle={customStyle}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default TreeNode;