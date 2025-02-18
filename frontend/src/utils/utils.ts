const generateUrl = (locale: string, keyword: string) => {
    return `/${locale}/${keyword}`;
  };

const removeAccents = (string: string) => {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

export { generateUrl, removeAccents };

