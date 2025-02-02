const CONSTANTS = {
  BG_TILE_BLACK: 'bg-tile-black',
  CUTOUT_ID: 'cutout',
  GALLERY_ID: 'gallery',
  MORE_FROM_ID: 'more-from',
  HERO_HEADER_ID: 'hero-header',
  HERO_PARAGRAPH_ID: 'hero-paragraph',
  LEARN_MORE_BUTTON_ID: 'learn-more-button',
  LEARN_MORE_ANCHOR_ID: 'learn-more-anchor',
  MAIN_ID: 'main',
  MAIN_LEFT_ID: 'main-left',
  PRIMARY_HERO_ID: 'primary-hero',
  RICO_BACK_ANCHOR_ID: 'rico-back-anchor',
  RICO_BACK_BUTTON_ID: 'rico-back-button',
};

const getElementById = id => document.getElementById(id);

const setGallery = () => {
  const galleryDiv = getElementById(CONSTANTS.GALLERY_ID);
  const { slides } = data;

  slides.map(slide => {
    const borderDiv = document.createElement('div');

    const thumbnailDiv = document.createElement('div');

    const thumbnail = document.createElement('img');
    thumbnail.src = `ui-ux-home-assignment${slide.thumbnail}`;
    thumbnail.onclick = () => setRicoPage(slide);

    borderDiv.appendChild(thumbnailDiv);
    thumbnailDiv.appendChild(thumbnail);
    galleryDiv.appendChild(borderDiv);
  });
};

const setRicoPage = slide => {
  getElementById(CONSTANTS.PRIMARY_HERO_ID).title = slide.backgroundAlt;
  getElementById(CONSTANTS.MORE_FROM_ID).innerText = slide.headline;
  getElementById(CONSTANTS.RICO_BACK_BUTTON_ID).innerText = slide.overline;
  getElementById(CONSTANTS.RICO_BACK_ANCHOR_ID).href = slide.buttonLink;
  getElementById(CONSTANTS.CUTOUT_ID).alt = slide.cutoutAlt;
  getElementById(CONSTANTS.HERO_HEADER_ID).innerText = slide.title;
  getElementById(CONSTANTS.HERO_PARAGRAPH_ID).innerText = slide.paragraph;
  getElementById(CONSTANTS.LEARN_MORE_BUTTON_ID).innerText = slide.button;
  getElementById(CONSTANTS.LEARN_MORE_ANCHOR_ID).href = slide.buttonLink;

  document.getElementById('primary-hero').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url('ui-ux-home-assignment${slide.background}')`;
};

const initAttributes = () => {
  const { slides } = data;
  setRicoPage(slides[0]);
  setGallery();
};

const appendBottomPanel = () => {
  if (screen.availWidth > 920) {
    getElementById(CONSTANTS.MAIN_LEFT_ID)
      .appendChild(getElementById(CONSTANTS.BG_TILE_BLACK));
  }
};

(() => initAttributes())();
(() => appendBottomPanel())();
