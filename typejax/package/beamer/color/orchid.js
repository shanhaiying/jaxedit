
/* JaxEdit: online LaTeX editor with live preview
 * Copyright (c) 2011-2014 JaxEdit project
 * License: The MIT License
 *
 * Website: http://jaxedit.com
 * Source:  https://github.com/zohooo/jaxedit
 * Release: http://code.google.com/p/jaxedit/
 */

(function(){
  var definitions = {environment: {}, command: {}};
  var renderers = {};

  var styles = {
    "div.frame, div.maketitle": {
      "color": "black",
      "background": "white"
    },

    "div.frametitle": {
      "color": "blue"
    },

    "div.framesubtitle": {
      "color": "blue"
    },

    "div.theorem": {
      "background": "#E9E9F3",
      "color": "black"
    },

    ".thmhead": {
      "background": "#262685",
      "color": "white"
    },

    "h1": {
      "color": "blue"
    }
  };

  typejax.parser.extend("beamer/color/orchid", definitions, renderers, styles);
})();
