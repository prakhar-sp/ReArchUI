import React from 'react';
import DocumentManagementPanel from '../components/DocumentManagementPanel';
import DocumentViewer from '../components/DocumentViewer';
import ChatInterface from '../components/ChatInterface';
import CitationAnalysisPanel from '../components/CitationAnalysisPanel';
import './ThreePanelLayout.css'; // Assuming you will create a CSS file for layout styles

const ThreePanelLayout: React.FC = () => {
    return (
        <div className="three-panel-layout">
            <aside className="left-sidebar">
                <DocumentManagementPanel />
            </aside>
            <main className="middle-panel">
                <DocumentViewer content="Your document content here" />
                <ChatInterface />
            </main>
            <aside className="right-sidebar">
                <CitationAnalysisPanel />
            </aside>
        </div>
    );
};

export default ThreePanelLayout;