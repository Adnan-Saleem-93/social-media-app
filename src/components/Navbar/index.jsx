import {Typography} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import {css} from '@emotion/react'
import {CommonTexts} from '../../utils/constants'
import {colors} from '../../assets/colors'
import ProfileMenu from '../common/Profile-Menu'

const styles = {
  gridContainer: css`
    padding: 24px;
    background-color: #cdfcf6;
    font-size: 24px;
    border-radius: 8px;
    width: 100%;
    margin: 0;
    flex-grow: 1;
  `,
  gridItem: css`
    padding: 0 !important;
  `,

  homeLink: css`
    color: ${colors.typography.headers};
    cursor: pointer;
    font-weight: 700;
    &:hover {
      color: ${colors.typography.headers_hover};
    }
  `
}

const Navbar = () => {
  return (
    <Grid container spacing={2} sx={styles.gridContainer}>
      <Grid item xs={3} sx={styles.gridItem}>
        <Typography variant="h5" sx={styles.homeLink}>
          {CommonTexts.APP_HEADER}
        </Typography>
      </Grid>
      <Grid item xs={3} xsOffset={6} sx={styles.gridItem}>
        <ProfileMenu />
      </Grid>
    </Grid>
  )
}

export default Navbar
