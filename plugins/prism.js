import Prism from 'prismjs';

/*
import 'prism-themes/themes/prism-material-oceanic.css' 

// Include the toolbar plugin: (optional)
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/toolbar/prism-toolbar.css";

// Include the line numbers plugin: (optional)
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// Include the line highlight plugin: (optional)
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";
*/

// Include some other plugins: (optional)
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/highlight-keywords/prism-highlight-keywords";
import "prismjs/plugins/show-language/prism-show-language";

// Include additional languages
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-php.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-typoscript.js";
import "prismjs/components/prism-scss.js";


// Set vue SFC to markdown
Prism.languages.vue = Prism.languages.markup;

export default Prism;

