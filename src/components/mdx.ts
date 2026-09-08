// Registry of custom components available inside MDX grammar content.
// Passed to <Content components={mdxComponents} /> in the grammar layout.
import Token from './Token.astro';
import Formula from './Formula.astro';
import Example from './Example.astro';
import Mistake from './Mistake.astro';
import MinPair from './MinPair.astro';
import Note from './Note.astro';
import Conjugation from './Conjugation.astro';
import CompareTable from './CompareTable.astro';

export const mdxComponents = {
  Token,
  Formula,
  Example,
  Mistake,
  MinPair,
  Note,
  Conjugation,
  CompareTable,
};

export type MdxComponents = typeof mdxComponents;