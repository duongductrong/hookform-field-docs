const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  flexsearch: {
    codeblock: false,
  },
});

module.exports = withNextra();
