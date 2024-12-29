import React from 'react';

const DocumentViewer: React.FC<{ content: string }> = ({ content }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="document-viewer">
            <h2>Document Viewer</h2>
            <div className="document-content">
                {content}
            </div>
            <button onClick={toggleCollapse}>
                {isCollapsed ? 'Show Options' : 'Hide Options'}
            </button>
            {!isCollapsed && (
                <div className="collapsible-panel">
                    <h3>Additional Options</h3>
                    {/* Additional options can be added here */}
                </div>
            )}
        </div>
    );
};

export default DocumentViewer;