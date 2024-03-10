import { getTypedKeys } from "../utils";

const textures = {
  none: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png",
  america:
    "https://t4.ftcdn.net/jpg/03/20/72/25/360_F_320722526_n0ZJ0bocZUGvChS7pHfqlTfpMTG0VjS9.jpg",
  matte:
    "https://img.freepik.com/free-photo/plain-backdrop-decorative-gray-textured_1136-349.jpg",
  feather: "https://img.pikbest.com/origin/09/30/93/72npIkbEsTWYs.jpg!w700wp",
  glass:
    "https://static.vecteezy.com/system/resources/thumbnails/009/578/675/small/realistic-blurred-natural-light-windows-palm-leaves-shadow-overlay-on-wall-paper-or-frames-texture-abstract-background-summer-spring-autumn-for-product-presentation-podium-and-mockup-seasonal-vector.jpg",
  metal:
    "https://img.freepik.com/free-vector/metallic-texture-with-lights-shadows_125540-923.jpg",
  plastic:
    "https://indieground.net/wp-content/uploads/2021/05/Freebie-PlasticTextures-Preview-02.jpg",
  digital: "https://images.vector-images.com/clp5/211016/clp3885800.jpg",
  wood: "https://t4.ftcdn.net/jpg/03/01/16/41/360_F_301164174_cwkA3lQmphf1wwemWEA6TYpmxtC4Fdnh.jpg",
  bubble:
    "https://indieground.net/wp-content/uploads/2021/04/Freebie-BubbleWrapTextures-Preview-05.jpg",
  jaipur:
    "https://t3.ftcdn.net/jpg/02/78/77/76/360_F_278777661_VdhUhPYYm63lWB9dVtKFrJBpulwWqRnB.jpg",
  hyper: "https://img.pikbest.com/origin/09/30/80/42jpIkbEsTIrM.jpg!w700wp",
  ridge:
    "https://c8.alamy.com/comp/S0NP92/beautiful-old-apartment-building-with-classical-architecture-along-S0NP92.jpg",
  jewel:
    "https://img.freepik.com/free-vector/low-poly-luxury-texture-background_1017-27815.jpg",
  mumbai:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIWYKMfTxVUVujY7OgqQG2Jv2P6ryE3TTGA&usqp=CAU",
};

export type TextureType = keyof typeof textures;

export function getTextureTypeArray() {
  return getTypedKeys(textures);
}

export function getTextureImage(txt: TextureType) {
  return textures[txt];
}
