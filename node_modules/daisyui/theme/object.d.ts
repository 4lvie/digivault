interface Theme {
  "color-scheme": string
  "--color-base-100": string
  "--color-base-200": string
  "--color-base-300": string
  "--color-base-content": string
  "--color-primary": string
  "--color-primary-content": string
  "--color-secondary": string
  "--color-secondary-content": string
  "--color-accent": string
  "--color-accent-content": string
  "--color-neutral": string
  "--color-neutral-content": string
  "--color-info": string
  "--color-info-content": string
  "--color-success": string
  "--color-success-content": string
  "--color-warning": string
  "--color-warning-content": string
  "--color-error": string
  "--color-error-content": string
  "--radius-selector": string
  "--radius-field": string
  "--radius-box": string
  "--size-selector": string
  "--size-field": string
  "--border": string
  "--depth": string
  "--noise": string
}


interface Themes {
  valentine: Theme
  halloween: Theme
  cmyk: Theme
  corporate: Theme
  winter: Theme
  fantasy: Theme
  aqua: Theme
  pastel: Theme
  lemonade: Theme
  garden: Theme
  silk: Theme
  coffee: Theme
  caramellatte: Theme
  black: Theme
  wireframe: Theme
  cyberpunk: Theme
  acid: Theme
  nord: Theme
  bumblebee: Theme
  night: Theme
  dracula: Theme
  synthwave: Theme
  dark: Theme
  light: Theme
  forest: Theme
  emerald: Theme
  abyss: Theme
  business: Theme
  cupcake: Theme
  autumn: Theme
  dim: Theme
  lofi: Theme
  sunset: Theme
  luxury: Theme
  retro: Theme
  [key: string]: Theme
}

declare const themes: Themes
export default themes