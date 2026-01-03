import { Variants } from "framer-motion";
import { shouldReduceAnimations, isMobile } from "./device";

// Check once and cache the result
const reduceAnimations = shouldReduceAnimations();
const isMobileDevice = isMobile();

export const ANIMATION_DURATION = {
  fast: reduceAnimations ? 0.1 : 0.3,
  medium: reduceAnimations ? 0.2 : 0.5,
  slow: reduceAnimations ? 0.3 : 0.8,
  stagger: reduceAnimations ? 0.05 : 0.2,
} as const;

// Simplified animations for mobile/low-end devices
const getAnimationConfig = () => {
  if (reduceAnimations) {
    return {
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.1 },
      },
      scaleIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.1 },
      },
      slideIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.1 },
      },
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0,
          },
        },
      } as Variants,
      itemVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        },
      } as Variants,
      cardHover: isMobileDevice
        ? {}
        : {
            scale: 1.01,
            transition: {
              duration: 0.2,
              ease: "easeOut" as const,
            },
          },
    };
  }

  return {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: ANIMATION_DURATION.medium },
    },
    scaleIn: {
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.5 },
    },
    slideIn: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.5 },
    },
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
        },
      },
    } as Variants,
    itemVariants: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    } as Variants,
    cardHover: {
      scale: 1.02,
      y: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };
};

export const animations = getAnimationConfig();
