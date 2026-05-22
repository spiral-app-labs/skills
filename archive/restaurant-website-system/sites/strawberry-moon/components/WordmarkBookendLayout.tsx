import { MinimalTextNav } from './MinimalTextNav';
import { MobileStickyCta } from './MobileStickyCta';
import { WordmarkEcho } from './WordmarkEcho';
import { ThreeColFooter } from './ThreeColFooter';

// WordmarkBookendLayout — the signature primitive.
// Small wordmark (in nav) at top + massive wordmark echo at page bottom,
// with the ThreeColFooter sandwiched just before the echo.
// Every page wraps its content with this.
export function WordmarkBookendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MinimalTextNav />
      <main className="w-full pb-28 md:pb-0">{children}</main>
      <MobileStickyCta />
      <ThreeColFooter />
      <WordmarkEcho />
    </>
  );
}
