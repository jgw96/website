## Demo Markup
A component that takes in code, renders it within a code element and
demos the code at the same time. Useful for documentation.

Example:

```
<demo-markup language="html" code={`<button type="button" class="c-button">Button</button>
```

### API

**code** - A string of code that you would like to demonstrate

**classes** - Additional classes you can apply to the demo container

**language** - The class to apply to help HighlightJS