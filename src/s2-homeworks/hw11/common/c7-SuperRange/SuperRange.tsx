import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                height: '4px',
                color: '#00CC22',
                padding: '13px 0',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1,
                },
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    width: '18px',
                    height: '18px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #00CC22',
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)',
                    },
                    '&::before': {
                        content: '""',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                        boxShadow: 'none',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
