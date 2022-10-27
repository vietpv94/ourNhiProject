const size = {
    xxs: "500px",
    xs: "768.1px",
    sm: "1024px",
    md: "1200px",
    lg: "1440px",
    xl: "1900px",
    mobile_lg: "1024px",
    mobile_md: "920px",
    mobile_sm: "800px",
    mobile_xs: "700px",
};
export const breakpoints = {
    xxs: `(max-width: ${size.xxs})`,
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    mobile_lg: `(max-width: ${size.mobile_lg}) and (orientation: landscape)`,
    mobile_md: `(max-width: ${size.mobile_md}) and (orientation: landscape)`,
    mobile_sm: `(max-width: ${size.mobile_sm}) and (orientation: landscape)`,
    mobile_xs: `(max-width: ${size.mobile_xs}) and (orientation: landscape)`,
    not_mobile: `(min-width: ${size.xs})`
};