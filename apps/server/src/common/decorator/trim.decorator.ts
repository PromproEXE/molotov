import { Transform } from 'class-transformer';

export const Trim = () =>
  Transform(({ value }) => {
    if (typeof value === 'string') return value.trim();
    return value;
  });
