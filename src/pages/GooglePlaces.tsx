import React from 'react'
import GooglePlacesSearch from '../components/GooglePlaces/GooglePlacesSearch'
import { Box, SxProps, Theme } from '@mui/material'

const GooglePlaces: React.FC = () => {
    return (
        <Box sx={styles.container}>
            <h1>GOOGLE PLACES</h1>
            <GooglePlacesSearch />
        </Box>
    )
}

export default GooglePlaces


const styles: Record<string, SxProps<Theme>> = {
    container: {
        padding: '50px',
    }
}