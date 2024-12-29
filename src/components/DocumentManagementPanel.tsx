import React, { useState } from 'react';

const DocumentManagementPanel = () => {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

    interface Document {
        name: string;
        type: string;
        size: number;
        content: string;
        id: string;
    }

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDocuments: Document[] = Array.from(event.target.files || []).map(file => ({
            name: file.name,
            type: file.type,
            size: file.size,
            content: '', // Placeholder for content
            id: file.name + Math.random() // Simple unique ID
        }));
        setDocuments([...documents, ...newDocuments]);
    };

    const handleDelete = (id: string) => {
        setDocuments(documents.filter(doc => doc.id !== id));
    };

    const handleSelect = (id: string) => {
        setSelectedDocument(id);
    };

    const toggleDocumentViewer = () => {
        // Logic to toggle document viewer visibility
    };

    return (
        <div className="document-management-panel">
            <input type="file" multiple onChange={handleUpload} />
            <ul>
                {documents.map(doc => (
                    <li key={doc.id} className={selectedDocument === doc.id ? 'active' : ''}>
                        <span onClick={() => handleSelect(doc.id)}>{doc.name}</span>
                        <button onClick={() => handleDelete(doc.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={toggleDocumentViewer}>Toggle Document Viewer</button>
        </div>
    );
};

export default DocumentManagementPanel;