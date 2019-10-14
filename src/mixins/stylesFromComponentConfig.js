export const stylesFromComponentConfig = {
  computed: {
    configIdentifier() {
      // This method must be implemented.
      // It should return a string of the component name, followed by the values of all the variables used in this.configStyles()
      // E.G. for a stack it may return 'stack-1' when splitAfter is 1 (as splitAfter is the only variable used).
      return null;
    },
  },
  beforeMount() {
    this.createStylesForConfig();
  },
  updated() {
    // @todo Is using updated correct? Or should this simply be a watcher for each of the props used in the styles
    this.createStylesForConfig();
  },
  methods: {
    configStyles() {
      // This method must be implemented.
      // It should return a string suitable for adding as HTML, inside of a style tag.
      return null;
    },
    createStylesForConfig() {
      if (typeof this.configStyles !== 'function') return;
      if (!this.configIdentifier || !this.configIdentifier.length) return;
      if (document.getElementById(this.configIdentifier)) return;

      const styleHtml = this.configStyles();
      if (styleHtml === null) return;

      document.head.innerHTML += `<style id="${this.configIdentifier}">${styleHtml}</style>`
        .replace(/\s\s+/g, ' ')
        .trim();
    },
  },
};
