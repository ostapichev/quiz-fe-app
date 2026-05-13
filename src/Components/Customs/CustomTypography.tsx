import { Typography, type TypographyProps } from '@mui/material';

interface IProps {
  fontWeight?: string;
  padding?: number;
  text: string;
  textAlign: TypographyProps['align'];
  variant: TypographyProps['variant'];
}

export const CustomTypography = ({
  fontWeight,
  padding,
  text,
  textAlign,
  variant,
}: IProps) => {
  return (
    <Typography
      gutterBottom
      sx={{ fontWeight, padding, textAlign }}
      variant={variant}
    >
      {text}
    </Typography>
  );
};
