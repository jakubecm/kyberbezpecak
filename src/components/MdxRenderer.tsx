import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { isValidElement, type ComponentProps, type JSX, type ReactNode } from "react";
import { slugify } from "@/lib/utils";
import { type Locale } from "@/i18n/config";

interface MdxRendererProps {
  source: string;
  lang: Locale;
}

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) {
    return textOf((node.props as { children?: ReactNode }).children);
  }
  return "";
}

const components = {
  // Give h2s stable ids so the table of contents can link to them
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <h2 id={slugify(textOf(children))} {...props}>
      {children}
    </h2>
  ),
};

export async function MdxRenderer({ source, lang }: MdxRendererProps): Promise<JSX.Element> {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: { dark: "vesper", light: "github-light" },
              keepBackground: false,
            },
          ],
        ],
      },
    },
  });

  return (
    <div className="prose-kb" data-lang={lang}>
      {content}
    </div>
  );
}
