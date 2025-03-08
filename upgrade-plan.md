# Gatsby 5 Upgrade Plan

## Completed Updates

- Updated package.json dependencies
- Replaced react-tilt with react-parallax-tilt
- Replaced react-helmet with Gatsby Head API in all pages
- Fixed ESLint dependency issues by downgrading eslint-plugin-react-hooks
- Successfully built with Gatsby 4

## Current Issues

- Build error: "Cannot read properties of undefined (reading '0')"
- This appears to be related to image processing

## Next Steps

1. Incrementally upgrade to Gatsby 5
   - Update gatsby core to v5
   - Update gatsby-plugin-image, gatsby-plugin-sharp, and gatsby-transformer-sharp
   - Update other gatsby plugins
2. Test each component with Gatsby 5
3. Add back the PARTIAL_HYDRATION flag when on Gatsby 5

## Dependencies to Check

- gatsby-plugin-image
- gatsby-plugin-sharp
- gatsby-transformer-sharp
- sharp
