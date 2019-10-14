export const stylesFromComponentConfig = {
  computed: {
    configVariables() {
      // This method must be implemented.
      // It should return a string containing the values of all the variables that are used in the `configStyles` method.
      // e.g. return `${this.space}${this.intrinsic}`;
      // It is used to create a string to uniquely identify the current, specific configuration of the component.
      return null;
    },
    configIdentifier() {
      return `${this.name}-${this.configVariables}`;
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
    configStyles(selector) {
      // This method must be implemented.
      // It receives a string that can be used as a selector in css to target this specific configuration of the component.
      // It should return a string suitable for adding as HTML, inside of a style tag.
      return null;
    },
    createStylesForConfig() {
      if (typeof this.configStyles !== 'function') return;
      if (!this.configVariables || !this.configVariables.length) return;
      if (document.getElementById(this.configIdentifier)) return;

      const styleHtml = this.configStyles(`[data-identifier="${this.configIdentifier}"]`);
      if (styleHtml === null) return;

      document.head.innerHTML += `<style id="${this.configIdentifier}">${styleHtml}</style>`
        .replace(/\s\s+/g, ' ')
        .trim();
    },
  },
};
