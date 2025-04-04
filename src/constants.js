export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

export const ERROR_MESSAGES = {
  CATEGORY_NOT_FOUND: 'Kategori bulunamadı',
  PRODUCT_NOT_FOUND: 'Ürün bulunamadı',
  INGREDIENT_NOT_FOUND: 'Malzeme bulunamadı',
  INVALID_REQUEST: 'Geçersiz istek',
  INTERNAL_ERROR: 'Sunucu hatası'
};

export const SUCCESS_MESSAGES = {
  CATEGORY_CREATED: 'Kategori başarıyla oluşturuldu',
  CATEGORY_UPDATED: 'Kategori başarıyla güncellendi',
  CATEGORY_DELETED: 'Kategori başarıyla silindi',
  PRODUCT_CREATED: 'Ürün başarıyla oluşturuldu',
  PRODUCT_UPDATED: 'Ürün başarıyla güncellendi',
  PRODUCT_DELETED: 'Ürün başarıyla silindi',
  INGREDIENT_CREATED: 'Malzeme başarıyla oluşturuldu',
  INGREDIENT_UPDATED: 'Malzeme başarıyla güncellendi',
  INGREDIENT_DELETED: 'Malzeme başarıyla silindi'
}; 