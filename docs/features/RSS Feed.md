Quartz emits an RSS feed for all the content on your site by generating an `index.xml` file that RSS readers can subscribe to. Because of the RSS spec, this requires the `baseUrl` property in your [[deploy/to-east.github.io/docs/configuration]] to be set properly for RSS readers to pick it up properly.

> [!info]
> After deploying, the generated RSS link will be available at `https://${baseUrl}/index.xml` by default.
>
> The `index.xml` path can be customized by passing the `rssSlug` option to the [[deploy/to-east.github.io/docs/plugins/ContentIndex]] plugin.

## Configuration

This functionality is provided by the [[deploy/to-east.github.io/docs/plugins/ContentIndex]] plugin. See the plugin page for customization options.
