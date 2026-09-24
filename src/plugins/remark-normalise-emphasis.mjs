/**
 * Normalise common malformed Markdown emphasis in MDX text nodes.
 *
 * The content corpus contains a small amount of legacy prose where a bold
 * span was opened with ** but closed with *, or vice versa. Astro's Markdown
 * parser leaves those markers visible as literal text. This remark plugin
 * repairs only unambiguous mismatched delimiters before rendering.
 */
function normaliseLine(line) {
  if (/^\s*\*{3}\s*$/.test(line)) return line;

  line = line.replace(/\*\*([^*\n]+)\*(?!\*)/g, '**$1**');
  line = line.replace(/(^|[^*])\*([^*\n]+)\*\*(?!\*)/g, '$1*$2*');

  // A bold span containing a final single asterisk is another legacy form.
  // Preserve valid nested emphasis; only repair an otherwise unclosed bold
  // sequence that reaches the end of the line.
  if (/^\s*\*\*[^\n]*\*\s*$/.test(line) && !/\*\*[^\n]*\*\*\s*$/.test(line)) {
    const runs = line.match(/\*+/g) ?? [];
    const doubleRuns = runs.filter((run) => run.length >= 2).length;
    const singleRuns = runs.filter((run) => run.length === 1).length;
    if (doubleRuns === 1 && singleRuns === 1) line += '*';
  }

  return line;
}

function normaliseText(value) {
  return value.split('\n').map(normaliseLine).join('\n');
}

function walk(node) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'text' && typeof node.value === 'string') {
    node.value = normaliseText(node.value);
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child);
  }
}

export default function remarkNormaliseEmphasis() {
  return (tree) => walk(tree);
}
