import { writable, get } from 'svelte/store';
import {API_HOST} from '@/constants/env';
import colorOptions from '@/constants/item/colors';

export const colors = writable(colorOptions);
export const customColors = writable({});
export function addNewColor(id, color) {
  customColors.update(x => {
    return {...x, [id]: { color }};
  });
}

function newVariety() {
  return {
    color: null,
    sizes: {
      XS:  0,
      S:   0,
      M:   0,
      L:   0,
      XL:  0,
      XXL: 0,
    },
    quantity: 0,
    images: [],
  };
}

const newItem = () => ({
  name: '',
  type: '',
  description: '',
  price: 0,
  inSizes: false,
  quantity: 0,
  varieties: [newVariety()],
});

export const item = writable(newItem());

export const changeItemField = (field, value) => {
  item.update(itm => ({ ...itm, [field]: value }));
};

export const changeVarietyField = (id, field, value) => {
  item.update(itm => {
    let varieties = itm.varieties;
    varieties[id][field] = value;
    return {...itm, varieties};
  });
};

export const changeVarietySize = (id, size, value) => {
  item.update(itm => {
    let varieties = itm.varieties;
    varieties[id].sizes[size] = value;
    return {...itm, varieties};
  });
};

export const toggleSizes = () => {
  item.update(itm => ({ ...itm, inSizes: !itm.inSizes }));
  saveDraft();
};

export const addVariety = () => {
  item.update(itm => ({ ...itm, varieties: [...itm.varieties, newVariety()] }));
  saveDraft();
};

export const removeVariety = (index) => {
  item.update(itm => ({ ...itm, varieties: itm.varieties.filter((x, i) => i !== index) }));
  saveDraft();
};

export const uploadFiles = async files => {
  // let images = [];
  // TODO: wait for backend explanations and upload all the photos
  for (let file of files) {
    try {
      await fetch(API_HOST + 'file/product', {
        method: 'POST',
        body: file,
      });
    } catch (e) {
      console.error(e);
    }
  }
};

export const clearAll = () => {
  item.update(() => newItem());
  saveDraft();
};

export const getDraft = () => {
  let product = JSON.parse(localStorage.getItem('product-draft'));
  if (product) item.update(() => product);
};

export const saveDraft = () => {
  localStorage.setItem('product-draft', JSON.stringify(get(item)));
};
