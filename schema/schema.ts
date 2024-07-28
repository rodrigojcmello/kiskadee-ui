type SizeKeys = 'xxs' | 'xxxs' | 'xl' | 'md' | 'sm' | 'xs' | 'xxxl' | 'l' | 'xxl';
type SizeValues = [number, 'px' | 'rem' | '%'] | number;

type Schema = {
  button: {
    size: Record<SizeKeys, SizeValues>;
    state: {
      rest: { light: { backgroundColor: string }; dark: { backgroundColor: string } };
      hover: { light: { backgroundColor: string }; dark: { backgroundColor: string } };
    };
  };
};

const x = {
  breakpoint: {
    // Applies to all devices
    all: 0,

    // --------------------------------------------------------------------------------------------
    // Mobile portrait sizes
    // --------------------------------------------------------------------------------------------

    /*
     * Small mobile portrait sizes:
     * iPhone 5 / SE (320)
     */
    sm1: 320,

    /*
     * Regular mobile portrait sizes:
     * Galaxy S6-S10 / S20-S24 / S24 Ultra (360)
     * iPhone 12/13 Mini (360)
     * iPhone 6 / 7 / 8 / X / 11 Pro (375)
     * Galaxy S20/S21 Plus (384)
     * iPhone 12 / 13 / 14 / 15 (390)
     */
    sm2: 360, //+40

    /*
     * Large mobile portrait sizes:
     * Motorola Nexus 6 (411)
     * Galaxy S9+/S10+ / Note 10/20 / S20/S21 Ultra (412)
     * Pixel / OnePlus (412)
     * iPhone 6/7/8 Plus / XR/XS / 11 (414)
     * iPhone 14/15 Pro Max (430)
     */
    sm3: 400, //+40

    // --------------------------------------------------------------------------------------------
    // Small tablet portrait and mobile landscape sizes:
    // --------------------------------------------------------------------------------------------

    /*
     * iPhone 5 (landscape)(568)
     * OnePlus Pad Go (632)
     * Galaxy Tab S4 (712)
     */
    md1: 568, //+168

    /*
     * Small tablet portrait and mobile landscape sizes:
     * iPad Mini 4 / iPad Pro 9 (768)
     * Google Pixel Tablet (928)
     */
    md2: 768, //+100

    // --------------------------------------------------------------------------------------------
    // Large tablet portrait, laptop, and small desktop sizes
    // --------------------------------------------------------------------------------------------

    md3: 1024,
    lg1: 1280,

    // --------------------------------------------------------------------------------------------
    // Large desktop sizes
    // --------------------------------------------------------------------------------------------

    lg2: 1440,
    lg3: 1680
  },
  components: {
    button: {
      responsive: {
        all: 'md',
        lg: 'sm'
      },
      size: {
        xxxl: [0, 'px'],
        xxl: [1, 'x'],
        xl: [2, 'x'],
        l: [3, 'x'],
        md: [4, 'x'],
        sm: [5, 'x'],
        xs: [6, 'x'],
        xxs: [7, 'x'],
        xxxs: [8, 'x']
      },
      state: {
        rest: {
          light: {
            themeName1: {
              backgroundColor: '#f5f5f5'
            },
            themeName2: {
              backgroundColor: '#f5f5f5'
            }
          },
          dark: {
            themeName1: {
              backgroundColor: '#f5f5f5'
            },
            themeName2: {
              backgroundColor: '#f5f5f5'
            }
          }
        },
        hover: {
          light: {
            backgroundColor: '#e0e0e0'
          },
          dark: {
            backgroundColor: '#444'
          }
        }
      }
    }
  }
};
