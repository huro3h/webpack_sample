const message = 'nemui?';

export const APP_NAME = 'webpack_sample';

export function hello() {
  console.log(message);
}

// Class
export class Figure {
  static double(base) {
    return base * 2;
  }
}
