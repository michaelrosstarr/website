'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeInputProps {
    code: string;
    language: string;
}

export const CodeBlock: React.FC<CodeInputProps> = (props) => {
    const { code, language } = props;
    return (
        <SyntaxHighlighter language={language} style={vscDarkPlus} customStyle={{ borderRadius: "0.25rem" }}>
            {code}
        </SyntaxHighlighter>
    );
};