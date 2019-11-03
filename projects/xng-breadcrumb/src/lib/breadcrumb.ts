/**
 * Breadcrumb item built internally, private to this module
 */
export interface Breadcrumb {
  /**
   * breacrumb label for a route
   */
  label?: string;
  /**
   * unique alias name for a route path
   */
  alias?: string;
  /**
   * hide or show the breadcrumb item
   */
  skip?: boolean;
  /**
   * custom data for each breadcrumb that is passed back to ng-template
   */
  info?: any;
  /**
   * actual route path with resolved param. Ex /mentor/2, connect/edit
   */
  routeLink?: string;
  /**
   * route with path params converted to a RegExp
   * path '/mentor/:id' becomes routeRegex '/mentor/[^/]+', which can be matched against when needed
   */
  routeRegex?: string;
}
