import React, { Dispatch, FC, SetStateAction } from 'react';
import { v4 as uuid } from 'uuid';

import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface Props {
    title: string;
    options: string[];
    setFilter?: Dispatch<SetStateAction<string[]>>;
    selectedFilters?: string[];
}

const ProductsFilter: FC<Props> = ({ title, options, setFilter, selectedFilters }) => {
    const handleCheckboxChange = (item: string) => {
        setFilter && setFilter(prev => {
            if (prev.includes(item)) {
                return prev.filter(i => i !== item);
            } else {
                return [...prev, item];
            }
        });
    };

    return (
        <Paper elevation={8} sx={{ px: 2, py: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '1.25rem' }}>
                {title}
            </Typography>
            <FormGroup sx={{ display: 'flex', pt: 2 }}>
                {options.map(item => (
                    <FormControlLabel
                        key={uuid()}
                        control={
                            <Checkbox
                                name={title}
                                value={item}
                                onChange={() => handleCheckboxChange(item)}
                                checked={selectedFilters?.includes(item)}
                            />
                        }
                        label={item}
                    />
                ))}
            </FormGroup>
        </Paper>
    );
};

export default ProductsFilter;
