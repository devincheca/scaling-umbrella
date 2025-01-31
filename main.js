const CONSTANTS = {
  CUTOUT_ID: 'cutout',
  HEADLINE: 'headline',
  HERO_HEADER_ID: 'hero-header',
  PRIMARY_HERO_ID: 'primary-hero',
  RICO_BACK_ANCHOR_ID: 'rico-back-anchor',
  RICO_BACK_BUTTON_ID: 'rico-back-button',
};

const getElementById = id => document.getElementById(id);

const initAttributes = () => {
  const { slides } = data;
  const [ kitchenFloor ] = slides;

  getElementById(CONSTANTS.PRIMARY_HERO_ID).title = kitchenFloor.backgroundAlt;
  getElementById(CONSTANTS.HEADLINE).innerText = kitchenFloor.headline;
  getElementById(CONSTANTS.RICO_BACK_BUTTON_ID).innerText = kitchenFloor.overline;
  getElementById(CONSTANTS.RICO_BACK_ANCHOR_ID).href = kitchenFloor.buttonLink;
  getElementById(CONSTANTS.CUTOUT_ID).alt = kitchenFloor.cutoutAlt;
  getElementById(CONSTANTS.HERO_HEADER_ID).innerText = kitchenFloor.title;
};
(() => initAttributes())();
