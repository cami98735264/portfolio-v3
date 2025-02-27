const generateUrl = (locale: string, keyword: string) => {
    return `/${locale}/${keyword}`;
  };

const removeAccents = (string: string) => {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }


const isMainPage = (pathname: string) => {
    return pathname === "/" || pathname === '/en/' || pathname === '/fr/';
  }

export { generateUrl, removeAccents, isMainPage };

