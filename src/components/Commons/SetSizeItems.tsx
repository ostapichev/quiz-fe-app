import { Box, MenuItem, FormControl } from '@mui/material';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

import { CONTENT } from '../../constants';
import { listSizes } from '../../ets';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { valueActions } from '../../store';
import type { TContent } from '../../types';

interface IProps {
  contentType: TContent;
}

export const SetSizeItems = ({ contentType }: IProps) => {
  const dispatch = useAppDispatch();
  const { valueUsers, valueCompanies } = useAppSelector(
    (state) => state.valueReducer,
  );

  const usersContent = contentType === CONTENT.users;
  const value = usersContent ? valueUsers : valueCompanies;

  const actionCreator = usersContent
    ? valueActions.valueStateUsers
    : valueActions.valueStateCompanies;

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(actionCreator(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select value={value} onChange={handleChange}>
          {listSizes.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
