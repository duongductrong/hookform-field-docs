import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

/* eslint sort-keys: error */
/**
 * @type {import('HookForm Field-theme-docs').DocsThemeConfig}
 */
export default {
  direction: "ltr",
  navigation: true,
  darkMode: true,
  docsRepositoryBase: "https://github.com/duongductrong/hookform-field-docs",
  editLink: {
    text: "Edit this page on GitHub",
  },
  logo: <span>✦ HookForm Field</span>,
  faviconGlyph: "✦",
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      additionalLinkTags: [
        {
          href: "/apple-icon-180x180.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        {
          href: "/android-icon-192x192.png",
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
        },
        {
          href: "/favicon-96x96.png",
          rel: "icon",
          sizes: "96x96",
          type: "image/png",
        },
        {
          href: "/favicon-32x32.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/favicon-16x16.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        { content: "HookForm Field", name: "apple-mobile-web-app-title" },
        { content: "#fff", name: "msapplication-TileColor" },
        { content: "/ms-icon-144x144.png", name: "msapplication-TileImage" },
      ],
      description:
        frontMatter.description || "HookForm Field: the Next.js site builder",
      openGraph: {
        images: [
          {
            url:
              frontMatter.image || "https://hookform-field.vercel.app/og.png",
          },
        ],
      },
      titleTemplate: "%s – HookForm Field",
      twitter: {
        cardType: "summary_large_image",
        site: "https://hookform-field.vercel.app",
      },
    };
  },
} as DocsThemeConfig;
