import Link from "next/link";

function LinkWithHover(props: { href: string; children: React.ReactNode }) {
  return (
    <Link href={props.href} className="link">
      {props.children}
    </Link>
  );
}

export { LinkWithHover };
