import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { type JSX } from "react";

interface MdxRendererProps {
  source: string;
}

export async function MdxRenderer({ source }: MdxRendererProps): Promise<JSX.Element> {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark-default",
              keepBackground: false,
            },
          ],
        ],
      },
    },
  });

  return (
    <div className="prose-cyber max-w-none text-base leading-relaxed space-y-5">
      {content}
    </div>
  );
}
