import type {
  TypographyVariant,
  TypographyPropsVariantOverrides,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';

export type ITypographyProps = OverridableStringUnion<
  TypographyVariant | 'inherit',
  TypographyPropsVariantOverrides
>;
