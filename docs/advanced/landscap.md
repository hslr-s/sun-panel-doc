# Beautification Instructions Beta

The minimum supported version is `v1.5.0-beta24-07-03+`, requiring [custom CSS and JS](./custom_js_css.md) and [custom footer](../usage/custom_footer.md) for enhanced styles and flexible functionality, providing more playability. Group folding and custom project card sizes for each group are available. Everything awaits our exploration together. Using this feature requires extensive front-end knowledge (JS, CSS, HTML).

## Group Style Classes

Starting from `v1.5.0-beta24-07-03`, a unique identifier for groups has been added. This identifier is included in the HTML tag class. Since this is a `beta` feature, it may be adjusted or removed at any time in the future. Please refer to the latest version instructions and documentation.

::: info Note
The class name format for groups is: `item-group-[unique group identifier]`
:::

Example:

If your unique group identifier is `test`, the class name should be: `item-group-test`.

> [!TIP]
> If your project is used by multiple people, to avoid style conflicts, you can add your own prefix to the unique group identifier.

----
Currently, only the group class name has been implemented. Due to the author's busy schedule, there has been no time to implement the functionality, so there are no related tutorial effects. If there is time in the future or if any community members are willing to share, it will be posted here.