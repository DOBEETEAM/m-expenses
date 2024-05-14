export const hexToRgba = (hex: string, opacity: number | string) => {
  return "rgba(" + hexToRgbCode(hex).join(",") + "," + opacity + ")";
};

export const hexToRgbCode = (hex: string) => {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    // eslint-disable-next-line eqeqeq
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    // eslint-disable-next-line no-bitwise
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  }
  throw new Error("Bad Hex");
};

export const convertToRGB = (hex: string) => {
  return `rgb(${hexToRgbCode(hex).join(",")})`
}

export const rgbaToRgbCode = (rgba: string, background = "#ffffff") => {
  const [bgRed, bgGreen, bgBlue] = hexToRgbCode(background);
  const [inputRed, inputGreen, inputBlue, inputAlpha] = rgba
    .replace(/rgba|\(|\)/g, "")
    .split(",")
    .map((value) => Number(value));

  const isCorrectFormat =
    inputRed >= 0 &&
    inputRed <= 255 &&
    inputGreen >= 0 &&
    inputGreen <= 255 &&
    inputBlue >= 0 &&
    inputBlue <= 255 &&
    inputAlpha >= 0 &&
    inputAlpha <= 1;

  if (isCorrectFormat) {
    const getColorChanel = (color: number, alpha: number, bg: number) =>
      color * alpha + bg * (1 - alpha);

    const redChanel = getColorChanel(inputRed, inputAlpha, bgRed);
    const greenChanel = getColorChanel(inputGreen, inputAlpha, bgGreen);
    const blueChanel = getColorChanel(inputBlue, inputAlpha, bgBlue);
    return [redChanel, greenChanel, blueChanel];
  }
  throw new Error("Bad Rgba");
};

export const rgbaToRgb = (rgba: string, background = "#fff") => {
  return "rgb(" + rgbaToRgbCode(rgba, background).join(",") + ")";
};
