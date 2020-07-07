import files from "../plantInfo/index";

export function getNavItems() {
  return Object.keys(files);
}

export function getSubNavItems() {
  return Object.values(files);
}

export function getAllPaths() {
  const topItems = getNavItems();
  const subItems = getSubNavItems();
  const flattened = topItems.map((topItem, index) => {
    return subItems[index].map((subItem) => {
      return {
        params: {
          type: topItem,
          name: subItem.id,
        },
      };
    });
  });

  return flattened.flat();
}

export function getPlantData(id) {
  const subItems = getSubNavItems();
  return subItems
    .map((category) => category.filter((item) => item.id === id))
    .flat();
}
