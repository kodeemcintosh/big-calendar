
export const calculateWidth = () => {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

export const calculateHeight = () => {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
