import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const markdownComponents: Components = {
  table({ children, ...props }) {
    return (
      <div className="table-responsive">
        <table
          className="table table-bordered table-striped"
          {...props}
        >
          {children}
        </table>
      </div>
    );
  },
};

export default function MarkdownRenderer({ text }: { text: string | undefined }) {
  return (
    <div className="answer-text">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}