export type ButtonType = {
  /**
   * The button's text.
   * @default ''
   */
  label?: string;

  /**
   * The button's icon.
   * @default null
   */
  icon?: React.ReactChild;

  /**
   * The button's text color.
   * @default 'primary'
   */
  color?: string;

  /**
   * The button's inline style.
   */
  style?: React.CSSProperties;

  /**
   * If the button should have a border.
   * @default false
   */
  bordered?: boolean;

  /**
   * If the button is disabled;
   * @default false
   */
  disabled?: boolean;

  /**
   * If the button is loading.
   * @default false
   */
  loading?: boolean;

  /**
   * If the button should have rounded corners.
   */
  flat?: boolean;

  /**
   * If the button should be a circle
   */
  rounded?: boolean;

  /**
   * If the button should look like a link.
   * @default false
   */
  text?: boolean;

  /**
   * The button's size [ sm | md | lg | xl | custom ].
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;

  /**
   * The button's classes name.
   */
  className?: string;

  /**
   * URL path to navigate to.
   */
  to?: string;

  /**
   * On click handler.
   */
  onClick?: () => void;

  /**
   * On double click handler.
   */
   onDoubleClick?: () => void;

  /**
   * On mouse over handler.
   */
  onMouseOver?: () => void;
};