type BreakpointType = {
    isMobile: boolean;
    isTablet: boolean;
    isLaptop: boolean;
    isDesktop: boolean;
    isSmall: boolean;
};
// Custom hook to consume the context
export const useBreakpoints = (): BreakpointType => {
    const mobile = 640;
    const tablet = 640;
    const laptop = 1024;
    const desktop = 1280;
    const width = window.innerWidth;
    const isMobile = width <= tablet;
    const isTablet = !isMobile && width > mobile && width <= tablet;
    const isLaptop = !isTablet && width > tablet && width <= laptop;
    const isDesktop = !isLaptop && width > laptop && width <= desktop;
    const isSmall = isMobile || isTablet
    return {
        isMobile,
        isTablet,
        isLaptop,
        isDesktop,
        isSmall
    };
};
