import React from "react";

function Cursor({ visible }) {
  if (!visible) return null;
  return (
    <span className="inline-block w-0.5 h-[1.1em] bg-indigo-400 ml-0.5 align-middle animate-[blink_0.7s_steps(1)_infinite]" />
  );
}

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function MarkdownRenderer({ content, isTyping = false }) {
  const lines = content.split("\n");
  
  return (
    <div className="text-base sm:text-lg leading-relaxed text-zinc-300">
      {lines.map((line, idx) => {
        if (!line.trim()) return <div key={idx} className="h-4" />;

        if (line.startsWith("### ")) {
          return (
            <h3 key={idx} className="text-xl font-bold text-white mt-8 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-500 rounded-full inline-block" />
              {renderInline(line.replace(/^### /, ""))}
            </h3>
          );
        }
        if (line.startsWith("## ")) {
          return (
            <h2 key={idx} className="text-2xl font-extrabold text-white mt-8 mb-4">
              {renderInline(line.replace(/^## /, ""))}
            </h2>
          );
        }
        if (line.startsWith("- ") || line.startsWith("* ")) {
          return (
            <div key={idx} className="flex items-start gap-3 my-2 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
              <p>{renderInline(line.slice(2))}</p>
            </div>
          );
        }
        return (
          <p key={idx} className="my-3">
            {renderInline(line)}
            {/* Attach cursor to the very last line if still typing */}
            {isTyping && idx === lines.length - 1 && <Cursor visible={true} />}
          </p>
        );
      })}
      {/* Fallback cursor if content is completely empty but typing */}
      {isTyping && !content && <Cursor visible={true} />}
    </div>
  );
}