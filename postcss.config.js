module.exports = (config) => [
    require("stylelint")(),
    require("postcss-import")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "70rem",
            maxWidthNarrow: "50rem",
            colorPrimaryDark: "#143fcc",
            colorPrimary: "#16d5d9",
            colorSecondaryDark: "#22846C",
            colorSecondary: "#46BE77",
            colorNeutralDark: "#121212",
            colorNeutral: "#8C8D91",
            colorNeutralLight: "#FBFCFC",
            colorText: "#ffffff",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
