export * from './color';

export const summarizedText = (str: string, maxLength: number) => {
  const oneLineString = str.replace(/\s+/g, ' ').trim();

  // Nếu độ dài vượt quá maxLength, cắt ngắn và thêm dấu "..."
  if (oneLineString.length > maxLength) {
    return oneLineString.slice(0, maxLength - 3) + '...';
  } else {
    return oneLineString;
  }
};

export function formatCurrency(num: number) {
  if (num >= 1e9) {
    return (num / 1e9) + 'B'; // Chia cho 1 tỷ và thêm 'B'
  } else if (num >= 1e6) {
    return (num / 1e6) + 'M'; // Chia cho 1 triệu và thêm 'M'
  } else if (num >= 1e3) {
    return (num / 1e3) + 'K'; // Chia cho 1 nghìn và thêm 'K'
  } else {
    return num.toString(); // Trả về số nếu nhỏ hơn 1 nghìn
  }
}
